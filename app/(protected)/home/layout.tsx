export default function Layout({
  children,
  games,
  nfldata,
}: {
  children: React.ReactNode;
  games: React.ReactNode;
  nfldata: React.ReactNode;
}) {
  return (
    <div className="w-full gap-12 h-screen flex flex-col">
      {children}
      {games}
      {nfldata}
    </div>
  );
}
