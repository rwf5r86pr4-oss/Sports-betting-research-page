export default function handler(req, res) {
  const { sport, player, team, season } = req.query;

  // Randomized stats for demo
  const stats = {
    games: Math.floor(Math.random() * 20) + 1,
    avgPoints: Math.floor(Math.random() * 30) + 5,
    avgRebounds: Math.floor(Math.random() * 10) + 1,
    avgAssists: Math.floor(Math.random() * 10) + 1
  };

  res.status(200).json(stats);
}
