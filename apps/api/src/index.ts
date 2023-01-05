import express from 'express';
import cors from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';

import { appRouter, createContext } from 'trpc';

const app = express();

const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
