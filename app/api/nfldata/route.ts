import { sleep } from "@/lib/utils";

export async function GET(request: Request) {
  /* 
 * TODO uncomment once ready, for now comment to not go over api limit
 *  const url = `${process.env.NFL_RAPID_API_URL!}/nfl-team-listing/v1/data`;
    const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NFL_RAPID_API_KEY!,
      "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
    },
  };
    const response = await fetch(url, options);
    const result = await response.text();
*/
  await sleep(6000);
  return Response.json({ nflData: [] });
}
