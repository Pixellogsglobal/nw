// Update the form text color and button visibility
<input
  type={field.type}
  value={formData[field.name as keyof BookingFormData]}
  onChange={(e) => onChange({ ...formData, [field.name]: e.target.value })}
  required
  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl
    focus:outline-none focus:ring-2 focus:ring-brand-red-500 focus:border-transparent
    text-white placeholder-gray-400"
  placeholder={`Enter your ${field.label.toLowerCase()}`}
/>

<motion.button
  type="submit"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  className="w-full py-4 bg-brand-red-500 text-white rounded-xl font-bold text-lg
    flex items-center justify-center gap-2 hover:bg-brand-red-600"
>
  Complete Booking
  <CreditCard className="w-5 h-5" />
</motion.button>