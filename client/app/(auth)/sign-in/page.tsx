
"use client"
import { LoginForm } from '@/components/login-form'
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const Page =  () => {
    const {data , isPending , } = authClient.useSession();
  const router = useRouter();

  const shouldRedirectHome = Boolean(data?.session && data?.user);

  useEffect(() => {
    if (shouldRedirectHome) router.replace("/");
  }, [shouldRedirectHome, router]);

  if(isPending){
    return (
      <div className="flex flex-col items-center justify-center h-screen">
          <Spinner />
      </div>
    )
  }

  if (shouldRedirectHome) return null;

  return (
    <LoginForm />
  )
}

export default Page