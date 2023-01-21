import { useTranslation } from 'next-i18next';

export function Home() {
  const { t } = useTranslation('home');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('subtitle')}</p>
    </div>
  );
}
