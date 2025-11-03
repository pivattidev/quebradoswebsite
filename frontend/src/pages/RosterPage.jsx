import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const players = [
  {
    id: 1,
    name: 'Rafael',
    position: 'Atacante',
    number: 10,
    image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/xmsllnhz_Rafael%20%281%29.png',
  },
  {
    id: 2,
    name: 'Kauê',
    position: 'Volante',
    number: 97,
    image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/8ahlxdhr_unnamed%20%281%29.png',
  },
  {
    id: 3,
    name: 'Zuiani',
    position: 'Meia Atacante',
    number: 24,
    image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/o9y6yiph_unnamed%20%282%29.png',
  },
  {
    id: 4,
    name: 'Matheus',
    position: 'Lateral Direito',
    number: 6,
    image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/2wkt8gvx_unnamed%20%283%29.png',
  },
  {
    id: 5,
    name: 'Eros',
    position: 'Meia Atacante',
    number: 11,
    image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/f336n17d_unnamed%20%285%29.png',
  },
];

export const RosterPage = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Nosso <span className="text-primary">Elenco</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça os jogadores que vestem a camisa do Quebrados FC com orgulho e determinação
          </p>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <Card
              key={player.id}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              <div className="relative h-96 overflow-hidden bg-gradient-to-br from-secondary to-secondary/80">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60" />
                
                {/* Number Badge */}
                <div className="absolute top-4 right-4">
                  <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-gold">
                    <span className="text-3xl font-bold text-primary-foreground">{player.number}</span>
                  </div>
                </div>

                {/* Player Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-primary text-primary-foreground mb-3">
                    {player.position}
                  </Badge>
                  <h3 className="text-3xl font-bold text-secondary-foreground">{player.name}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Photo Section */}
        <div className="mt-16">
          <Card className="overflow-hidden border-primary/30 shadow-gold">
            <CardContent className="p-0">
              <img
                src="https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/2i4sp7je_Screenshot%202025-10-30%2009.49.11.png"
                alt="Quebrados FC Team"
                className="w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};