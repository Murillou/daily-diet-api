import { twMerge } from 'tailwind-merge';

interface InputProps {
  type: string;
  id?: string;
  className?: string;
  value?: string;
  onChange?: () => {};
}

export function Input({ type, id, className, value, onChange }: InputProps) {
  return (
    <input
      className={twMerge(
        'border-[1px] rounded-md p-3 border-base-gray-500',
        className
      )}
      type={type}
      value={value}
      onChange={onChange}
      id={id}
    />
  );
}
