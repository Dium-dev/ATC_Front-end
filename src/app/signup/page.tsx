'use client';
import { useState } from 'react';
import { useAuth } from '~/context/AuthContext';
import { useRouter } from 'next/navigation';
const Signup = () => {
  const { user, signup } = useAuth();
  console.log(user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSignup = async (e: any) => {
    try {
      await signup(email, password);
      router.push('/protected');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full py-20  flex flex-col justify-center items-center shadow rounded border border-primary-dm">
        <h1 className="text-sm md:text-lg xl:text-4xl font-semibold pb-10 text-primary-lm">
          Signup
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-primary-dm px-4 py-2 mb-2 rounded w-1/2 my-4 outline-none"
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-primary-dm px-4 py-2 mb-2 rounded w-1/2 my-4 outline-none"
        ></input>
        <button
          className="bg-secondary-dm text-text-dm w-2/12 px-4 py-3 hover:bg-green-800 transition-all duration-500 my-8 ease-in-out rounded font-semibold"
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;
