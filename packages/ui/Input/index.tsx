import clsx from 'clsx';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({
  label,
  id,
  name,
  type = 'text',
  error,
  className,
  ...props
}: InputProps) => {
  return (
    <div className='flex flex-col relative'>
      {label && (
        <label
          htmlFor={id || name}
          className='font-semibold text-neutral-80 mb-1'
        >
          {label}
        </label>
      )}
      <input
        className={clsx(
          BASE_STYLES,
          BORDER_COLOR[error ? 'error' : 'default'],
          className
        )}
        id={id || name}
        type={type}
        {...props}
      />
      {!!error && (
        <p className='text-accent-red text-xs absolute -bottom-4'>{error}</p>
      )}
    </div>
  );
};

export default Input;

const BASE_STYLES =
  'border text-neutral-80 placeholder:text-neutral-40 bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50';

const BORDER_COLOR = {
  default: 'border-neutral-20 ',
  error: 'border-accent-red focus:ring-0',
};
