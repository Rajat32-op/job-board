export interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  tags: string[];
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$150k – $200k",
    posted: "2 days ago",
    description:
      "Build next-generation user interfaces with React and TypeScript. Lead architectural decisions for our design system.",
    tags: ["React", "TypeScript", "Design Systems"],
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$120k – $160k",
    posted: "5 days ago",
    description:
      "Shape the future of our product experience. Work closely with engineers and PMs to ship pixel-perfect interfaces.",
    tags: ["Figma", "UX Research", "Prototyping"],
  },
  {
    id: 3,
    title: "Backend Engineer",
    department: "Engineering",
    location: "New York, NY",
    type: "Full-time",
    salary: "$140k – $190k",
    posted: "1 day ago",
    description:
      "Design and build scalable APIs and microservices. Optimize database queries and ensure system reliability.",
    tags: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 4,
    title: "Data Analyst",
    department: "Data",
    location: "Austin, TX",
    type: "Contract",
    salary: "$90k – $120k",
    posted: "3 days ago",
    description:
      "Transform raw data into actionable insights. Build dashboards and reports to drive business decisions.",
    tags: ["SQL", "Python", "Tableau"],
  },
  {
    id: 5,
    title: "Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$100k – $140k",
    posted: "1 week ago",
    description:
      "Drive our go-to-market strategy and campaign execution. Lead a team of content creators and growth specialists.",
    tags: ["Growth", "SEO", "Content Strategy"],
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$145k – $195k",
    posted: "4 days ago",
    description:
      "Build and maintain CI/CD pipelines, manage cloud infrastructure, and improve developer experience.",
    tags: ["Kubernetes", "Terraform", "CI/CD"],
  },
  {
    id: 7,
    title: "UX Researcher",
    department: "Design",
    location: "Chicago, IL",
    type: "Part-time",
    salary: "$70k – $95k",
    posted: "6 days ago",
    description:
      "Conduct user research studies, synthesize findings, and champion user-centric decisions across teams.",
    tags: ["User Testing", "Surveys", "Analytics"],
  },
  {
    id: 8,
    title: "Machine Learning Engineer",
    department: "Data",
    location: "Remote",
    type: "Full-time",
    salary: "$160k – $220k",
    posted: "Just now",
    description:
      "Develop and deploy ML models at scale. Work on NLP, recommendation systems, and predictive analytics.",
    tags: ["Python", "TensorFlow", "MLOps"],
  },
  {
    id: 9,
    title: "Technical Writer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    salary: "$80k – $110k",
    posted: "2 days ago",
    description:
      "Create clear, concise documentation for APIs, SDKs, and developer tools. Collaborate with engineering teams.",
    tags: ["Documentation", "API Docs", "Markdown"],
  },
  {
    id: 10,
    title: "Sales Development Rep",
    department: "Sales",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$60k – $90k + Commission",
    posted: "3 days ago",
    description:
      "Generate and qualify leads through outbound prospecting. Build relationships with potential enterprise clients.",
    tags: ["Outbound", "CRM", "B2B"],
  },
  {
    id: 11,
    title: "iOS Developer",
    department: "Engineering",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$135k – $180k",
    posted: "5 days ago",
    description:
      "Build beautiful, performant mobile apps with Swift and SwiftUI. Ship features used by millions of users.",
    tags: ["Swift", "SwiftUI", "iOS"],
  },
  {
    id: 12,
    title: "Content Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Part-time",
    salary: "$55k – $80k",
    posted: "1 week ago",
    description:
      "Develop editorial calendars, create compelling content, and optimize our brand voice across all channels.",
    tags: ["Copywriting", "Brand", "Social Media"],
  },
];

export const departments = [...new Set(jobs.map((j) => j.department))];
export const types = [...new Set(jobs.map((j) => j.type))];
export const locations = [...new Set(jobs.map((j) => j.location))];
