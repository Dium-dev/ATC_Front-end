'use client';
import './globals.css';

import { Inter } from 'next/font/google';

import { AuthContextProvider } from '../context/AuthContext';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });


import '@fortawesome/fontawesome-free/css/all.min.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <AuthContextProvider>
            <div className="w-full h-full bg-background-lm dark:bg-background-dm  text-text-lm dark:text-text-dm text-base">
              {children}
            </div>
          </AuthContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
