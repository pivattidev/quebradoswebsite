import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const players = [
  { id: 1, name: 'Ávila', position: 'Goleiro', number: 12, image: '' },
  { id: 2, name: 'Vinissão', position: 'Zagueiro', number: 9, image: '' },
  { id: 3, name: 'Vini Alves', position: 'Zagueiro', number: 15, image: '' },
  { id: 4, name: 'José', position: 'Zagueiro', number: 77, image: '' },
  { id: 5, name: 'Matheus', position: 'Lateral Direito', number: 6, image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/2wkt8gvx_unnamed%20%283%29.png' },
  { id: 6, name: 'Gustavão', position: 'Lateral Esquerdo', number: 17, image: '' },
  { id: 7, name: 'Kauê', position: 'Volante', number: 98, image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/8ahlxdhr_unnamed%20%281%29.png' },
  { id: 8, name: 'Pivatti', position: 'Meio Campo', number: 8, image: '' },
  { id: 9, name: 'Eros', position: 'Meio Campo', number: 11, image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/f336n17d_unnamed%20%285%29.png' },
  { id: 10, name: 'Zuiani', position: 'Meia Atacante', number: 10, image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/o9y6yiph_unnamed%20%282%29.png' },
  { id: 11, name: 'Rafael', position: 'Atacante', number: 7, image: 'https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/xmsllnhz_Rafael%20%281%29.png' },
];

// --- COMPONENTE DE SEÇÃO ---
const PlayerSection = ({ title, subtitle, color, players }) => (
  <div className="relative mb-24">
    {/* Fundo decorativo */}
    <div
      className={`absolute inset-0 opacity-10 blur-3xl rounded-3xl bg-gradient-to-r ${color}`}
    ></div>

    <div className="relative z-10">
      {/* Cabeçalho da seção */}
      <div className="text-center mb-12">
        <h2
          className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3`}
        >
          {title}
        </h2>
        <p className="text-muted-foreground text-lg">{subtitle}</p>
        <div className="mt-4 w-32 h-1 mx-auto bg-gradient-to-r from-primary to-yellow-400 rounded-full shadow-gold animate-pulse"></div>
      </div>

      {/* Grid dos jogadores */}
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

              {/* Número */}
              <div className="absolute top-4 right-4">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-gold">
                  <span className="text-3xl font-bold text-primary-foreground">
                    {player.number}
                  </span>
                </div>
              </div>

              {/* Nome e posição */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="bg-primary text-primary-foreground mb-3">
                  {player.position}
                </Badge>
                <h3 className="text-3xl font-bold text-secondary-foreground drop-shadow-md">
                  {player.name}
                </h3>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

// --- PÁGINA PRINCIPAL ---
export const RosterPage = () => {
  const defensores = players.filter((p) =>
    ['Goleiro', 'Zagueiro', 'Lateral Direito', 'Lateral Esquerdo'].includes(p.position)
  );
  const meioCampistas = players.filter((p) =>
    ['Volante', 'Meio Campo'].includes(p.position)
  );
  const atacantes = players.filter((p) =>
    ['Meia Atacante', 'Atacante'].includes(p.position)
  );

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Nosso <span className="text-primary">Elenco</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça os guerreiros do <span className="text-primary font-semibold">Quebrados FC</span> — unidos pela humildade, raça e paixão pelo jogo.
          </p>
        </div>

        {/* Seções */}
        <PlayerSection
          title="Defensores"
          subtitle="A muralha do Quebrados FC — força, foco e coragem."
          color="from-blue-400 to-cyan-500"
          players={defensores}
        />
        <PlayerSection
          title="Meio-Campistas"
          subtitle="O cérebro e o coração do time — controle, criação e intensidade."
          color="from-green-400 to-emerald-500"
          players={meioCampistas}
        />
        <PlayerSection
          title="Atacantes"
          subtitle="A linha de frente — velocidade, talento e finalização mortal."
          color="from-red-500 to-orange-400"
          players={atacantes}
        />

        {/* Foto do time */}
        <div className="mt-24">
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
