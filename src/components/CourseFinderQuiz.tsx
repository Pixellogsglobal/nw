import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, GraduationCap, BrainCircuit, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "What's your primary area of academic interest?",
    options: ["Science & Technology", "Business & Economics", "Arts & Humanities", "Health & Medicine"]
  },
  {
    id: 2,
    text: "What's your preferred learning style?",
    options: ["Visual Learning", "Practical/Hands-on", "Reading/Writing", "Group Discussion"]
  },
  {
    id: 3,
    text: "What are your career goals?",
    options: ["Research & Academia", "Industry Professional", "Entrepreneurship", "Public Service"]
  }
];

const CourseFinderQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [direction, setDirection] = useState(0);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setDirection(1);
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setDirection(-1);
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(220,38,38,0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(220,38,38,0.2) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Course</h2>
          <p className="text-xl text-gray-600">
            Answer a few questions to get personalized course recommendations
          </p>
        </motion.div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            {!showResults ? (
              <motion.div
                key={currentQuestion}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="absolute w-full"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  {/* Glass Background */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))',
                        'linear-gradient(135deg, rgba(220,38,38,0.1), rgba(255,255,255,0.1))'
                      ],
                      backdropFilter: 'blur(10px)'
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  />

                  <div className="relative p-8">
                    <h3 className="text-2xl font-bold mb-8">
                      {questions[currentQuestion].text}
                    </h3>

                    <div className="grid gap-4">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={option}
                          whileHover={{ scale: 1.02, x: 10 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(option)}
                          className="relative overflow-hidden rounded-xl p-6 text-left group
                            bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-sm
                            border border-white/20 hover:border-brand-red-500/50"
                        >
                          <motion.div
                            className="absolute inset-0 bg-brand-red-500 opacity-0 group-hover:opacity-10
                              transition-opacity duration-300"
                          />
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-brand-red-500/10 group-hover:bg-brand-red-500/20">
                              {index === 0 ? <Book className="w-6 h-6 text-brand-red-500" /> :
                               index === 1 ? <GraduationCap className="w-6 h-6 text-brand-red-500" /> :
                               index === 2 ? <BrainCircuit className="w-6 h-6 text-brand-red-500" /> :
                               <CheckCircle className="w-6 h-6 text-brand-red-500" />}
                            </div>
                            <span className="font-medium text-lg">{option}</span>
                          </div>
                        </motion.button>
                      ))}
                    </div>

                    {currentQuestion > 0 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={goBack}
                        className="mt-8 flex items-center gap-2 text-gray-600 hover:text-brand-red-500"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Previous Question
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(220,38,38,0.1), rgba(255,255,255,0.1))',
                      'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(220,38,38,0.1))'
                    ],
                    backdropFilter: 'blur(10px)'
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />

                <div className="relative p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-red-500/10
                      flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-brand-red-500" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-4">Your Perfect Match!</h3>
                  <p className="text-gray-600 mb-8">
                    Based on your answers, we recommend exploring courses in:
                  </p>

                  <div className="space-y-4">
                    {answers.map((answer, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-4 rounded-xl bg-white/50 backdrop-blur-sm"
                      >
                        <p className="font-medium">{answer}</p>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentQuestion(0);
                      setAnswers([]);
                      setShowResults(false);
                    }}
                    className="mt-8 px-8 py-3 bg-brand-red-500 text-white rounded-xl
                      flex items-center gap-2 mx-auto"
                  >
                    Start Over
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CourseFinderQuiz;