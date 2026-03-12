import { motion } from "framer-motion";

interface FilterChipsProps {
  label: string;
  options: string[];
  selected: string | null;
  onSelect: (value: string | null) => void;
}

const chipBase =
  "px-4 py-1.5 text-sm font-medium font-sans whitespace-nowrap rounded-full border cursor-pointer backdrop-blur-sm transition-all duration-150";
const chipIdle =
  "text-text-secondary bg-glass border-glass-border hover:bg-glass-hover hover:border-glass-border-hover hover:text-text-primary";
const chipActive =
  "text-accent bg-accent-soft border-accent shadow-[0_0_12px_rgba(20,184,166,0.15)]";

export default function FilterChips({
  label,
  options,
  selected,
  onSelect,
}: FilterChipsProps) {
  return (
    <div className="flex items-start gap-3 flex-wrap max-sm:flex-col max-sm:gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-300 pt-[0.45rem] min-w-[90px] shrink-0 max-sm:min-w-0 max-sm:pt-0 lg:min-w-auto">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        <motion.button
          className={`${chipBase} ${selected === null ? chipActive : chipIdle}`}
          onClick={() => onSelect(null)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout
        >
          All
        </motion.button>
        {options.map((opt) => (
          <motion.button
            key={opt}
            className={`${chipBase} ${selected === opt ? chipActive : chipIdle}`}
            onClick={() => onSelect(selected === opt ? null : opt)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            layout
          >
            {opt}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
