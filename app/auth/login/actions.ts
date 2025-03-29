"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function loginAction({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const supabase = await createClient();
  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error && error.message.includes("Invalid login")) {
    return {
      error: "No user with that email and password exist",
    };
  }

  if (error) {
    return {
      error: "Error logging in",
    };
  }

  revalidatePath("/", "layout");
  redirect("/home");
  return;
}
