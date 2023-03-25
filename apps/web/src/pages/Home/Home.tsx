import { useTranslation } from 'next-i18next';

import { SearchBar } from 'ui';

import HomePageUnderline from '@/assets/svg/home-page-underline.svg';
import Image from 'next/image';

export function Home() {
  const { t } = useTranslation('home');
  return (
    <div className='flex flex-row items-center bg-light-gray -mx-32 px-32 py-20'>
      <div>
        <div className='max-w-xl mb-6'>
          <h1 className='text-7xl text-neutral-100 mb-3 font-montserrat'>
            {t('title')}
          </h1>
          <HomePageUnderline className='mb-6' />
          <p className='text-xl text-neutral-80'>{t('subtitle')}</p>
        </div>
        <SearchBar
          className='mb-3'
          jobPlaceholder='Job title or keyword'
          submitButtonText='Search my job'
          selectedCity={1}
          cities={PLACEHOLDER_CITIES}
        />
        <div className='flex gap-1'>
          <p>{t('popular')}</p>:
          <div className='flex gap-2'>
            {PLACEHOLDER_POPULAR_JOBS.map((job, index) => (
              <span key={job}>
                {job}
                {index + 1 !== PLACEHOLDER_POPULAR_JOBS.length && ','}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Image
        className=''
        alt='homepage-model'
        height={707}
        width={501}
        src='/assets/images/homepage-model.png'
      />
    </div>
  );
}

const PLACEHOLDER_POPULAR_JOBS = [
  'Frontend Developer',
  'Backend Developer',
  'UI/UX Designer',
];

const PLACEHOLDER_CITIES = [
  { value: '1', label: 'New York' },
  { value: '2', label: 'Los Angeles' },
  { value: '3', label: 'Chicago' },
  { value: '4', label: 'Houston' },
  { value: '5', label: 'Philadelphia' },
  { value: '6', label: 'Phoenix' },
  { value: '7', label: 'San Antonio' },
  { value: '8', label: 'San Diego' },
  { value: '9', label: 'Dallas' },
  { value: '10', label: 'San Jose' },
  { value: '11', label: 'Austin' },
  { value: '12', label: 'Jacksonville' },
  { value: '13', label: 'San Francisco' },
  { value: '14', label: 'Indianapolis' },
  { value: '15', label: 'Columbus' },
];
