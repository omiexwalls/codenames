import { SignUp } from '@clerk/remix';
export default function SignUpPage() {
  return (
    <>
      <SignUp signInUrl={'/sign-in'} />
    </>
  );
}
