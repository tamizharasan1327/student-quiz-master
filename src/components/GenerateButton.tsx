import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shuffle, RotateCcw } from "lucide-react";

interface GenerateButtonProps {
  onClick: () => void;
  onReset: () => void;
  disabled: boolean;
  allUsed: boolean;
}

const GenerateButton = ({ onClick, onReset, disabled, allUsed }: GenerateButtonProps) => {
  if (allUsed) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <p className="text-muted-foreground text-center">
          All questions have been used! 🎉
        </p>
        <Button
          onClick={onReset}
          size="lg"
          className="h-14 px-8 text-lg font-heading bg-secondary text-secondary-foreground hover:bg-secondary/80"
        >
          <RotateCcw className="mr-2 h-5 w-5" />
          Start Over
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={onClick}
        disabled={disabled}
        size="lg"
        className="h-16 px-10 text-xl font-heading bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Shuffle className="mr-3 h-6 w-6" />
        Generate Random Number
      </Button>
    </motion.div>
  );
};

export default GenerateButton;
