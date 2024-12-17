import React, { createContext, useContext, useState, useCallback } from 'react';
import { useAuth } from '../../lib/auth/useAuth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  signIn: (provider: string) => Promise<void>;
  signOut: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const { signIn: authSignIn, isLoading, error } = useAuth();

  const signIn = useCallback(async (provider: string) => {
    await authSignIn(provider);
  }, [authSignIn]);

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const value = {
    isAuthenticated: !!user,
    user,
    signIn,
    signOut,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};