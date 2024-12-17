export interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  timestamp: number;
}

export interface ErrorState {
  type: 'network' | 'permission' | 'no-speech' | 'general' | null;
  message: string;
}