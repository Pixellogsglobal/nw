import { z } from 'zod';

export const providerSchema = z.enum(['google', 'github', 'microsoft']);
export type Provider = z.infer<typeof providerSchema>;

export interface AuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

const configs: Record<Provider, AuthConfig> = {
  google: {
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || '',
    redirectUri: `${window.location.origin}/auth/callback/google`
  },
  github: {
    clientId: import.meta.env.VITE_GITHUB_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET || '',
    redirectUri: `${window.location.origin}/auth/callback/github`
  },
  microsoft: {
    clientId: import.meta.env.VITE_MICROSOFT_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_MICROSOFT_CLIENT_SECRET || '',
    redirectUri: `${window.location.origin}/auth/callback/microsoft`
  }
};

export const getProviderConfig = (provider: Provider): AuthConfig => {
  return configs[provider];
};