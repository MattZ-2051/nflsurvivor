import NflData from "@/components/pages/home/nfldata";
import { localFetch } from "@/lib/utils";

export default async function NflDataPage() {
  const data = await localFetch<any>("/api/nfldata/", {
    method: "GET",
  });

  return (
    <div className="w-full h-1/2 bg-secondary rounded-lg p-3">
      <NflData nflData={data.nflData} />
    </div>
  );
}
