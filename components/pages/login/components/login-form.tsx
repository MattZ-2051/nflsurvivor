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
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { loginSchema } from "@/lib/form-schemas";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
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
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <>
                      <div className="grid gap-2">
                        <FormItem>
                          <FormLabel htmlFor="username">Username</FormLabel>
                          <FormControl>
                            <Input
                              id="username"
                              type="username"
                              {...field}
                              placeholder="username"
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </div>
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
                      <Button type="submit" className="w-full">
                        Login
                      </Button>
                    </>
                  )}
                ></FormField>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </Form>
    </div>
  );
}
