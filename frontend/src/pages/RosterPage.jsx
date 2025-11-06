import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const players = [
  { id: 1, name: "Ávila", position: "Goleiro", number: 12, image: "" },
  { id: 2, name: "Vinissão", position: "Zagueiro", number: 9, image: "" },
  { id: 3, name: "Vini Alves", position: "Zagueiro", number: 15, image: "" },
  { id: 4, name: "José", position: "Zagueiro", number: 77, image: "" },
  { id: 5, name: "Matheus", position: "Lateral Direito", number: 6, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/2wkt8gvx_unnamed%20%283%29.png" },
  { id: 6, name: "Gustavão", position: "Lateral Esquerdo", number: 17, image: "" },
  { id: 7, name: "Kauê", position: "Volante", number: 98, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/8ahlxdhr_unnamed%20%281%29.png" },
  { id: 8, name: "Pivatti", position: "Meio Campo", number: 8, image: "" },
  { id: 9, name: "Eros", position: "Meio Campo", number: 11, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/f336n17d_unnamed%20%285%29.png" },
  { id: 10, name: "Zuiani", position: "Meia Atacante", number: 10, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/o9y6yiph_unnamed%20%282%29.png" },
  { id: 11, name: "Rafael", position: "Atacante", number: 7, image: "https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/xmsllnhz_Rafael%20%281%29.png" },
];

export const RosterPage = () => {
  const positions = {
    goleiro: players.filter((p) => p.position === "Goleiro"),
    zagueiros: players.filter((p) => ["Zagueiro", "Lateral Esquerdo", "Lateral Direito"].includes(p.position)),
    meio: players.filter((p) => ["Volante", "Meio Campo"].includes(p.position)),
    ataque: players.filter((p) => ["Meia Atacante", "Atacante"].includes(p.position)),
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-10 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.6)]">
          Elenco Principal — <span className="text-white">Quebrados FC</span>
        </h1>

        {/* Campo visualizado por setores */}
        <div className="flex flex-col items-center gap-16">

          {/* ATAQUE */}
          <div className="flex justify-center gap-12">
            {positions.ataque.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>

          {/* MEIO */}
          <div className="flex justify-center gap-12">
            {positions.meio.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>

          {/* DEFESA */}
          <div className="flex justify-center gap-12">
            {positions.zagueiros.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>

          {/* GOLEIRO */}
          <div className="flex justify-center">
            {positions.goleiro.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>

        {/* Foto do time */}
        <div className="mt-24">
          <Card className="overflow-hidden border-yellow-500/50 shadow-[0_0_25px_rgba(255,255,0,0.4)]">
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

// --- Cartinha de jogador ---
const PlayerCard = ({ player }) => (
  <Card className="w-56 bg-gradient-to-b from-yellow-300/10 to-black border border-yellow-400/40 shadow-[0_0_20px_rgba(255,255,0,0.3)] hover:shadow-[0_0_25px_rgba(255,255,0,0.8)] transition-all duration-500">
    <div className="relative h-72 overflow-hidden rounded-2xl">
      <img
        src={player.image || "/placeholder.jpg"}
        alt={player.name}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <Badge className="bg-yellow-500 text-black text-xs mb-2">{player.position}</Badge>
        <h3 className="text-lg font-bold text-yellow-300">{player.name}</h3>
        <p className="text-sm text-yellow-100">#{player.number}</p>
      </div>
    </div>
  </Card>
);
