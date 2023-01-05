import { router, publicProcedure } from '../trpc';
import { z } from 'zod';

export const jobPostRouter = router({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.jobPost.findMany();
  }),
  byId: publicProcedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.jobPost.findFirst({ where: { id: input } });
  }),
  create: publicProcedure
    .input(z.object({ role: z.string(), content: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.jobPost.create({ data: input });
    }),
});
