import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Star, Award } from 'lucide-react';

const titles = [
  {
    id: 1,
    name: 'Divisão Elite',
    year: 2024,
    image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/j5658tg2_EA_FC_Elite_Division.webp',
    description: 'Conquista histórica da Divisão Elite, demonstrando a qualidade e dedicação do elenco.',
  },
];

const achievements = [
  {
    icon: Trophy,
    value: '1',
    label: 'Título Conquistado',
  },
  {
    icon: Star,
    value: '5',
    label: 'Vitórias Consecutivas',
  },
  {
    icon: Award,
    value: '2024',
    label: 'Temporada Histórica',
  },
];

export const TitlesPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Nossa <span className="text-primary">Galeria de Troféus</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Celebrando as conquistas e momentos históricos do Quebrados FC
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="border-primary/30 shadow-gold hover:border-primary/50 transition-all"
            >
              <CardContent className="p-8 text-center">
                <achievement.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-5xl font-bold text-foreground mb-2">{achievement.value}</h3>
                <p className="text-muted-foreground">{achievement.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Titles */}
        <div className="space-y-12">
          {titles.map((title) => (
            <Card
              key={title.id}
              className="overflow-hidden border-primary/30 shadow-gold hover:shadow-hover transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className="relative h-96 md:h-full bg-gradient-to-br from-secondary to-secondary/80 p-8 flex items-center justify-center">
                  <img
                    src={title.image}
                    alt={title.name}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute top-8 right-8">
                    <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                      {title.year}
                    </Badge>
                  </div>
                  <div className="absolute -bottom-4 -left-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute -top-4 -right-4 h-32 w-32 bg-primary/20 rounded-full blur-3xl" />
                </div>

                {/* Content */}
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Trophy className="h-8 w-8 text-primary" />
                    <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
                      Campeonato {title.year}
                    </Badge>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                    {title.name}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {title.description}
                  </p>
                  
                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-3xl font-bold text-primary mb-1">15</p>
                      <p className="text-sm text-muted-foreground">Vitórias</p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <p className="text-3xl font-bold text-primary mb-1">1º</p>
                      <p className="text-sm text-muted-foreground">Posição Final</p>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Future Ambitions */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-secondary to-secondary/80 border-primary/30 shadow-gold">
            <CardContent className="p-12 text-center">
              <Trophy className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-secondary-foreground mb-4">
                Mais Títulos Virão
              </h3>
              <p className="text-secondary-foreground/80 text-lg max-w-2xl mx-auto">
                A conquista da Divisão Elite em 2024 é apenas o começo. O Quebrados FC continua
                trabalhando forte para conquistar mais títulos e fazer história no futebol.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};