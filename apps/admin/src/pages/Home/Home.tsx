import { Button } from 'ui';

import { trpc } from '@/utils/trpc';
import { useTranslation } from 'next-i18next';

export function Home() {
  const createJob = trpc.jobPost.create.useMutation();

  const { t } = useTranslation('home');

  const handleClick = () => {
    createJob.mutate({ content: 'test job', role: 'test role' });
  };

  return (
    <div>
      <h1 className='text-4xl'>{t('title')}</h1>
      <Button onClick={handleClick}>{t('create-post')}</Button>
    </div>
  );
}
