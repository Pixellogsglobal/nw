import { useState, useCallback } from 'react';
import { Provider, providerSchema, getProviderConfig } from './providers';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signIn = useCallback(async (providerName: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const provider = providerSchema.parse(providerName);
      const config = getProviderConfig(provider);

      // Construct OAuth URL based on provider
      let authUrl = '';
      switch (provider) {
        case 'google':
          authUrl = `https://accounts.google.com/o/oauth2/v2/auth?` +
            `client_id=${config.clientId}&` +
            `redirect_uri=${encodeURIComponent(config.redirectUri)}&` +
            `response_type=code&` +
            `scope=openid email profile`;
          break;
        case 'github':
          authUrl = `https://github.com/login/oauth/authorize?` +
            `client_id=${config.clientId}&` +
            `redirect_uri=${encodeURIComponent(config.redirectUri)}`;
          break;
        case 'microsoft':
          authUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?` +
            `client_id=${config.clientId}&` +
            `redirect_uri=${encodeURIComponent(config.redirectUri)}&` +
            `response_type=code&` +
            `scope=openid email profile`;
          break;
      }

      // Open OAuth popup
      const width = 500;
      const height = 600;
      const left = window.screenX + (window.outerWidth - width) / 2;
      const top = window.screenY + (window.outerHeight - height) / 2;
      
      window.open(
        authUrl,
        'OAuth',
        `width=${width},height=${height},left=${left},top=${top}`
      );

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    signIn,
    isLoading,
    error
  };
};