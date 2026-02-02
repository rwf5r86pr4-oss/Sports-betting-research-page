export default function handler(req, res) {
  // Ensure req.query exists
  const query = req.query || {};
  const { sport, player, team, season } = query;

  // Random stats
  const stats = {
    games: Math.floor(Math.random() * 20) + 1,
    avgPoints: Math.floor(Math.random() * 30) + 5,
    avgRebounds: Math.floor(Math.random() * 10) + 1,
    avgAssists: Math.floor(Math.random() * 10) + 1
  };

  res.status(200).json(stats);
}
