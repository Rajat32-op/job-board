import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="relative z-10 px-6 pt-10 pb-6 text-center max-sm:px-4 max-sm:pt-6 max-sm:pb-4">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          className="inline-flex items-center gap-3 mb-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-linear-to-br from-accent to-sky-accent text-white shadow-[0_0_40px_rgba(20,184,166,0.35)] max-sm:w-10 max-sm:h-10"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles size={24} />
          </motion.div>
          <span className="text-[1.75rem] font-extrabold tracking-tight text-text-primary max-sm:text-xl">
            Talent
            <span className="bg-linear-to-br from-accent to-sky-accent bg-clip-text text-transparent">
              Hub
            </span>
          </span>
        </motion.div>
        <motion.p
          className="text-text-secondary text-[1.05rem] mt-1 max-sm:text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          Discover your next career move
        </motion.p>
      </div>
    </header>
  );
}
