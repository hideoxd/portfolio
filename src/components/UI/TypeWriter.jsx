import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypeWriter({ words, className = '' }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentWord.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={`typewriter ${className}`}>
      <span className="typewriter__text">{currentText}</span>
      <motion.span
        className="typewriter__cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>

      <style>{`
        .typewriter {
          display: inline-flex;
          align-items: center;
        }
        
        .typewriter__text {
          color: white;
        }
        
        .typewriter__cursor {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
          margin-left: 2px;
        }
      `}</style>
    </span>
  );
}
