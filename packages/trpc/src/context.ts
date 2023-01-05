import { getServerSession, type Session } from 'auth';
import { prisma } from 'db';
import { type inferAsyncReturnType } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

/**
 * Replace this with an object if you want to pass things to createContextInner
 */
type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 *  - testing, where we dont have to Mock Next.js' req/res
 *  - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://beta.create.t3.gg/en/usage/trpc#-servertrpccontextts
 */
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (
  opts: trpcExpress.CreateExpressContextOptions
) => {
  const session = await getServerSession(opts);
  return await createContextInner({
    session,
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;
