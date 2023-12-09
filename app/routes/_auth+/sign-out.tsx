import { useClerk } from '@clerk/remix';
import { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

export default function SignOutPage() {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  useEffect(() => {
    signOut(() => navigate('/')).then(() => console.log('Signed out'));
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h3 className="text-2xl text-secondary-foreground">Signing out...</h3>
    </div>
  );
}
