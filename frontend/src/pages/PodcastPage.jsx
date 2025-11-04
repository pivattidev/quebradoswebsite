import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Headphones, ExternalLink } from 'lucide-react';

export const PodcastPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <img
            src="https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/orf4btoo_Screenshot%202025-11-04%2009.39.41.png"
            alt="Quebrados Cast"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <Badge className="bg-primary text-primary-foreground mb-4 text-lg px-6 py-2">
              <Headphones className="h-5 w-5 mr-2" />
              Podcast Oficial
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-4">
              QUEBRADOS CAST
            </h1>
            <p className="text-xl text-secondary-foreground/90 max-w-3xl">
              O podcast mais quebrado do Brasil! Bastidores, análises, entrevistas e muito mais sobre o Quebrados FC.
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Sobre o <span className="text-primary">Podcast</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Quebrados Cast é o podcast oficial do clube, onde mergulhamos nos bastidores do
                Quebrados FC, trazendo análises profundas, entrevistas exclusivas com jogadores,
                comissão técnica e torcedores apaixonados.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toda semana, novos episódios com debates acalorados, histórias emocionantes e tudo
                que você precisa saber sobre o time do coração!
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">O que você vai encontrar:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Bastidores:</strong> Acesso exclusivo aos treinos e vestiário
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Entrevistas:</strong> Conversas com jogadores e comissão
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Análises:</strong> Táticas, estatísticas e debates
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-3 w-3 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Interação:</strong> Participe com perguntas e opiniões
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Latest Episode */}
        <Card className="mb-12 bg-gradient-to-br from-secondary to-secondary/80 border-primary/30 shadow-gold">
          <CardContent className="p-8 md:p-12 text-center">
            <Badge className="bg-primary text-primary-foreground mb-4 px-6 py-2">
              Episódio Mais Recente
            </Badge>
            <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
              A Conquista da Divisão Elite 2024
            </h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-2xl mx-auto">
              Reviva os momentos emocionantes da conquista histórica do Quebrados FC na Divisão
              Elite. Entrevistas exclusivas com os heróis do título!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.canva.com/design/DAGkJXfO_Kg/haHU7uIq0v3WA3yCQWaRjQ/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-primary text-primary-foreground hover:bg-primary-glow shadow-gold font-semibold">
                  <Play className="h-5 w-5 mr-2" />
                  Ouvir Agora
                </Button>
              </a>
              <a
                href="https://www.canva.com/design/DAGkJXfO_Kg/haHU7uIq0v3WA3yCQWaRjQ/edit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver Todos os Episódios
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Platforms */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Ouça onde você preferir</h3>
          <p className="text-muted-foreground mb-8">
            O Quebrados Cast está disponível nas principais plataformas de podcast
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge
              variant="outline"
              className="border-primary/30 text-foreground px-6 py-3 text-base cursor-pointer hover:bg-primary/10"
            >
              Spotify
            </Badge>
            <Badge
              variant="outline"
              className="border-primary/30 text-foreground px-6 py-3 text-base cursor-pointer hover:bg-primary/10"
            >
              Apple Podcasts
            </Badge>
            <Badge
              variant="outline"
              className="border-primary/30 text-foreground px-6 py-3 text-base cursor-pointer hover:bg-primary/10"
            >
              Google Podcasts
            </Badge>
            <Badge
              variant="outline"
              className="border-primary/30 text-foreground px-6 py-3 text-base cursor-pointer hover:bg-primary/10"
            >
              YouTube
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};