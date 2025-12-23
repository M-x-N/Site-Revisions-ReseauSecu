"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { chapters, glossaryTerms } from "@/lib/data";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

export default function GlossairePage() {
  const [search, setSearch] = useState("");

  const filteredTerms = useMemo(() => {
    if (!search) return glossaryTerms;
    const query = search.toLowerCase();
    return glossaryTerms.filter(
      (term) =>
        term.term.toLowerCase().includes(query) ||
        term.definition.toLowerCase().includes(query) ||
        term.relatedTerms.some((rt) => rt.toLowerCase().includes(query))
    );
  }, [search]);

  // Group by first letter
  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: typeof glossaryTerms } = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  const alphabet = Object.keys(groupedTerms).sort();

  const getChapterNumber = (chapterId: string) => {
    const chapter = chapters.find((c) => c.id === chapterId);
    return chapter?.number;
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Glossaire</h1>
        <p className="text-muted-foreground">
          {glossaryTerms.length} termes techniques essentiels en sécurité réseau
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher un terme..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Alphabet Navigation */}
      <div className="flex flex-wrap gap-1">
        {alphabet.map((letter) => (
          <a
            key={letter}
            href={`#letter-${letter}`}
            className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium hover:bg-muted transition-colors"
          >
            {letter}
          </a>
        ))}
      </div>

      {/* Results count */}
      {search && (
        <p className="text-sm text-muted-foreground">
          {filteredTerms.length} résultat{filteredTerms.length !== 1 ? "s" : ""} pour &quot;{search}&quot;
        </p>
      )}

      {/* Terms */}
      <div className="grid gap-8">
        {alphabet.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-20">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-lg">
                {letter}
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {groupedTerms[letter].map((item) => (
                <Card key={item.term} className="group hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg font-semibold text-primary">
                        {item.term}
                      </CardTitle>
                      {getChapterNumber(item.chapter) && (
                        <Link href={`/cours#${item.chapter}`}>
                          <Badge
                            variant="outline"
                            className="text-xs shrink-0 hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors"
                          >
                            Ch. {getChapterNumber(item.chapter)}
                          </Badge>
                        </Link>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.definition}
                    </p>

                    {item.relatedTerms.length > 0 && (
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-muted-foreground">Voir aussi :</span>
                        {item.relatedTerms.map((rt) => (
                          <Badge
                            key={rt}
                            variant="secondary"
                            className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground"
                            onClick={() => setSearch(rt)}
                          >
                            {rt}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* No results */}
      {filteredTerms.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Search className="h-12 w-12 text-muted-foreground/50 mb-4" />
          <p className="text-muted-foreground">
            Aucun terme trouvé pour &quot;{search}&quot;
          </p>
          <button
            onClick={() => setSearch("")}
            className="text-primary hover:underline mt-2"
          >
            Effacer la recherche
          </button>
        </div>
      )}

      {/* Quick Reference */}
      <Card className="bg-gradient-to-br from-slate-900/50 to-purple-900/30 border-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Accès rapide aux cours
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map((chapter) => (
              <Link key={chapter.id} href={`/cours#${chapter.id}`}>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors group">
                  <Badge variant="outline" className="shrink-0">
                    {chapter.number}
                  </Badge>
                  <span className="text-sm truncate">{chapter.title}</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
