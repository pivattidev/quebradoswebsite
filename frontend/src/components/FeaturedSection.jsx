import { Trophy, Users, Calendar, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: Trophy,
    value: '15',
    label: 'Vitórias',
    color: 'text-primary',
  },
  {
    icon: Users,
    value: '8.5k',
    label: 'Torcedores',
    color: 'text-primary',
  },
  {
    icon: Calendar,
    value: '24',
    label: 'Partidas',
    color: 'text-primary',
  },
  {
    icon: TrendingUp,
    value: '1º',
    label: 'Posição',
    color: 'text-primary',
  },
];

export const FeaturedSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold group"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <stat.icon className={`h-8 w-8 md:h-10 md:w-10 mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};