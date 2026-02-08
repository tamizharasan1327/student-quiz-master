import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Eye, X } from "lucide-react";
import { Question } from "@/data/questions";

interface QuestionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  studentName: string;
  studentNumber: number;
  question: Question | null;
}

const QuestionDialog = ({
  open,
  onOpenChange,
  studentName,
  studentNumber,
  question,
}: QuestionDialogProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClose = () => {
    setShowAnswer(false);
    onOpenChange(false);
  };

  if (!question) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl dialog-shadow border-0 bg-card p-0 overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-primary-foreground">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xl font-bold">
                  {studentNumber}
                </div>
                <div>
                  <DialogTitle className="text-xl font-heading text-primary-foreground">
                    Question for {studentName}
                  </DialogTitle>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    Question #{question.id}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-primary-foreground hover:bg-primary-foreground/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <p className="text-lg font-medium text-foreground leading-relaxed">
              {question.question}
            </p>

            <div className="grid gap-3">
              {question.options.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    showAnswer && option === question.correctAnswer
                      ? "border-success bg-success/10"
                      : "border-border bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground">
                      {String.fromCharCode(97 + index)}
                    </span>
                    <span className="flex-1 text-foreground">{option}</span>
                    {showAnswer && option === question.correctAnswer && (
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {!showAnswer ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Button
                  onClick={() => setShowAnswer(true)}
                  className="w-full h-12 text-base font-medium bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  Show Answer
                </Button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-success/10 border-2 border-success"
              >
                <div className="flex items-center gap-2 text-success font-medium">
                  <CheckCircle2 className="h-5 w-5" />
                  Correct Answer
                </div>
                <p className="mt-2 text-foreground font-medium">
                  {question.correctAnswer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionDialog;
