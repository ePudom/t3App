import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "start/server/api/trpc";

export const topicRouter = createTRPCRouter({
  getAll: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.topic.findMany({
          where: {
            userId: ctx.session.user.id,
        },
      });
    }),
});