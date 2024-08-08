import Link from "next/link";

import AuthWrapper from "@/components/auth/AuthWrapper";
import SignUpForm from "@/components/auth/SignUpForm";

const page = () => {
  return (
    <AuthWrapper
      imageUrl="/image/sign-up.svg"
      label="Sign Up"
      des="Enter your information to create an account"
    >
      <SignUpForm />
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/auth/sign-in" className="underline">
          Sign in
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default page;
