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

const PlayerCard = ({ player }) => {
  const imgSrc = player.image && player.image.length > 0 ? player.image : "/placeholder.jpg";
  return (
    <Card className="w-56 bg-gradient-to-b from-yellow-300/8 to-black border border-yellow-400/30 shadow-[0_0_20px_rgba(255,215,0,0.15)] hover:shadow-[0_0_30px_rgba(255,215,0,0.35)] transition-all duration-300">
      <div className="relative h-64 overflow-hidden rounded-xl">
        <img
          src={imgSrc}
          alt={player.name}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-3">
          <Badge className="bg-yellow-500 text-black text-xs mb-1">{player.position}</Badge>
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-yellow-300 truncate">{player.name}</h3>
            <div className="h-9 w-9 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
              {player.number}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const RosterPage = () => {
  const goleiro = players.find((p) => p.position === "Goleiro");

  const lateralEsquerdo = players.find((p) => p.name === "Gustavão");
  const zagueiro1 = players.find((p) => p.name === "Vini Alves");
  const zagueiro2 = players.find((p) => p.name === "José");
  const lateralDireito = players.find((p) => p.name === "Matheus");

  const volante1 = players.find((p) => p.name === "Kauê");
  const volante2 = players.find((p) => p.name === "Pivatti");

  const atacanteEsq = players.find((p) => p.name === "Eros");
  const meiaOfensivo = players.find((p) => p.name === "Zuiani");
  const atacanteDir = players.find((p) => p.name === "Rafael");

  return (
    <div className="min-h-screen bg-black text-yellow-400 py-16">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-3 text-yellow-400 drop-shadow-[0_0_15px_rgba(255,215,0,0.45)]">
            Escalação Oficial — <span className="text-white">Quebrados FC</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Formação: <strong>4-2-3-1</strong>
          </p>
        </div>

        {/* Formação */}
        <div className="flex flex-col items-center space-y-10">
          {/* Ataque */}
          <div className="flex justify-center items-end gap-10">
            {atacanteEsq && <PlayerCard player={atacanteEsq} />}
            {meiaOfensivo && <PlayerCard player={meiaOfensivo} />}
            {atacanteDir && <PlayerCard player={atacanteDir} />}
          </div>

          {/* Meio-campo */}
          <div className="flex justify-center gap-16">
            {volante1 && <PlayerCard player={volante1} />}
            {volante2 && <PlayerCard player={volante2} />}
          </div>

          {/* Defesa */}
          <div className="flex justify-center items-start gap-8">
            {lateralEsquerdo && <PlayerCard player={lateralEsquerdo} />}
            {zagueiro1 && <PlayerCard player={zagueiro1} />}
            {zagueiro2 && <PlayerCard player={zagueiro2} />}
            {lateralDireito && <PlayerCard player={lateralDireito} />}
          </div>

          {/* Goleiro */}
          <div className="flex justify-center mt-4">
            {goleiro && <PlayerCard player={goleiro} />}
          </div>
        </div>

        {/* Técnica */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-yellow-400 uppercase tracking-widest">
            Técnica:
          </h2>
          <p className="text-4xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Ingryd Surimoto
          </p>
          <div className="mt-2 w-32 h-1 mx-auto bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(255,215,0,0.6)]"></div>
        </div>

        {/* Foto do time */}
        <div className="mt-12 flex justify-center">
          <Card className="overflow-hidden border-yellow-400/25 shadow-[0_0_18px_rgba(255,215,0,0.18)] w-3/5 max-w-2xl">
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
