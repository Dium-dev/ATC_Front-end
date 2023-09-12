'use client';

type InputFieldProps = {
  label?: string;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  color?: 'default' | 'red';
  className?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function InputField({
  label,
  required = false,
  leftIcon,
  rightIcon,
  color,
  className,
  ...props
}: InputFieldProps) {
  const currentColor = color === 'red' ? 'primary-lm' : '';

  return (
    <div className="">
      <div className="flex">
        <label
          className={`flex-grow font-semibold text-${currentColor}`}
          htmlFor="input-fiel"
        >
          {label}
        </label>
        {required && (
          <span className="text-xs text-[#c74949]">(obligatorio)</span>
        )}
      </div>
      <div className="rounded relative">
        {leftIcon && (
          <div
            className={`absolute left-0 inset-y-0 py-2 pl-2 px-1 aspect-square text-${currentColor}`}
          >
            {leftIcon}
          </div>
        )}
        <input
          {...props}
          id="input-field"
          type="text"
          className={`w-full py-1.5 px-3 outline-none rounded-md text-secondary-dm
          ${leftIcon && 'pl-9'} 
          ${rightIcon && 'pr-9'}
          border-${currentColor} ${className}`}
          required={required}
          autoComplete="off"
        />
        {rightIcon && (
          <div
            className={`absolute right-0 inset-y-0 py-2 px-1 aspect-square  text-${currentColor}`}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}
