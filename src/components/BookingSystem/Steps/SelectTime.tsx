// Update the button to be more visible
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={onNext}
  disabled={!canProceed}
  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2
    ${canProceed 
      ? 'bg-brand-red-500 hover:bg-brand-red-600 text-white'
      : 'bg-gray-400 cursor-not-allowed text-white/50'
    }`}
>
  Continue to Details
</motion.button>