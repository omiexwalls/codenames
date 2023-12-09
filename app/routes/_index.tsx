import type { MetaFunction } from '@remix-run/node';
import { Button } from '~/components/ui/button';
import { SignedIn, SignedOut } from '@clerk/remix';
import { NavLink } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center h-screen w-screen">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Codenames
      </h1>
      <SignedOut>
        <div className="flex space-x-4">
          <NavLink to="/sign-in">
            <Button variant="outline">Sign In</Button>
          </NavLink>
          <NavLink to="/sign-up">
            <Button
              variant="default"
              className="bg-primary/90 hover:bg-primary/90"
            >
              Sign Up
            </Button>
          </NavLink>
        </div>
      </SignedOut>
      <SignedIn>
        <NavLink to="/play">
          <Button variant="default">Play</Button>
        </NavLink>
      </SignedIn>
    </div>
  );
}
