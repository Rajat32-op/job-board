import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <motion.div
      className="relative mb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
    >
      <Search
        className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
        size={20}
      />
      <input
        type="text"
        className="w-full py-3.5 pr-11 pl-12  font-sans text-primary bg-glass border border-glass-border rounded-[20px] backdrop-blur-[16px] outline-none transition-all duration-150 placeholder:text-gray-300 focus:border-accent focus:shadow-[0_0_0_3px_rgba(20,184,166,0.15)] focus:bg-glass-hover"
        placeholder="Search roles, teams, or keywords…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <AnimatePresence>
        {value && (
          <motion.button
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 border-none text-text-secondary text-lg w-7 h-7 rounded-full cursor-pointer flex items-center justify-center transition-colors duration-150 hover:bg-white/[0.18] hover:text-text-primary"
            onClick={() => onChange("")}
            aria-label="Clear search"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.15 }}
          >
            ×
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
