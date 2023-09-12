'use client';
import { useTheme } from 'next-themes';
import type { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type ThemeModeButtonProps = {
  sizeIcon?: number;
};

export function ThemeModeButton({ sizeIcon = 35 }: ThemeModeButtonProps) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const handleTheme = () =>
    theme === 'dark' ? setTheme('light') : setTheme('dark');

  return (
    <IconButton
      onClick={handleTheme}
      icon={
        theme === 'dark' ? (
          <SunIcon size={sizeIcon} />
        ) : (
          <MoonIcon size={sizeIcon} />
        )
      }
    />
  );
}

type IconButtonProps = {
  icon: ReactNode;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      className="group p-1 rounded-full text-background-dm hover:text-text-lm dark:hover:text-text-dm"
      {...props}
    >
      {icon}
    </button>
  );
}

type IconProps = {
  className?: string;
  size: number;
};
function SunIcon({ size, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4V2m0 18v2M6.414 6.414L5 5m12.728 12.728l1.414 1.414M4 12H2m18 0h2m-4.271-5.586L19.143 5M6.415 17.728L5 19.142M12 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"
      />
    </svg>
  );
}

function MoonIcon({ size, ...props }: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.958 15.325c.204-.486-.379-.9-.868-.684a7.684 7.684 0 0 1-3.101.648c-4.185 0-7.577-3.324-7.577-7.425a7.28 7.28 0 0 1 1.134-3.91c.284-.448-.057-1.068-.577-.936C5.96 4.041 3 7.613 3 11.862C3 16.909 7.175 21 12.326 21c3.9 0 7.24-2.345 8.632-5.675Z" />
        <path d="M15.611 3.103c-.53-.354-1.162.278-.809.808l.63.945a2.332 2.332 0 0 1 0 2.588l-.63.945c-.353.53.28 1.162.81.808l.944-.63a2.332 2.332 0 0 1 2.588 0l.945.63c.53.354 1.162-.278.808-.808l-.63-.945a2.332 2.332 0 0 1 0-2.588l.63-.945c.354-.53-.278-1.162-.809-.808l-.944.63a2.332 2.332 0 0 1-2.588 0l-.945-.63Z" />
      </g>
    </svg>
  );
}
