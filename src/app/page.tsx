import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { chapters, questions } from "@/lib/data";
import { Book, FileText, HelpCircle, Key, Lock, Network, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const totalQuestions = questions.length;
  const totalChapters = chapters.length;

  const features = [
    {
      icon: Book,
      title: "Résumés de Cours",
      description: "Fiches synthétiques des 7 chapitres avec les points clés",
      href: "/cours",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: HelpCircle,
      title: "Questionnaire",
      description: `${totalQuestions} questions basées sur les examens passés`,
      href: "/questionnaire",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FileText,
      title: "Glossaire",
      description: "Définitions des termes techniques essentiels",
      href: "/glossaire",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const topics = [
    { icon: Shield, label: "Sécurité", color: "bg-blue-500/10 text-blue-500" },
    { icon: Lock, label: "Cryptographie", color: "bg-purple-500/10 text-purple-500" },
    { icon: Network, label: "Réseaux", color: "bg-cyan-500/10 text-cyan-500" },
    { icon: Key, label: "Protocoles", color: "bg-emerald-500/10 text-emerald-500" },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 md:p-12">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.map((topic) => {
              const Icon = topic.icon;
              return (
                <Badge
                  key={topic.label}
                  variant="secondary"
                  className={`${topic.color} border-0`}
                >
                  <Icon className="mr-1 h-3 w-3" />
                  {topic.label}
                </Badge>
              );
            })}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Révisions{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Réseau & Sécurité
            </span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mb-6">
            Préparez votre examen de M1 Informatique avec des résumés de cours complets,
            des questions basées sur les examens passés et un glossaire technique.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/questionnaire">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                <HelpCircle className="mr-2 h-5 w-5" />
                Commencer les révisions
              </Button>
            </Link>
            <Link href="/cours">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Book className="mr-2 h-5 w-5" />
                Voir les cours
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border-blue-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-400">{totalChapters}</div>
            <div className="text-sm text-muted-foreground">Chapitres</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border-purple-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-400">{totalQuestions}</div>
            <div className="text-sm text-muted-foreground">Questions</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-emerald-400">4</div>
            <div className="text-sm text-muted-foreground">Examens</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border-cyan-500/20">
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-cyan-400">39+</div>
            <div className="text-sm text-muted-foreground">Termes</div>
          </CardContent>
        </Card>
      </section>

      {/* Features */}
      <section className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Link key={feature.href} href={feature.href} className="group">
              <Card className="h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </section>

      {/* Chapters Preview */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Aperçu des chapitres</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {chapters.slice(0, 6).map((chapter) => (
            <Link key={chapter.id} href={`/cours#${chapter.id}`}>
              <Card className="group cursor-pointer transition-all hover:border-primary/50 h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Chapitre {chapter.number}
                    </Badge>
                  </div>
                  <CardTitle className="text-base group-hover:text-primary transition-colors">
                    {chapter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {chapter.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-3">
                    {chapter.topics.slice(0, 3).map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                    {chapter.topics.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{chapter.topics.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
