import { SignIn } from '@clerk/remix';
export default function SignInPage() {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center h-screen w-screen bg-background">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Codenames
      </h1>
      <SignIn signUpUrl={'/sign-up'} />
    </div>
  );
}
