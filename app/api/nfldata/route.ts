import { sleep } from "@/lib/utils";

export async function GET(request: Request) {
  const url = `${process.env.NFL_RAPID_API_URL!}/nfl-team-listing/v1/data`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.NFL_RAPID_API_KEY!,
      "x-rapidapi-host": "nfl-api-data.p.rapidapi.com",
    },
  };
  const response = await fetch(url, options);
  const result = await response.text();
  return Response.json({ nflData: result });
}
