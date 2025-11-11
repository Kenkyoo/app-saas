"use client";

import Link from "next/link";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { signIn, signUp } from "./actions";
import { ActionState } from "@/lib/auth/middleware";
import { GalleryVerticalEnd } from "lucide-react";

export function Login({ mode = "signin" }: { mode?: "signin" | "signup" }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const priceId = searchParams.get("priceId");
  const inviteId = searchParams.get("inviteId");
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === "signin" ? signIn : signUp,
    { error: "" },
  );

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form action={formAction} className={cn("flex flex-col gap-6")}>
              <input type="hidden" name="redirect" value={redirect || ""} />
              <input type="hidden" name="priceId" value={priceId || ""} />
              <input type="hidden" name="inviteId" value={inviteId || ""} />
              <FieldGroup>
                <div className="flex flex-col items-center gap-1 text-center">
                  <h1 className="text-2xl font-bold">
                    {" "}
                    {mode === "signin"
                      ? "Sign in to your account"
                      : "Create your account"}
                  </h1>
                  <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                  </p>
                </div>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    defaultValue={state.email}
                    required
                    maxLength={50}
                    placeholder="Enter your email"
                  />
                </Field>
                <Field>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={
                      mode === "signin" ? "current-password" : "new-password"
                    }
                    defaultValue={state.password}
                    required
                    minLength={8}
                    maxLength={100}
                  />
                </Field>
                <Field>
                  <Button disabled={pending} type="submit">
                    {" "}
                    {pending ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-4 w-4" />
                        Loading...
                      </>
                    ) : mode === "signin" ? (
                      "Sign in"
                    ) : (
                      "Sign up"
                    )}
                  </Button>
                </Field>
                <FieldSeparator></FieldSeparator>
                {state?.error && (
                  <div className="text-red-500 text-sm">{state.error}</div>
                )}

                <Field>
                  <FieldDescription className="text-center">
                    <Link
                      href={`${mode === "signin" ? "/sign-up" : "/sign-in"}${
                        redirect ? `?redirect=${redirect}` : ""
                      }${priceId ? `&priceId=${priceId}` : ""}`}
                      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      {mode === "signin"
                        ? "Create an account"
                        : "Sign in to existing account"}
                    </Link>
                  </FieldDescription>
                  <FieldDescription className="text-center">
                    {mode === "signin"
                      ? "New to our platform?"
                      : "Already have an account?"}
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        <img
          src="/image.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
