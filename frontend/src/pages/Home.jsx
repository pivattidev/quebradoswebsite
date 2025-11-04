import { Hero } from '@/components/Hero';
import { FeaturedSection } from '@/components/FeaturedSection';
import { LatestNews } from '@/components/LatestNews';
import { TeamShowcase } from '@/components/TeamShowcase';
import { CommunitySection } from '@/components/CommunitySection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Flame, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSection />
      <LatestNews />
      <TeamShowcase />
      
      {/* Quebrados Cast Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-2">
                <Play className="h-4 w-4 mr-2" />
                Podcast Oficial
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                QUEBRADOS <span className="text-primary">CAST</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O podcast mais quebrado do Brasil! Ouça análises, entrevistas exclusivas e bastidores do Quebrados FC toda semana.
              </p>
              <Link to="/podcast">
                <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold">
                  <Play className="h-4 w-4 mr-2" />
                  Ouvir Agora
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <Card className="overflow-hidden border-primary/30 shadow-gold">
                <img
                  src="https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/orf4btoo_Screenshot%202025-11-04%2009.39.41.png"
                  alt="Quebrados Cast"
                  className="w-full h-auto"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Last Dance Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden border-primary/30 shadow-gold">
            <div className="absolute top-4 right-4 z-10">
              <Badge className="bg-destructive text-destructive-foreground px-4 py-2">
                <Flame className="h-4 w-4 mr-2" />
                CONFRONTO ÉPICO
              </Badge>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative h-96 lg:h-auto overflow-hidden">
                <img
                  src="https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/jiqoejm5_af050955-c7b0-47bc-8cab-bed4aa68389f%20%282%29.jpg"
                  alt="The Last Dance"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  THE LAST <span className="text-primary">DANCE</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  O confronto definitivo entre Quebrados FC e Ricos FC. Uma rivalidade épica que chega ao seu capítulo final.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  13 de Dezembro de 2025 • Estádio Antônio Soares de Oliveira
                </p>
                <Link to="/last-dance">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold">
                    Saiba Mais
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>
      
      <CommunitySection />
    </div>
  );
};