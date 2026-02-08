import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import NumberDisplay from "@/components/NumberDisplay";
import GenerateButton from "@/components/GenerateButton";
import HistorySection from "@/components/HistorySection";
import QuestionDialog from "@/components/QuestionDialog";
import { getStudentByNumber } from "@/data/students";
import { getQuestionById, questions } from "@/data/questions";

const Index = () => {
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const availableNumbers = questions
    .map(q => q.id)
    .filter(num => !history.includes(num));

  const generateRandomNumber = useCallback(() => {
    if (availableNumbers.length === 0) return;

    setIsAnimating(true);

    // Animate through random numbers
    let iterations = 0;
    const maxIterations = 15;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      setCurrentNumber(availableNumbers[randomIndex]);
      iterations++;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * availableNumbers.length);
        const finalNumber = availableNumbers[finalIndex];
        setCurrentNumber(finalNumber);
        setHistory(prev => [...prev, finalNumber]);
        setIsAnimating(false);
        
        // Open dialog after animation
        setTimeout(() => {
          setDialogOpen(true);
        }, 500);
      }
    }, 80);
  }, [availableNumbers]);

  const resetGame = useCallback(() => {
    setCurrentNumber(null);
    setHistory([]);
    setDialogOpen(false);
  }, []);

  const currentStudent = currentNumber ? getStudentByNumber(currentNumber) : null;
  const currentQuestion = currentNumber ? getQuestionById(currentNumber) : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="py-6 px-4 border-b border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Classroom Quiz
          </h1>
          <p className="text-muted-foreground mt-2">
            PCA in Information Retrieval
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-4xl mx-auto text-center"
        >
          {/* Number Display */}
          <NumberDisplay number={currentNumber} isAnimating={isAnimating} />

          {/* Student Name Display */}
          {currentStudent && !isAnimating && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <p className="text-lg text-muted-foreground">Selected Student</p>
              <p className="text-2xl font-heading font-semibold text-foreground mt-1">
                {currentStudent.name}
              </p>
            </motion.div>
          )}

          {/* Generate Button */}
          <GenerateButton
            onClick={generateRandomNumber}
            onReset={resetGame}
            disabled={isAnimating}
            allUsed={availableNumbers.length === 0}
          />

          {/* Remaining Count */}
          {availableNumbers.length > 0 && availableNumbers.length < 50 && (
            <p className="mt-4 text-sm text-muted-foreground">
              {availableNumbers.length} questions remaining
            </p>
          )}

          {/* History Section */}
          <HistorySection history={history} />
        </motion.div>
      </main>

      {/* Question Dialog */}
      <QuestionDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        studentName={currentStudent?.name || ""}
        studentNumber={currentNumber || 0}
        question={currentQuestion || null}
      />

      {/* Footer */}
      <footer className="py-4 px-4 border-t border-border/50">
        <p className="text-center text-sm text-muted-foreground">
          Click the button to randomly select a student and their question
        </p>
      </footer>
    </div>
  );
};

export default Index;
