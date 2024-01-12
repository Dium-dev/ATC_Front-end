'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '~/config/firebase-config';
const AuthContext = createContext<any>({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsusbscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsusbscribe();
  }, []);

  const signup = (email: string, password: string, firstName: string, lastName: string, phone: string) => {
    fetch('http://localhost:3001/users/register', {
      method: 'POST',
      body: JSON.stringify({email, password, firstName, lastName, phone}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => localStorage.setItem('token', data.token))
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    fetch('http://localhost:3001/users/login', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(data => data.token && localStorage.setItem('token', data.token))
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('token');
    await signOut(auth);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
