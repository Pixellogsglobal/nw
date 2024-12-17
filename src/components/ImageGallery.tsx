import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  {
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Students collaborating",
    title: "Personalized Guidance",
    description: "Expert mentoring for academic excellence",
    category: "Academic Support"
  },
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
    alt: "Student studying",
    title: "Success Stories",
    description: "Join our community of achievers",
    category: "Student Success"
  }
];

const ImageCard = ({ image, index }: { image: typeof images[0]; index: number }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className="relative h-[80vh] group"
    >
      {/* Main Container */}
      <motion.div
        className="relative w-full h-full overflow-hidden rounded-[2rem]"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.2 }}
          animate={{ scale: inView ? 1 : 1.2 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay Gradients */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Red Glass Effect on Hover */}
        <motion.div
          className="absolute inset-0 bg-brand-red-500/0 backdrop-blur-[2px] transition-all duration-500"
          whileHover={{ backgroundColor: 'rgba(220, 38, 38, 0.2)' }}
        />

        {/* Content */}
        <motion.div
          className="absolute inset-0 p-12 flex flex-col justify-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {/* Category Tag */}
          <motion.span
            className="inline-block px-6 py-2 rounded-full text-sm font-medium text-white 
              bg-brand-red-500/80 backdrop-blur-sm mb-6 w-fit"
            whileHover={{ scale: 1.05 }}
          >
            {image.category}
          </motion.span>

          {/* Title with Reveal Animation */}
          <motion.h3
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {image.title}
          </motion.h3>

          {/* Description with Reveal Animation */}
          <motion.p
            className="text-xl text-white/90 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {image.description}
          </motion.p>

          {/* Interactive Elements */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-white text-brand-red-500 rounded-full font-bold
                transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ImageGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
      {images.map((image, index) => (
        <ImageCard
          key={index}
          image={image}
          index={index}
        />
      ))}
    </div>
  );
};

export default ImageGallery;