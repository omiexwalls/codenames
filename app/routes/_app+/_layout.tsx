import Toolbar from '~/components/toolbar';
import { Outlet } from '@remix-run/react';

export default function AppLayout() {
  return (
    <>
      <Toolbar />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
