import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { chapters } from "@/lib/data";
import { BookOpen, CheckCircle2, FileDown, Tag } from "lucide-react";
import Link from "next/link";

export default function CoursPage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Résumés des Cours</h1>
        <p className="text-muted-foreground">
          Fiches synthétiques des {chapters.length} chapitres du cours Réseau et Sécurité
        </p>
      </div>

      {/* Chapters */}
      <div className="grid gap-6">
        {chapters.map((chapter) => (
          <Card key={chapter.id} id={chapter.id} className="scroll-mt-20">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">
                      Chapitre {chapter.number}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl md:text-2xl">{chapter.title}</CardTitle>
                  <CardDescription className="mt-2">{chapter.description}</CardDescription>
                </div>
                <Link href={chapter.pdfPath} target="_blank">
                  <Button variant="outline" size="sm" className="gap-2">
                    <FileDown className="h-4 w-4" />
                    PDF Original
                  </Button>
                </Link>
              </div>

              {/* Topics */}
              <div className="flex flex-wrap gap-2 mt-4">
                {chapter.topics.map((topic) => (
                  <Badge key={topic} variant="secondary" className="gap-1">
                    <Tag className="h-3 w-3" />
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent>
              <Accordion type="multiple" className="w-full">
                {/* Summary */}
                <AccordionItem value="summary">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      <span>Points clés à retenir</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 ml-1">
                      {chapter.summary.map((point, index) => (
                        <li key={index} className="flex gap-3">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Key Terms */}
                {chapter.keyTerms.length > 0 && (
                  <AccordionItem value="terms">
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Tag className="h-4 w-4 text-purple-500" />
                        <span>Termes clés ({chapter.keyTerms.length})</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {chapter.keyTerms.map((item, index) => (
                          <div
                            key={index}
                            className="rounded-lg border bg-muted/30 p-3"
                          >
                            <div className="font-medium text-primary">{item.term}</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {item.definition}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </CardContent>

            <Separator />
          </Card>
        ))}
      </div>

      {/* Resources Section */}
      <Card className="bg-gradient-to-br from-slate-900/50 to-purple-900/30 border-purple-500/20">
        <CardHeader>
          <CardTitle>Ressources complémentaires</CardTitle>
          <CardDescription>
            Annexes et documents supplémentaires
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/resources/Annexes/annexe-courbes-elliptiques-v2.pdf" target="_blank">
              <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <FileDown className="h-5 w-5 text-blue-500" />
                <div className="text-left">
                  <div className="font-medium">Courbes Elliptiques</div>
                  <div className="text-xs text-muted-foreground">Annexe cryptographie ECC</div>
                </div>
              </Button>
            </Link>
            <Link href="/resources/Annexes/annexe-proof-rsa.pdf" target="_blank">
              <Button variant="outline" className="w-full justify-start gap-2 h-auto py-3">
                <FileDown className="h-5 w-5 text-purple-500" />
                <div className="text-left">
                  <div className="font-medium">Preuve RSA</div>
                  <div className="text-xs text-muted-foreground">Démonstration mathématique</div>
                </div>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
