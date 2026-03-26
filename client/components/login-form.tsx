"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent
} from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";


export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);


const onLogin = async () => {
  setIsLoading(true);
  try {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:3000/api/auth/callback/github"
    });
  } finally {
    setIsLoading(false);
  }
}


  return (
    <div className="flex flex-col gap-6 justify-center items-center ">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Image
          src={"/login.svg"}
          alt="Login"
          height={500}
          width={500}
          priority
          style={{ width: "auto", height: "auto" }}
        />
        <h1 className="text-6xl font-extrabold text-indigo-400">Welcome Back! to Zcode</h1>
        <p className="text-base font-medium text-zinc-400">Login to your account for allowing device flow</p>
      </div>
      <Card className="border-dashed border-2">
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <Button
                variant={"outline"}
                className="w-full h-full"
                type="button"
                onClick={onLogin}
                disabled={isLoading}
              >
                <Image src={"/github.svg"} alt="Github" height={16} width={16} className="size-4 dark:invert" />
                Continue With GitHub
              </Button>

            </div>

          </div>

        </CardContent>
      </Card>
    </div>
  )
} 