import AuthWrapper from "@/components/auth/AuthWrapper";
import OTPForm from "@/components/auth/OTPForm";
import { OTPExpire } from "@/components/auth/re-send-timer";
import { ISearchParams } from "@/types";

const page = ({ searchParams }: ISearchParams) => {
  const targetDate = new Date(Date.now() + 2 * 60 * 1000);

  return (
    <AuthWrapper
      label="Verify User"
      des="Please enter the 6-digit OTP sent to your registered email."
      imageUrl="/image/otp.svg"
    >
      <OTPForm />
      <OTPExpire email={searchParams.email} targetDate={targetDate} />
    </AuthWrapper>
  );
};

export default page;
