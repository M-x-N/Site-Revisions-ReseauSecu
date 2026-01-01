"use client";
import { LatexText } from "@/components/ui/latex-text";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { chapters, questions } from "@/lib/data";
import {
    BookOpen,
    Check,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    Eye,
    EyeOff,
    Filter,
    RotateCcw,
    Shuffle,
    X
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";

type QuestionStatus = "unanswered" | "known" | "review";

interface Progress {
  [key: string]: QuestionStatus;
}

export default function QuestionnairePage() {
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffleSeed, setShuffleSeed] = useState<number | null>(null);
  const [progress, setProgress] = useState<Progress>({});

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("quiz-progress");
    if (saved) {
      setProgress(JSON.parse(saved));
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem("quiz-progress", JSON.stringify(progress));
  }, [progress]);

  // Fonction de shuffle déterministe avec seed
  const seededShuffle = useCallback(<T,>(array: T[], seed: number): T[] => {
    const result = [...array];
    let currentSeed = seed;
    for (let i = result.length - 1; i > 0; i--) {
      currentSeed = (currentSeed * 9301 + 49297) % 233280;
      const j = Math.floor((currentSeed / 233280) * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }, []);

  const filteredQuestions = useMemo(() => {
    const qs = selectedChapter === "all"
      ? questions
      : questions.filter(q => q.chapterId === selectedChapter);

    if (shuffleSeed !== null) {
      return seededShuffle(qs, shuffleSeed);
    }

    return qs;
  }, [selectedChapter, shuffleSeed, seededShuffle]);

  const currentQuestion = filteredQuestions[currentIndex];
  const currentChapter = chapters.find(c => c.id === currentQuestion?.chapterId);

  const stats = useMemo(() => {
    const known = Object.values(progress).filter(s => s === "known").length;
    const review = Object.values(progress).filter(s => s === "review").length;
    return { known, review, total: questions.length };
  }, [progress]);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % filteredQuestions.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev - 1 + filteredQuestions.length) % filteredQuestions.length);
  };

  const handleShuffle = useCallback(() => {
    setShuffleSeed(Date.now());
    setCurrentIndex(0);
    setShowAnswer(false);
  }, []);

  const handleMarkAs = (status: QuestionStatus) => {
    if (currentQuestion) {
      setProgress(prev => ({
        ...prev,
        [currentQuestion.id]: status
      }));
    }
  };

  const handleReset = () => {
    setProgress({});
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "facile":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/30";
      case "moyen":
        return "bg-amber-500/10 text-amber-500 border-amber-500/30";
      case "difficile":
        return "bg-red-500/10 text-red-500 border-red-500/30";
      default:
        return "";
    }
  };

  const getStatusColor = (questionId: string) => {
    const status = progress[questionId];
    if (status === "known") return "border-l-4 border-l-emerald-500";
    if (status === "review") return "border-l-4 border-l-amber-500";
    return "";
  };

  if (!currentQuestion) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <p className="text-muted-foreground">Aucune question trouvée pour ce filtre.</p>
        <Button onClick={() => setSelectedChapter("all")}>
          Voir toutes les questions
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Questionnaire</h1>
          <p className="text-muted-foreground">
            Questions basées sur les examens passés (2018-2021)
          </p>
        </div>

        {/* Progress Stats */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm">
            <div className="h-3 w-3 rounded-full bg-emerald-500" />
            <span>{stats.known} maîtrisées</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="h-3 w-3 rounded-full bg-amber-500" />
            <span>{stats.review} à revoir</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleReset}>
            <RotateCcw className="h-4 w-4 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-2 flex-1">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Tabs value={selectedChapter} onValueChange={(v) => {
                setSelectedChapter(v);
                setCurrentIndex(0);
                setShowAnswer(false);
              }}>
                <TabsList className="h-auto flex-wrap">
                  <TabsTrigger value="all" className="text-xs">Tous</TabsTrigger>
                  {chapters.map((c) => (
                    <TabsTrigger key={c.id} value={c.id} className="text-xs">
                      Ch.{c.number}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleShuffle}
              className="gap-2"
            >
              <Shuffle className="h-4 w-4" />
              Mélanger
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Flashcard */}
      <Card className={`min-h-[400px] transition-all ${getStatusColor(currentQuestion.id)}`}>
        <CardHeader>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge variant="outline">
                {currentIndex + 1} / {filteredQuestions.length}
              </Badge>
              {currentChapter && (
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">
                  Chapitre {currentChapter.number}
                </Badge>
              )}
              <Badge variant="outline" className={getDifficultyColor(currentQuestion.difficulty)}>
                {currentQuestion.difficulty}
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Exam {currentQuestion.examYear}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-6">
          {/* Question */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              Question
            </h3>
            <div className="text-lg leading-relaxed">
              <LatexText text={currentQuestion.question} />
            </div>
          </div>

          {/* Answer */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Réponse
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAnswer(!showAnswer)}
                className="gap-2"
              >
                {showAnswer ? (
                  <>
                    <EyeOff className="h-4 w-4" />
                    Masquer
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4" />
                    Afficher
                  </>
                )}
              </Button>
            </div>

              <div
                className={`relative rounded-lg border bg-muted/30 p-4 transition-all duration-300 ${
                  !showAnswer ? "blur-sm select-none" : ""
                }`}
              >
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  <LatexText text={currentQuestion.answer} />
                </div>

                {!showAnswer && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button onClick={() => setShowAnswer(true)}>
                      <Eye className="mr-2 h-4 w-4" />
                      Voir la réponse
                    </Button>
                  </div>
                )}
              </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {currentQuestion.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Link to course */}
          {currentChapter && (
            <Link href={`/cours#${currentChapter.id}`}>
              <Button variant="link" className="gap-2 p-0 h-auto text-primary">
                <BookOpen className="h-4 w-4" />
                Voir le cours : {currentChapter.title}
                <ExternalLink className="h-3 w-3" />
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Mark as buttons */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground mr-2">Marquer comme :</span>
          <Button
            variant={progress[currentQuestion.id] === "known" ? "default" : "outline"}
            size="sm"
            onClick={() => handleMarkAs("known")}
            className="gap-2"
          >
            <Check className="h-4 w-4" />
            Maîtrisée
          </Button>
          <Button
            variant={progress[currentQuestion.id] === "review" ? "default" : "outline"}
            size="sm"
            onClick={() => handleMarkAs("review")}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            À revoir
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={handlePrev}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground w-20 text-center">
            {currentIndex + 1} / {filteredQuestions.length}
          </span>
          <Button variant="outline" size="icon" onClick={handleNext}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / filteredQuestions.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
