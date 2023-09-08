'use client';
import { useState } from 'react';
import { useAuth } from '~/context/AuthContext';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, password);
      console.log('Login successful');
      router.push('/protected');
    } catch (error) {
      console.log(error);
      // Handle login error here if needed.
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full py-20  flex flex-col justify-center items-center shadow rounded border border-primary-dm">
        <h1 className="text-4xl font-semibold pb-10 text-primary-lm">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-primary-dm px-4 py-2 mb-2 rounded w-1/2 my-4 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-primary-dm px-4 py-2 mb-2 rounded w-1/2 my-4 outline-none"
        />
        <button
          className="bg-secondary-dm text-text-dm w-2/12 px-4 py-3 hover:bg-green-800 transition-all duration-500 my-8 ease-in-out rounded font-semibold"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="bg-secondary-dm text-text-dm w-2/12 px-4 py-3 hover:bg-green-800 transition-all duration-500 my-8 ease-in-out rounded font-semibold"
          onClick={() => {
            router.push('/signin');
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
