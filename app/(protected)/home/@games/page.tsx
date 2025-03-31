import GamesDashboard from "@/components/pages/home/games-dashboard";

export default async function GamesPage() {
  const res = await fetch(`${process.env.URL!}/api/game/`, { method: "GET" });

  if (!res.ok) {
    return "Error fetching games";
  }

  const data = await res.json();

  return (
    <div className="w-full h-1/2 bg-secondary rounded-lg p-3">
      <GamesDashboard games={data.games} />
    </div>
  );
}
