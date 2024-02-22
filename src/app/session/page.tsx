'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { MainButton } from '~/components/button/button';
import { SignIn } from './signin';

const SESSION = ['Signin', 'Signup'] as const;

export default function Session() {
  const [session, setSession] = useState<(typeof SESSION)[number]>('Signin');
  const route = useRouter();

  return (
    <>
      <header className="py-3 px-1 flex center justify-end">
        <MainButton
          onClick={() => route.push('/')}
          className="grid place-content-center"
        >
          <FiX className="w-8 h-8" />
        </MainButton>
      </header>
      <main className="h-[91vh] grid place-content-center px-2">
        <div className="shadow">
          <div>
            {SESSION.map((_session) => (
              <MainButton
                color={_session === session ? 'red' : 'default'}
                onClick={() => setSession(_session)}
                key={'s-' + _session}
              >
                {_session}
              </MainButton>
            ))}
          </div>
          <div>{session === 'Signin' ? <SignIn /> : 'registrase'}</div>
        </div>
      </main>
    </>
  );
}
