import clsx from 'clsx';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea = ({
  label,
  id,
  name,
  error,
  className,
  ...props
}: TextAreaProps) => {
  return (
    <div className='flex flex-col relative'>
      <label
        htmlFor={id || name}
        className='font-semibold text-neutral-80 mb-1'
      >
        {label}
      </label>
      <textarea
        className={clsx(
          BASE_STYLES,
          BORDER_COLOR[error ? 'error' : 'default'],
          className
        )}
        id={id || name}
        {...props}
      />
      {!!error && (
        <p className='text-accent-red text-xs absolute -bottom-4'>{error}</p>
      )}
    </div>
  );
};

export default TextArea;

const BASE_STYLES =
  'border text-neutral-80 placeholder:text-neutral-40 bg-white px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50';

const BORDER_COLOR = {
  default: 'border-neutral-20',
  error: 'border-accent-red focus:ring-0',
};
