import { motion } from "framer-motion"
import { Code, Settings, Database, Braces, Wrench, Sparkles, Smartphone } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS"],
    Icon: Code,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Django", "FastAPI", "Express", "Laravel"],
    Icon: Settings,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"],
    Icon: Database,
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "C++", "TypeScript", "PHP"],
    Icon: Braces,
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "GitHub"],
    Icon: Wrench,
    colSpan: "col-span-1 md:col-span-1",
  },
  {
    category: "AI & Advanced",
    skills: ["LangChain", "AI Agents", "Gemini API", "RAG", "LLM Integration"],
    Icon: Sparkles,
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    category: "Mobile & Desktop",
    skills: ["React Native", "Electron.js", "Native APIs", "Cross-Platform"],
    Icon: Smartphone,
    colSpan: "col-span-1 md:col-span-2",
  },
]

export function Skills() {
  return (
    <div className="py-24 md:py-32 relative">
      {/* Dot Matrix Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle, #3B82F6 1px, transparent 1px)",
        backgroundSize: "20px 20px"
      }} />
      
      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-slate-900/30 dark:border dark:border-white/6 bg-blue-50 border border-blue-200">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-xs font-medium text-primary tracking-widest">TECH STACK</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">
              Skills & Experience
            </h2>
            
            <p className="text-base dark:text-gray-400 text-slate-600 max-w-2xl font-sans">
              Production-grade technologies across frontend, backend, databases, and infrastructure
            </p>
          </motion.div>

          {/* Dynamic Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {skillCategories.map((item, index) => {
              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ y: -6, scale: 1.03 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer relative"
                >
                  {/* Border Beam Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" style={{
                    animation: "borderBeam 2s infinite",
                  }}></div>
                  
                  <div className="relative h-full p-6 dark:bg-slate-900/30 bg-white dark:border dark:border-white/10 border border-slate-100 hover:border-blue-200 dark:hover:border-white/20 rounded-3xl transition-all duration-300 shadow-lg dark:shadow-lg hover:shadow-xl dark:hover:shadow-primary/20 overflow-hidden">
                    <div className="space-y-4">
                      {/* Category Header with Glassmorphism */}
                      <div className="space-y-3 backdrop-blur-sm">
                        <p className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase">{item.category}</p>
                        <motion.div 
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/20 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/30 dark:group-hover:shadow-primary/40 transition-all">
                          <item.Icon className="w-6 h-6 text-primary dark:text-white group-hover:scale-130 transition-transform" />
                        </motion.div>
                      </div>
                      
                      {/* Skills Tags - Glass Pills */}
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.12, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex px-3 py-1.5 text-xs font-semibold dark:border-white/40 dark:bg-white/10 dark:backdrop-blur-md dark:text-white dark:hover:bg-white/20 dark:hover:border-white/60 border border-blue-300/50 bg-blue-500/10 backdrop-blur-sm text-primary hover:bg-blue-500/20 hover:border-blue-400 rounded-full transition-all duration-200 cursor-pointer"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        {/* All Technologies - Premium Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="pt-16 mt-12 dark:border-white/12 border-blue-300 border-t"
        >
          <div className="flex flex-col items-center text-center space-y-8 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-slate-900/30 dark:border dark:border-white/6 bg-blue-50 border border-blue-200">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-xs font-medium text-primary tracking-widest">TECH ARSENAL</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
              Complete Technology Stack
            </h3>
            <p className="text-sm dark:text-gray-400 text-slate-600 max-w-xl">
              Full range of tools and frameworks powering modern applications
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4 overflow-visible px-4">
            {[{ name: "React", icon: "react" }, { name: "Next.js", icon: "nextjs" }, { name: "Vue.js", icon: "vue" }, { name: "Tailwind", icon: "tailwindcss" }, { name: "JavaScript", icon: "javascript" }, { name: "TypeScript", icon: "typescript" }, { name: "Node.js", icon: "nodejs" }, { name: "Express", icon: "express" }, { name: "Python", icon: "python" }, { name: "Django", icon: "django" }, { name: "FastAPI", icon: "fastapi" }, { name: "Laravel", icon: "laravel" }, { name: "PHP", icon: "php" }, { name: "C++", icon: "cpp" }, { name: "MongoDB", icon: "mongodb" }, { name: "PostgreSQL", icon: "postgresql" }, { name: "Redis", icon: "redis" }, { name: "Firebase", icon: "firebase" }, { name: "HTML", icon: "html" }, { name: "CSS", icon: "css" }, { name: "Git", icon: "git" }, { name: "GitHub", icon: "github" }, { name: "Docker", icon: "docker" }, { name: "Bootstrap", icon: "bootstrap" }, { name: "Electron", icon: "electron" }].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ y: -8, scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                className="group relative overflow-visible"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur" />
                <div className="relative aspect-square flex flex-col items-center justify-center p-3 dark:bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/50 bg-gradient-to-br from-blue-50/50 to-white/50 dark:border dark:border-white/10 border border-blue-200/50 hover:border-blue-400/50 dark:hover:border-white/20 rounded-2xl dark:hover:shadow-lg dark:hover:shadow-primary/20 hover:shadow-md transition-all duration-300 backdrop-blur-sm">
                  <img
                    src={`https://skillicons.dev/icons?i=${tech.icon}`}
                    alt={tech.name}
                    width="40"
                    height="40"
                    className={`transition-transform group-hover:scale-125 object-contain drop-shadow-sm ${tech.useFilter ? "filter hue-rotate-300 saturate-200 brightness-110" : ""}`}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 dark:bg-slate-900 dark:text-white dark:border dark:border-white/20 bg-slate-800 text-white border border-slate-700 text-xs font-semibold whitespace-nowrap rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-lg">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  )
}
