import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/remix';
import Toolbar from '~/components/toolbar';

export default function PlayPage() {
  return (
    <>
      <SignedIn>Play</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
