import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';

// Generate matches for current month
const generateMatches = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  
  const matches = [
    {
      id: 1,
      date: new Date(currentYear, currentMonth, 10),
      time: '15:00',
      homeTeam: 'Quebrados FC',
      awayTeam: 'Ricos FC',
      venue: 'Estádio do Quebrados',
      status: 'Próximo',
    },
    {
      id: 2,
      date: new Date(currentYear, currentMonth, 17),
      time: '16:30',
      homeTeam: 'Ricos FC',
      awayTeam: 'Quebrados FC',
      venue: 'Estádio dos Ricos',
      status: 'Próximo',
    },
    {
      id: 3,
      date: new Date(currentYear, currentMonth, 24),
      time: '15:00',
      homeTeam: 'Quebrados FC',
      awayTeam: 'Ricos FC',
      venue: 'Estádio do Quebrados',
      status: 'Próximo',
    },
  ];

  return matches.sort((a, b) => a.date - b.date);
};

export const CalendarPage = () => {
  const matches = generateMatches();
  const currentDate = new Date();
  const monthName = currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  };

  const isUpcoming = (date) => {
    return date >= currentDate;
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Calendário de <span className="text-primary">Jogos</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Confira os próximos confrontos do Quebrados FC
          </p>
          <Badge className="bg-primary text-primary-foreground mt-4 text-lg px-6 py-2">
            {monthName.charAt(0).toUpperCase() + monthName.slice(1)}
          </Badge>
        </div>

        {/* Matches List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {matches.map((match) => (
            <Card
              key={match.id}
              className={`border-2 transition-all duration-300 hover:shadow-gold ${
                isUpcoming(match.date) ? 'border-primary/50' : 'border-border opacity-60'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    <span className="text-lg font-semibold text-foreground">
                      {formatDate(match.date)}
                    </span>
                  </div>
                  <Badge
                    className={`${
                      isUpcoming(match.date)
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {match.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Teams */}
                <div className="grid grid-cols-3 gap-4 items-center mb-6">
                  <div className="text-center">
                    {match.homeTeam === 'Quebrados FC' && (
                      <img
                        src="https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/gge94svi_logo%20quebrados.png"
                        alt="Quebrados FC"
                        className="h-16 w-16 mx-auto mb-2"
                      />
                    )}
                    <p className={`text-lg ${
                      match.homeTeam === 'Quebrados FC' ? 'font-bold text-foreground' : 'text-muted-foreground'
                    }`}>
                      {match.homeTeam}
                    </p>
                  </div>

                  <div className="text-center">
                    <span className="text-2xl font-bold text-muted-foreground">VS</span>
                  </div>

                  <div className="text-center">
                    {match.awayTeam === 'Quebrados FC' && (
                      <img
                        src="https://customer-assets.emergentagent.com/job_0ceb3f03-9c7c-49d8-a8aa-e9afdb1325f4/artifacts/gge94svi_logo%20quebrados.png"
                        alt="Quebrados FC"
                        className="h-16 w-16 mx-auto mb-2"
                      />
                    )}
                    <p className={`text-lg ${
                      match.awayTeam === 'Quebrados FC' ? 'font-bold text-foreground' : 'text-muted-foreground'
                    }`}>
                      {match.awayTeam}
                    </p>
                  </div>
                </div>

                {/* Match Details */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{match.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{match.venue}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <Card className="mt-12 max-w-4xl mx-auto bg-muted/30 border-border">
          <CardContent className="p-6 text-center">
            <p className="text-muted-foreground">
              <strong>Nota:</strong> Os confrontos são atualizados mensalmente. Fique atento às
              próximas partidas contra o Ricos FC!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};