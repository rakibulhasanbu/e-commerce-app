import Link from "next/link";

import AuthWrapper from "@/components/auth/AuthWrapper";
import SignInForm from "@/components/auth/SignInForm";

const page = ({ searchParams }: { searchParams: { from: string } }) => {
  return (
    <AuthWrapper
      label="Login"
      des="Enter your email below to login to your account"
      imageUrl="/image/sign-in.svg"
    >
      <SignInForm from={searchParams.from} />
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/auth/sign-up" className="underline">
          Sign up
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default page;
