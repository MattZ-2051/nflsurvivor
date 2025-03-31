"use server";

import { createClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUpAction = async ({
  email,
  password,
  confirmPassword,
}: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (password !== confirmPassword) {
    return {
      error: "Passwords must match",
    };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return {
      error: error.message,
    };
  }
  revalidatePath("/", "layout");
  redirect("/auth/login");
  return;
};
