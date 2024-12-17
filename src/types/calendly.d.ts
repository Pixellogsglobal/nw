interface Window {
  Calendly: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement | null;
      prefill?: {
        name?: string;
        email?: string;
        customAnswers?: Record<string, string>;
      };
    }) => void;
  };
}