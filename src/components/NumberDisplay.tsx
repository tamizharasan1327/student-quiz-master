import { motion, AnimatePresence } from "framer-motion";

interface NumberDisplayProps {
  number: number | null;
  isAnimating: boolean;
}

const NumberDisplay = ({ number, isAnimating }: NumberDisplayProps) => {
  return (
    <div className="relative flex items-center justify-center w-48 h-48 mx-auto mb-8">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-number/20 to-number/5 number-glow animate-pulse-glow" />
      <AnimatePresence mode="wait">
        {number !== null && (
          <motion.div
            key={number}
            initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
            animate={{ 
              scale: isAnimating ? [1, 1.1, 1] : 1, 
              opacity: 1, 
              rotate: 0 
            }}
            exit={{ scale: 0.5, opacity: 0, rotate: 10 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="relative z-10 flex items-center justify-center w-40 h-40 rounded-full bg-gradient-to-br from-number to-number-glow shadow-2xl"
          >
            <span className="text-6xl font-bold font-heading text-accent-foreground">
              {number}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {number === null && (
        <div className="relative z-10 flex items-center justify-center w-40 h-40 rounded-full bg-muted border-4 border-dashed border-muted-foreground/30">
          <span className="text-2xl font-medium text-muted-foreground">?</span>
        </div>
      )}
    </div>
  );
};

export default NumberDisplay;
