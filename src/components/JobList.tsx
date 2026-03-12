import type { Job } from "../data/jobs";
import JobCard from "./JobCard";
import { Inbox } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <motion.div
        className="flex flex-col items-center justify-center gap-3 py-20 px-8 text-center text-text-muted [&>svg]:opacity-50"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Inbox size={56} strokeWidth={1} />
        <h3 className="text-xl text-text-secondary m-0">No positions found</h3>
        <p className="text-[0.95rem] m-0">
          Try adjusting your filters or search query
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(340px,1fr))] 2xl:grid-cols-3 min-[2500px]:grid-cols-4"
      layout
    >
      <AnimatePresence mode="popLayout">
        {jobs.map((job, i) => (
          <JobCard key={job.id} job={job} index={i} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
