import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';

import Home from 'src/pages/Home';

import { DEFAULT_LOCALE } from 'src/const';

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || DEFAULT_LOCALE;
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
    },
  };
};
