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

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, prefill, onEventScheduled }) => {
  const handleEventScheduled = useCallback((e: any) => {
    if (e.data.event === 'calendly.event_scheduled') {
      onEventScheduled?.(e.data);
      
      // Save appointment to our database
      fetch('/api/appointments/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: 'invitee.created',
          payload: {
            event_type: { name: e.data.payload.event_type.name },
            event: {
              start_time: e.data.payload.event.start_time,
              end_time: e.data.payload.event.end_time,
              uri: e.data.payload.event.uri
            },
            tracking: {
              utm_source: localStorage.getItem('clientId'), // Client ID
              utm_medium: localStorage.getItem('consultantId') // Consultant ID
            }
          }
        })
      });
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

    return () => {
      document.body.removeChild(script);
      window.removeEventListener('message', handleEventScheduled);
    };
  }, [handleEventScheduled]);

  useEffect(() => {
    // Initialize Calendly widget
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: url,
        parentElement: document.getElementById('calendly-embed'),
        prefill: prefill,
      });
    }
  }, [url, prefill]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div
        id="calendly-embed"
        className="min-h-[700px] w-full rounded-2xl overflow-hidden"
      />
    </motion.div>
  );
};

export default CalendlyEmbed;