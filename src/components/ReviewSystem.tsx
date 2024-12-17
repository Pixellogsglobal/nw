import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Star, MessageSquare, Send } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The consultation was incredibly helpful. My consultant provided clear guidance for my academic journey.',
    date: '2024-02-15'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Outstanding service! The personalized attention helped me choose the perfect university program.',
    date: '2024-02-10'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 4,
    comment: 'Very professional and knowledgeable consultants. Great experience overall.',
    date: '2024-02-05'
  }
];

const ReviewCard: React.FC<{
  review: typeof reviews[0];
  index: number;
}> = ({ review, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Parallax translateY={[20, -20]} scale={[0.9, 1.1]} easing="easeInQuad">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2, duration: 0.6 }}
        whileHover={{ y: -10 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden"
      >
        {/* Glass Background */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ background: 'rgba(255, 255, 255, 0.1)' }}
          animate={{
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.2), rgba(255, 255, 255, 0.1))'
              : 'rgba(255, 255, 255, 0.1)',
            backdropFilter: isHovered ? 'blur(20px)' : 'blur(10px)'
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative p-8 backdrop-blur-lg rounded-2xl border border-white/20">
          <motion.div
            className="flex items-start justify-between mb-6"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <motion.h3 
                className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-red-600 to-brand-red-500"
                animate={{ scale: isHovered ? 1.05 : 1 }}
              >
                {review.name}
              </motion.h3>
              <p className="text-gray-500 text-sm mt-1">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
            <motion.div 
              className="flex gap-1"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star
                    className={`w-5 h-5 ${
                      i < review.rating 
                        ? 'text-brand-red-500 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.p 
            className="text-gray-600 leading-relaxed"
            animate={{ opacity: isHovered ? 1 : 0.9 }}
          >
            {review.comment}
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-brand-red-500/20 blur-3xl"
            animate={{
              scale: isHovered ? 1.5 : 1,
              opacity: isHovered ? 0.4 : 0.2
            }}
          />
        </div>
      </motion.div>
    </Parallax>
  );
};

const ReviewSystem: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRating(0);
    setComment('');
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <Parallax translateY={[20, -20]}>
          <div className="absolute top-20 left-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-red-500/20 blur-[100px]" />
        </Parallax>
        <Parallax translateY={[-20, 20]}>
          <div className="absolute bottom-40 right-[15%] w-[45vw] h-[45vw] rounded-full bg-brand-red-400/20 blur-[120px]" />
        </Parallax>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Parallax translateY={[-20, 20]} opacity={[0.5, 1]}>
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-red-600 to-brand-red-500"
            >
              Student Reviews
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              See what our students say about their experience
            </motion.p>
          </div>
        </Parallax>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <ReviewCard key={review.id} review={review} index={index} />
          ))}
        </div>

        <Parallax translateY={[20, -20]} scale={[0.9, 1]} opacity={[0.8, 1]}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-brand-red-500/10 to-white/20 backdrop-blur-xl" />

              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-red-600 to-brand-red-500">
                  <MessageSquare className="w-6 h-6 text-brand-red-500" />
                  Leave a Review
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          type="button"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`w-8 h-8 ${
                              star <= (hoveredStar || rating)
                                ? 'text-brand-red-500 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Review
                    </label>
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20
                        focus:ring-2 focus:ring-brand-red-500 focus:border-transparent"
                      placeholder="Share your experience..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-brand-red-500 text-white rounded-xl font-bold
                      flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <span className="relative z-10">Submit Review</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                    
                    {/* Button Gradient Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-brand-red-600 to-brand-red-500"
                      animate={{
                        scale: [1, 1.5],
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
};

export default ReviewSystem;