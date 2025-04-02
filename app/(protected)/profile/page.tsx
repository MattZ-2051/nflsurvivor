import { localFetch } from "@/lib/utils";

export default async function Page() {
  const path = "/api/players";
  const res = await fetch(`${process.env.URL!}${path}`, { method: "GET" });
  if (!res.ok) {
    return `Error with local fetch ${path}`;
  }

  console.log("player data,", res);
  return <>Player Profile Page</>;
}
