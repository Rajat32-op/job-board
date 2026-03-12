import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { jobs, departments, types } from "./data/jobs";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FilterChips from "./components/FilterChips";
import StatsBar from "./components/StatsBar";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredJobs = useMemo(() => {
    const query = search.toLowerCase().trim();
    return jobs.filter((job) => {
      const matchesDept =
        !selectedDepartment || job.department === selectedDepartment;
      const matchesType = !selectedType || job.type === selectedType;
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.tags.some((t) => t.toLowerCase().includes(query));
      return matchesDept && matchesType && matchesSearch;
    });
  }, [search, selectedDepartment, selectedType]);

  const activeFilterCount = [selectedDepartment, selectedType, search].filter(
    Boolean
  ).length;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Ambient background blobs */}
      <div
        className="blob fixed rounded-full blur-[120px] opacity-40 pointer-events-none z-0 will-change-transform animate-float w-[600px] h-[600px] bg-accent -top-[200px] -left-[150px] max-sm:w-[300px] max-sm:h-[300px] max-sm:opacity-25"
        style={{ animationDuration: "22s" }}
        aria-hidden="true"
      />
      <div
        className="blob fixed rounded-full blur-[120px] opacity-40 pointer-events-none z-0 will-change-transform animate-float w-[500px] h-[500px] bg-sky-accent top-[40%] -right-[200px] max-sm:w-[250px] max-sm:h-[250px] max-sm:opacity-25"
        style={{ animationDuration: "26s", animationDelay: "-5s" }}
        aria-hidden="true"
      />
      <div
        className="blob fixed rounded-full blur-[120px] opacity-40 pointer-events-none z-0 will-change-transform animate-float w-[400px] h-[400px] bg-emerald-accent -bottom-[100px] left-[30%] max-sm:w-[200px] max-sm:h-[200px] max-sm:opacity-25"
        style={{ animationDuration: "30s", animationDelay: "-10s" }}
        aria-hidden="true"
      />

      <Header />

      <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-16 max-sm:px-4 max-sm:pb-12 min-[2500px]:max-w-[2200px]">
        <motion.section
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:gap-6 md:flex-row md:flex-wrap">
            <FilterChips
              label="Department"
              options={departments}
              selected={selectedDepartment}
              onSelect={setSelectedDepartment}
            />
            <FilterChips
              label="Role Type"
              options={types}
              selected={selectedType}
              onSelect={setSelectedType}
            />
          </div>
          <AnimatePresence>
            {activeFilterCount > 0 && (
              <motion.button
                className="mt-3 px-4 py-1.5 text-[0.82rem] font-medium text-rose-accent bg-rose-soft border border-rose-accent/20 rounded-full cursor-pointer transition-all duration-150 hover:bg-rose-accent/20 hover:border-rose-accent"
                onClick={() => {
                  setSearch("");
                  setSelectedDepartment(null);
                  setSelectedType(null);
                }}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.25 }}
              >
                Clear all filters
              </motion.button>
            )}
          </AnimatePresence>
        </motion.section>

        <StatsBar
          total={jobs.length}
          filtered={filteredJobs.length}
          jobs={filteredJobs}
        />

        <JobList jobs={filteredJobs} />
      </main>

      <motion.footer
        className="relative z-10 text-center py-8 px-4 text-text-muted text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>
          Built with <span className="text-rose-accent">♥</span> — TalentHub ©
          2026
        </p>
      </motion.footer>
    </div>
  );
}

export default App;
