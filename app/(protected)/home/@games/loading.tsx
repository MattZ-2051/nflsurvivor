import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingGames() {
  return (
    <Skeleton className="w-full h-1/2 bg-secondary rounded-lg p-3">
      Loading games...
    </Skeleton>
  );
}
