import { motion } from "framer-motion";
import { getStudentByNumber } from "@/data/students";

interface HistorySectionProps {
  history: number[];
}

const HistorySection = ({ history }: HistorySectionProps) => {
  if (history.length === 0) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">
        Previously Called ({history.length}/50)
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {history.map((num, index) => {
          const student = getStudentByNumber(num);
          return (
            <motion.div
              key={`${num}-${index}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.02 }}
              className="group relative"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-sm font-medium text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                {num}
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {student?.name || `Student ${num}`}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HistorySection;
