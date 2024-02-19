'use client';
import './globals.css';

import { Inter } from 'next/font/google';

import { AuthContextProvider } from '../context/AuthContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });
const queryClient = new QueryClient();

import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Actualiza tu Carro</title>
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider attribute="class">
            <AuthContextProvider>
              <div className="w-full h-full bg-background-lm dark:bg-background-dm  text-text-lm dark:text-text-dm text-base">
                {children}
              </div>
            </AuthContextProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
