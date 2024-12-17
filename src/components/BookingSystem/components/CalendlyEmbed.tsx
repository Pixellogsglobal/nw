import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
  onEventScheduled?: (e: any) => void;
}

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (config: {
        url: string;
        parentElement: HTMLElement | null;
        prefill?: any;
      }) => void;
    };
  }
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, prefill, onEventScheduled }) => {
  const handleEventScheduled = useCallback((e: MessageEvent) => {
    if (e.data.event === 'calendly.event_scheduled') {
      onEventScheduled?.(e.data);
    }
  }, [onEventScheduled]);

  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Add event listener for Calendly events
    window.addEventListener('message', handleEventScheduled);

    // Initialize Calendly widget when script loads
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: url,
          parentElement: document.getElementById('calendly-embed'),
          prefill: prefill
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleEventScheduled);
    };
  }, [url, prefill, handleEventScheduled]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div
        id="calendly-embed"
        className="min-h-[700px] w-full rounded-2xl overflow-hidden bg-white"
      />
    </motion.div>
  );
};

export default CalendlyEmbed;