import { useState, useRef, useEffect } from 'react';
import { ErrorState } from '../types';

export const useSpeechRecognition = (onTranscript: (text: string) => void) => {
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<ErrorState>({ type: null, message: '' });
  const [retryCount, setRetryCount] = useState(0);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const initializeSpeechRecognition = () => {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
      setError({
        type: 'general',
        message: 'Speech recognition is not supported in your browser.'
      });
      return false;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
      setIsListening(false);
      setError({ type: null, message: '' });
    };

    recognitionRef.current.onerror = (event) => {
      setIsListening(false);
      
      switch (event.error) {
        case 'network':
          setError({
            type: 'network',
            message: 'Network error occurred. Please check your connection.'
          });
          break;
        case 'not-allowed':
        case 'permission-denied':
          setError({
            type: 'permission',
            message: 'Microphone access denied. Please enable permissions.'
          });
          break;
        case 'no-speech':
          setError({
            type: 'no-speech',
            message: 'No speech detected. Please try again.'
          });
          break;
        default:
          setError({
            type: 'general',
            message: 'An error occurred. Please try again.'
          });
      }
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      
      if (error.type === 'network' && retryCount < 3) {
        setRetryCount(prev => prev + 1);
        setTimeout(startListening, 1000);
      }
    };

    return true;
  };

  useEffect(() => {
    initializeSpeechRecognition();
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  const startListening = () => {
    if (!recognitionRef.current && !initializeSpeechRecognition()) {
      return;
    }

    setError({ type: null, message: '' });
    setRetryCount(0);

    try {
      recognitionRef.current?.start();
      setIsListening(true);
    } catch (err) {
      setError({
        type: 'general',
        message: 'Failed to start voice recognition. Please try again.'
      });
      setIsListening(false);
    }
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return {
    isListening,
    error,
    toggleListening,
    startListening,
    stopListening
  };
};