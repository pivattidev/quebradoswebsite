import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar } from 'lucide-react';

const matches = [
  {
    id: 1,
    date: '15 Dez 2024',
    homeTeam: 'Quebrados FC',
    awayTeam: 'Ricos FC',
    homeScore: 4,
    awayScore: 2,
    scorers: ['Rafael (2)', 'Matheus', 'Kauê'],
    venue: 'Estádio do Quebrados',
  },
  {
    id: 2,
    date: '28 Nov 2024',
    homeTeam: 'Ricos FC',
    awayTeam: 'Quebrados FC',
    homeScore: 1,
    awayScore: 3,
    scorers: ['Rafael', 'Daido', 'Zuiani'],
    venue: 'Estádio dos Ricos',
  },
  {
    id: 3,
    date: '10 Out 2024',
    homeTeam: 'Quebrados FC',
    awayTeam: 'Ricos FC',
    homeScore: 3,
    awayScore: 1,
    scorers: ['Rafael', 'Kauê', 'Matheus'],
    venue: 'Estádio do Quebrados',
  },
  {
    id: 4,
    date: '22 Set 2024',
    homeTeam: 'Ricos FC',
    awayTeam: 'Quebrados FC',
    homeScore: 2,
    awayScore: 5,
    scorers: ['Rafael (3)', 'Matheus', 'Daido'],
    venue: 'Estádio dos Ricos',
  },
  {
    id: 5,
    date: '05 Ago 2024',
    homeTeam: 'Quebrados FC',
    awayTeam: 'Ricos FC',
    homeScore: 3,
    awayScore: 0,
    scorers: ['Rafael (2)', 'Kauê'],
    venue: 'Estádio do Quebrados',
  },
];

const calculateStats = () => {
  const quebradosWins = matches.filter(m => 
    (m.homeTeam === 'Quebrados FC' && m.homeScore > m.awayScore) ||
    (m.awayTeam === 'Quebrados FC' && m.awayScore > m.homeScore)
  ).length;
  
  const totalGoalsScored = matches.reduce((total, m) => {
    return total + (m.homeTeam === 'Quebrados FC' ? m.homeScore : m.awayScore);
  }, 0);
  
  const totalGoalsConceded = matches.reduce((total, m) => {
    return total + (m.homeTeam === 'Quebrados FC' ? m.awayScore : m.homeScore);
  }, 0);

  return { quebradosWins, totalGoalsScored, totalGoalsConceded };
};

export const ResultsPage = () => {
  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Quebrados FC vs <span className="text-primary">Ricos FC</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Histórico de confrontos contra nosso maior rival
          </p>
        </div>

        {/* Rival Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img
              src="https://customer-assets.emergentagent.com/job_quebrados-updates/artifacts/2wkt8gvx_unnamed%20%283%29.png"
              alt="Ricos FC"
              className="h-32 w-32 rounded-full border-4 border-primary/30 shadow-gold"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-6 text-center">
              <Trophy className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="text-4xl font-bold text-foreground mb-2">{stats.quebradosWins}</h3>
              <p className="text-muted-foreground">Vitórias do Quebrados</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-3">{stats.totalGoalsScored}</div>
              <p className="text-muted-foreground">Gols Marcados</p>
            </CardContent>
          </Card>
          <Card className="border-primary/30 shadow-gold">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-foreground mb-3">{stats.totalGoalsConceded}</div>
              <p className="text-muted-foreground">Gols Sofridos</p>
            </CardContent>
          </Card>
        </div>

        {/* Matches List */}
        <div className="space-y-6">
          {matches.map((match) => {
            const isQuebradosHome = match.homeTeam === 'Quebrados FC';
            const isQuebradosWin = 
              (isQuebradosHome && match.homeScore > match.awayScore) ||
              (!isQuebradosHome && match.awayScore > match.homeScore);

            return (
              <Card
                key={match.id}
                className={`border-2 transition-all duration-300 hover:shadow-gold ${
                  isQuebradosWin ? 'border-primary/50 bg-primary/5' : 'border-border'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{match.date}</span>
                    </div>
                    {isQuebradosWin && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Trophy className="h-3 w-3 mr-1" />
                        Vitória
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 items-center mb-4">
                    {/* Home Team */}
                    <div className={`text-right ${
                      match.homeTeam === 'Quebrados FC' ? 'font-bold' : ''
                    }`}>
                      <p className="text-lg text-foreground">{match.homeTeam}</p>
                    </div>

                    {/* Score */}
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-4">
                        <span className={`text-4xl font-bold ${
                          match.homeTeam === 'Quebrados FC' && match.homeScore > match.awayScore
                            ? 'text-primary'
                            : 'text-foreground'
                        }`}>
                          {match.homeScore}
                        </span>
                        <span className="text-2xl text-muted-foreground">-</span>
                        <span className={`text-4xl font-bold ${
                          match.awayTeam === 'Quebrados FC' && match.awayScore > match.homeScore
                            ? 'text-primary'
                            : 'text-foreground'
                        }`}>
                          {match.awayScore}
                        </span>
                      </div>
                    </div>

                    {/* Away Team */}
                    <div className={`text-left ${
                      match.awayTeam === 'Quebrados FC' ? 'font-bold' : ''
                    }`}>
                      <p className="text-lg text-foreground">{match.awayTeam}</p>
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>Local:</strong> {match.venue}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Gols do Quebrados:</strong> {match.scorers.join(', ')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};