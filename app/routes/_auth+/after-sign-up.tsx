import { redirect } from '@remix-run/router';
import type { DataFunctionArgs, LoaderFunction } from '@remix-run/node';
import { getAuth } from '@clerk/remix/ssr.server';
import prisma from '~/services/prisma.service';
import { createClerkClient } from '@clerk/remix/api.server';
import * as process from 'process';
import invariant from 'tiny-invariant';

export const loader: LoaderFunction = async (args: DataFunctionArgs) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect('/sign-in');
  }
  const user = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  }).users.getUser(userId);

  invariant(user, 'User not found');

  await prisma.user.upsert({
    create: {
      id: userId,
      username: user.username!,
    },
    update: {
      username: user.username!,
    },
    where: {
      id: userId,
    },
  });
  return redirect('/');
};
