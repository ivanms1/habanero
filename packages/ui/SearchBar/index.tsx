import clsx from 'clsx';

import { Button } from '../Button';
import Combobox from '../Combobox';
import Input from '../Input';

interface SearchBarProps {
  jobPlaceholder: string;
  submitButtonText: string;
  cities: { value: string | number; label: string }[];
  selectedCity?: string | number;
  className?: string;
}

export function SearchBar({
  className,
  jobPlaceholder,
  submitButtonText,
  cities,
}: SearchBarProps) {
  return (
    <div
      className={clsx(
        'flex flex-row gap-6 items-center bg-white w-fit p-4 shadow-md rounded-md',
        className
      )}
    >
      <Input
        className='py-2 border-b border-b-gray-300 w-80'
        placeholder={jobPlaceholder}
      />
      <Combobox options={cities} />
      <Button className='w-52'>{submitButtonText}</Button>
    </div>
  );
}
