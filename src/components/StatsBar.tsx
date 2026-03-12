import { Briefcase, Filter } from "lucide-react";
import { motion } from "framer-motion";
import type { Job } from "../data/jobs";

interface StatsBarProps {
  total: number;
  filtered: number;
  jobs: Job[];
}

export default function StatsBar({ total, filtered, jobs }: StatsBarProps) {
  const deptCounts = jobs.reduce<Record<string, number>>((acc, job) => {
    acc[job.department] = (acc[job.department] || 0) + 1;
    return acc;
  }, {});

  const topDept = Object.entries(deptCounts).sort((a, b) => b[1] - a[1])[0];

  return (
    <motion.div
      className="flex flex-wrap gap-5 px-5 py-4 mb-6 bg-glass border border-glass-border rounded-[14px] backdrop-blur-[12px] max-sm:flex-col max-sm:gap-2"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.45, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2 text-sm text-text-secondary [&>svg]:text-accent [&_strong]:text-text-primary">
        <Briefcase size={18} />
        <span>
          <strong>{total}</strong> open roles
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-text-secondary [&>svg]:text-accent [&_strong]:text-text-primary">
        <Filter size={18} />
        <span>
          <strong>{filtered}</strong> shown
        </span>
      </div>
      {topDept && (
        <div className="flex items-center gap-2 text-sm text-text-secondary ml-auto max-sm:ml-0 [&_strong]:text-sky-accent">
          <span>
            Most hiring: <strong>{topDept[0]}</strong>
          </span>
        </div>
      )}
    </motion.div>
  );
}
