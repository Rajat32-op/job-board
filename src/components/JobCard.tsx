import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Job } from "../data/jobs";
import Badge from "./Badge";

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  return (
    <motion.article
      className="relative flex flex-col p-6 bg-glass border border-glass-border rounded-[20px] backdrop-blur-[16px] transition-[border-color,box-shadow,background] duration-250 cursor-default hover:border-glass-border-hover hover:shadow-[0_8px_40px_rgba(0,0,0,0.45)] hover:bg-glass-hover max-sm:p-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      layout
      whileHover={{ y: -6 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3.5">
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-linear-to-br from-accent-soft to-sky-soft text-accent shrink-0">
          <Briefcase size={22} />
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="department">{job.department}</Badge>
          <span className="flex items-center gap-1 text-[0.78rem] text-text-muted whitespace-nowrap">
            <Clock size={13} />
            {job.posted}
          </span>
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="text-[1.15rem] font-bold text-text-primary mb-2 leading-tight max-sm:text-base">
        {job.title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary mb-4 grow line-clamp-3">
        {job.description}
      </p>

      {/* Details */}
      <div className="flex flex-wrap gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-secondary [&>svg]:text-text-muted [&>svg]:shrink-0">
          <MapPin size={15} />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-secondary [&>svg]:text-text-muted [&>svg]:shrink-0">
          <Briefcase size={15} />
          {job.type}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[0.82rem] text-text-secondary [&>svg]:text-text-muted [&>svg]:shrink-0">
          <DollarSign size={15} />
          {job.salary}
        </span>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 mt-auto pt-4 border-t border-glass-border max-sm:flex-col max-sm:items-start">
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
        <motion.button
          className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-linear-to-br from-accent to-teal-700 border-none rounded-full cursor-pointer whitespace-nowrap shrink-0 hover:shadow-[0_0_40px_rgba(20,184,166,0.35)]"
          aria-label={`Apply for ${job.title}`}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply
          <ArrowUpRight size={16} />
        </motion.button>
      </div>
    </motion.article>
  );
}
