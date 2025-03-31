"use server";
import { createClient } from "@/lib/utils/supabase/server";
import { redirect } from "next/navigation";

export const resetPasswordAction = async (formData: FormData) => {
  const supabase = await createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!password || !confirmPassword) {
    redirect("/reset-password");
  }

  if (password !== confirmPassword) {
    redirect("/reset-password");
  }

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    redirect("/reset-password");
  }

  redirect("/reset-password");
};
