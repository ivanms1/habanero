import { Fragment } from 'react';
import { Combobox as LCombobox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Input from '../Input';

interface ComboboxProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, 'onSelect'> {
  className?: string;
  selected?: string | number;
  onSelect?: (value: string | number) => void;
  options: { value: string | number; label: string }[];
  afterLeave?: () => void;
}

export default function Combobox({
  className,
  options,
  onSelect,
  selected,
  afterLeave,
  ...props
}: ComboboxProps) {
  return (
    <LCombobox value={selected} onChange={onSelect}>
      <div className={clsx('relative', className)}>
        <div className='relative w-full cursor-default text-left sm:text-sm'>
          {/* @ts-expect-error onChange is required for some reason */}
          <LCombobox.Input className='w-80' as={Input} {...props} />
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={afterLeave}
        >
          <LCombobox.Options
            className={clsx(
              'absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
              { hidden: !!selected || !options?.length }
            )}
          >
            {options?.map((option) => (
              <LCombobox.Option
                key={option.value}
                className={({ active }) =>
                  clsx('relative cursor-default select-none py-2 pl-10 pr-4', {
                    'bg-teal-600 text-white': active,
                    'text-gray-900': !active,
                  })
                }
                value={option.value}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={clsx('block truncate', {
                        'font-medium': selected,
                        'font-normal': !selected,
                      })}
                    >
                      {option.label}
                    </span>
                    {selected ? (
                      <span
                        className={clsx(
                          'absolute inset-y-0 left-0 flex items-center pl-3',
                          {
                            'text-white': active,
                            'text-teal-600': !active,
                          }
                        )}
                      />
                    ) : null}
                  </>
                )}
              </LCombobox.Option>
            ))}
          </LCombobox.Options>
        </Transition>
      </div>
    </LCombobox>
  );
}
