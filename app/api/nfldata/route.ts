import { sleep } from "@/lib/utils";
import { rapidApiFetch } from "@/lib/utils";
export async function GET(request: Request) {
  /* 
 * TODO uncomment once ready, for now comment to not go over api limit
 *  const url = `/nfl-team-listing/v1/data`;
    const response = await rapidApiFetch(url);
    const result = await response.text();
*/
  await sleep(6000);
  return Response.json({ nflData: [] });
}
