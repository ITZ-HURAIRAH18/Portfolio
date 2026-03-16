import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experience = [
  {
    company: "Nexagen Solutions",
    role: "Full Stack Developer",
    period: "Aug 2022 - Oct 2025",
    description:
      "Developed and maintained high-performance web applications using the MERN stack, ensuring smooth frontend and backend integration. Built RESTful APIs and optimized database queries for scalability.",
  },
  {
    company: "Technsol",
    role: "Django Developer",
    period: "Aug 2024 - Jan 2025",
    description:
      "Built and optimized modern web applications using Django REST Framework, React, Next.js, and Tailwind CSS. Focused on clean architecture and performance optimization.",
  },
  {
    company: "Independent Projects",
    role: "Full Stack / Mobile / Desktop Developer",
    period: "2023 - Present",
    description:
      "Architected and developed multiple cross-platform applications including web apps, mobile apps (React Native), desktop applications (Electron.js), financial platforms, AI-powered tools, and management systems. Focus on scalability, user experience, and clean code practices.",
  }
];

export function Experience() {
  return (
    <div className="container py-24 md:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-slate-900/30 dark:border dark:border-white/6 bg-blue-50 border border-blue-200">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-xs font-medium text-primary tracking-widest">EXPERIENCE</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">
          Career Path
        </h2>

        <p className="text-base dark:text-white text-slate-600 max-w-2xl font-sans">
          Full-stack engineer building scalable systems across web, mobile, and desktop platforms.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-2xl mx-auto space-y-6">
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline dot and connector */}
            <div className="absolute left-0 top-0 flex flex-col items-center h-full">
              <motion.div 
                whileHover={{ scale: 1.25 }}
                className="w-3 h-3 rounded-full bg-primary border-2 border-background relative z-10 shadow-lg shadow-primary/30" 
              />
              {index < experience.length - 1 && (
                <div className="w-px h-24 bg-gradient-to-b from-primary/30 to-transparent mt-3" />
              )}
            </div>

            {/* Experience Card */}
            <div className="ml-8">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="dark:bg-slate-900/30 dark:border dark:border-white/10 dark:rounded-2xl dark:hover:border-white/20 bg-white border border-blue-300 hover:border-blue-400 rounded-2xl overflow-hidden transition-all group hover:shadow-md dark:hover:shadow-none"
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-6 py-3 dark:border-white/8 dark:bg-slate-800/50 border-slate-200 border-b bg-slate-50">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
                  </div>
                  <span className="text-xs font-mono dark:text-white text-slate-500 ml-2">experience/{job.company.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="p-3 dark:bg-slate-900/40 dark:border-white/60 dark:group-hover:border-white/80 bg-blue-50 border border-blue-200 group-hover:border-blue-300 rounded-lg transition-all"
                    >
                      <Briefcase className="w-4 h-4 text-primary dark:text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold dark:text-white text-slate-900">
                        {job.role}
                      </h3>
                      <p className="text-sm dark:text-white text-slate-600 font-sans mt-1">{job.company}</p>
                      
                      {/* Period */}
                      <div className="flex items-center gap-2 mt-3 text-xs text-primary dark:text-white font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm dark:text-white text-slate-700 leading-relaxed font-sans dark:border-white/20 border-slate-200 border-t pt-4">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
