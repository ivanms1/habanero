import express from 'express';
import cors from 'cors';
import type { CorsOptions } from 'cors';
import * as dotenv from 'dotenv';
import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from 'trpc';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

const WHITELIST = [
  process.env.WEB_URL as string,
  process.env.ADMIN_URL as string,
];

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
