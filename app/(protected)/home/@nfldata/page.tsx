import NflData from "@/components/pages/home/nfldata";

export default async function NflDataPage() {
  const res = await fetch(`${process.env.URL!}/api/nfldata/`, {
    method: "GET",
  });

  if (!res.ok) {
    return "Error fetching games";
  }

  const data = await res.json();
  return (
    <div className="w-full h-1/2 bg-secondary rounded-lg p-3">
      <NflData nflData={data.nflData} />
    </div>
  );
}
