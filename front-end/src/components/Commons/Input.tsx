import { twMerge } from 'tailwind-merge';

interface InputProps {
  type: string;
  id?: string;
  className?: string;
}

export function Input({ type, id, className }: InputProps) {
  return (
    <input
      className={twMerge(
        'border-[1px] rounded-md p-3 border-base-gray-500',
        className
      )}
      type={type}
      id={id}
    />
  );
}
