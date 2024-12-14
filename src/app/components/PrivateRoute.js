// components/PrivateRoute.js
"use client";

import { useUser } from '../components/userContexte';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/authentification/connection');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return <div>Chargement...</div>; 
  }

  return <>{children}</>; 
};

export default PrivateRoute;
