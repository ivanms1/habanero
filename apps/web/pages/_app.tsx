import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { AppType } from 'next/app';

import Layout from 'src/components/Layout';

import { trpc } from '@/utils/trpc';

import './globals.css';
import { appWithTranslation } from 'next-i18next';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(appWithTranslation(MyApp));
