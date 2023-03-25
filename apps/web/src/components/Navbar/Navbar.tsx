import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Button } from 'ui';

export function Navbar() {
  const { t } = useTranslation('common');
  return (
    <div className='flex flex-row px-32 justify-between bg-light-gray py-4 items-center lg:-mx-32 -mx-4'>
      <div className='flex flex-row gap-4'>
        <Link href='/search'>{t('find-jobs')}</Link>
        <Link href='/companies'>{t('find-companies')}</Link>
      </div>
      <div className='flex flex-row gap-8 border-none'>
        <Button variant='secondary'>{t('login')}</Button>
        <Button>{t('signup')}</Button>
      </div>
    </div>
  );
}
