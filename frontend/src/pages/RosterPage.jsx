import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const players = [
  { id: 1, name: "Ávila", position: "Goleiro", number: 1, image: "" },
  { id: 2, name: "Vinissão", position: "Zagueiro", number: 9, image: "" },
  { id: 3, name: "Vini Alves", position: "Zagueiro", number: 3, image: "" },
  { id: 4, name: "José", position: "Zagueiro", number: 4, image: "" },
  { id: 5, name: "Matheus", position: "Lateral Direito", number: 2, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/2wkt8gvx_unnamed%20%283%29.png" },
  { id: 6, name: "Gustavão", position: "Lateral Esquerdo", number: 5, image: "" },
  { id: 7, name: "Kauê", position: "Volante", number: 6, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/8ahlxdhr_unnamed%20%281%29.png" },
  { id: 8, name: "Pivatti", position: "Meio Campo", number: 8, image: "" },
  { id: 9, name: "Eros", position: "Meio Campo", number: 11, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/f336n17d_unnamed%20%285%29.png" },
  { id: 10, name: "Zuiani", position: "Meia Atacante", number: 10, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/o9y6yiph_unnamed%20%282%29.png" },
  { id: 11, name: "Rafael", position: "Atacante", number: 7, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/xmsllnhz_Rafael%20%281%29.png" },
];

// Função auxiliar para renderizar o card
const PlayerCard = ({ player }) => (
  <Card className="group w-32 h-44 overflow-hidden border-yellow-400/50 bg-gradient-to-br from-black via-zinc-900 to-black shadow-[0_0_15px_rgba(255,255,0,0.2)] hover:shadow-[0_0_25px_rgba(255,255,0,0.6)] transition-all duration-300">
    <CardContent className="p-4 flex flex-col items-center justify-center h-full">
      <div className="h-14 w-14 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl mb-2 shadow-md">
        {player.number}
      </div>
      <h3 className="font-bold text-yellow-400 text-sm">{player.name}</h3>
      <Badge className="mt-2 bg-yellow-400 text-black text-xs">
        {player.position}
      </Badge>
    </CardContent>
  </Card>
);

export const RosterPage = () => {
  // separação por setores
  const goleiro = players.filter((p) => p.position === "Goleiro");
  const zagueiros = players.filter((p) => p.position === "Zagueiro");
  const laterais = players.filter((p) =>
    ["Lateral Direito", "Lateral Esquerdo"].includes(p.position)
  );
  const meioCampistas = players.filter((p) =>
    ["Volante", "Meio Campo"].includes(p.position)
  );
  const atacantes = players.filter((p) =>
    ["Meia Atacante", "Atacante"].includes(p.position)
  );

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-yellow-400 mb-4 drop-shadow-md">
            Escalação <span className="text-foreground">Quebrados FC</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Formação tática oficial — 4-2-3-1.  
            Unidos pela humildade e raça, prontos para vencer.
          </p>
        </div>

        {/* Escalação */}
        <div className="flex flex-col items-center space-y-12">
          {/* Linha 1 - Atacantes */}
          <div className="flex justify-center gap-8">
            {atacantes.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>

          {/* Linha 2 - Meias ofensivos */}
          <div className="flex justify-center gap-8">
            <PlayerCard player={players.find((p) => p.name === "Rafael")} />
            <PlayerCard player={players.find((p) => p.name === "Zuiani")} />
            <PlayerCard player={players.find((p) => p.name === "Eros")} />
          </div>

          {/* Linha 3 - Meio-campo */}
          <div className="flex justify-center gap-16">
            {meioCampistas.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>

          {/* Linha 4 - Defesa */}
          <div className="flex justify-center gap-6">
            <PlayerCard player={players.find((p) => p.name === "Gustavão")} />
            <PlayerCard player={players.find((p) => p.name === "Vini Alves")} />
            <PlayerCard player={players.find((p) => p.name === "Vinissão")} />
            <PlayerCard player={players.find((p) => p.name === "José")} />
            <PlayerCard player={players.find((p) => p.name === "Matheus")} />
          </div>

          {/* Linha 5 - Goleiro */}
          <div className="flex justify-center">
            {goleiro.map((p) => (
              <PlayerCard key={p.id} player={p} />
            ))}
          </div>
        </div>

        {/* Foto do time */}
        <div className="mt-24">
          <Card className="overflow-hidden border-yellow-400/30 shadow-[0_0_20px_rgba(255,255,0,0.3)]">
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

export default RosterPage;
