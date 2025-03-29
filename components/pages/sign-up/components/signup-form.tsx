"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema } from "@/lib/form-schemas";
import { signUpAction } from "@/app/auth/sign-up/actions";

export function SignupForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <div
      className={cn(
        "flex w-full h-[80vh] items-center justify-center gap-6",
        className,
      )}
      {...props}
    >
      <Form {...form}>
        <Card className="w-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={signUpAction} className="space-y-8">
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <>
                      <div className="grid gap-2">
                        <FormItem>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              type="email"
                              {...field}
                              placeholder="email"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    </>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <>
                      <div className="grid gap-2">
                        <FormItem>
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <FormControl>
                            <Input
                              id="password"
                              type="password"
                              {...field}
                              placeholder="password"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    </>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <>
                      <div className="grid gap-2">
                        <FormItem>
                          <FormLabel htmlFor="confirmPassword">
                            Confirm Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              id="confirmPassword"
                              type="password"
                              {...field}
                              placeholder="confirmPassword"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
                    </>
                  )}
                />
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?
                <a href="/auth/login" className="underline underline-offset-4">
                  Log In
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
}
