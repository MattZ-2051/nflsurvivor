import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";
import { getUserPlayerProfile } from "@/lib/server/db/queries/players";

export async function GET(request: Request): Promise<Response> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  console.log("user data", data);

  const userId = data.user.id;
  const playerProfile = await getUserPlayerProfile(userId);

  return Response.json({ playerProfile });
}
