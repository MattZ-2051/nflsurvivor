import { getGames } from "@/lib/server/db/queries/games";
import { sleep } from "@/lib/utils";

export async function GET(request: Request) {
  const games = await getGames();

  await sleep(2000);
  return Response.json({ games });
}
