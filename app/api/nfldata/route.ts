import { getGames } from "@/lib/server/db/queries/games";
import { sleep } from "@/lib/utils";

export async function GET(request: Request) {
  const nflData = {};
  await sleep(6000);
  return Response.json({ nflData });
}
