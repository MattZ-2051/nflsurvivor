import GamesDashboard from "@/components/pages/home/games-dashboard";
import { localFetch } from "@/lib/utils";

export default async function GamesPage() {
  const data = await localFetch<any>("/api/games/", { method: "GET" });

  return (
    <div className="w-full h-1/2 bg-secondary rounded-lg p-3">
      <GamesDashboard games={data.games} />
    </div>
  );
}
