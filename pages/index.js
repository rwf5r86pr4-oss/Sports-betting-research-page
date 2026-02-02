"use client";
import { useState } from "react";

export default function Home() {
  const [sport, setSport] = useState("nba");
  const [player, setPlayer] = useState("");
  const [team, setTeam] = useState("");
  const [season, setSeason] = useState("");
  const [result, setResult] = useState(null);

  const getStats = async () => {
    const res = await fetch(`/api/stats?sport=${sport}&player=${player}&team=${team}&season=${season}`);
    const data = await res.json();
    setResult(data);

    const ctx = document.getElementById("chart");
    if (ctx) {
      new window.Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Points", "Rebounds", "Assists"],
          datasets: [{
            label: "Average Stats",
            data: [data.avgPoints, data.avgRebounds, data.avgAssists],
            backgroundColor: ["#2563eb","#f97316","#10b981"]
          }]
        }
      });
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial", color: "#e5e7eb", background: "#0f172a" }}>
      <h2>Player vs Team Stats (Random)</h2>

      <select value={sport} onChange={e => setSport(e.target.value)}>
        <option value="nba">NBA</option>
        <option value="mlb">MLB</option>
        <option value="nfl">NFL</option>
      </select>

      <input placeholder="Player ID" value={player} onChange={e => setPlayer(e.target.value)} />
      <input placeholder="Opponent Team ID" value={team} onChange={e => setTeam(e.target.value)} />
      <input placeholder="Season (2024)" value={season} onChange={e => setSeason(e.target.value)} />

      <button onClick={getStats} style={{ background:"#2563eb", color:"white", padding:8, marginTop:8 }}>Get Stats</button>

      {result && (
        <div>
          <p>Games: {result.games}</p>
          <p>Avg Points: {result.avgPoints}</p>
          <p>Avg Rebounds: {result.avgRebounds}</p>
          <p>Avg Assists: {result.avgAssists}</p>
          <canvas id="chart"></canvas>
        </div>
      )}

      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </div>
  );
}
