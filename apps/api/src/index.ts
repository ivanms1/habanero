import express from 'express';
import cors from 'cors';
import type { CorsOptions } from 'cors';
import * as trpcExpress from '@trpc/server/adapters/express';

import { appRouter, createContext } from 'trpc';

const app = express();

const PORT = process.env.PORT || 4000;

const WHITELIST = ['http://localhost:3000', 'http://localhost:3001'];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin && WHITELIST.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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
