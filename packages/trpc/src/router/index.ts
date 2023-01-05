import { router } from '../trpc';
import { jobPostRouter } from './post';
import { authRouter } from './auth';

export const appRouter = router({
  jobPost: jobPostRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
