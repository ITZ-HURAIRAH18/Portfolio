import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ChevronUp } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear();
  const topProjects = [
    { name: "FinScope", live: "https://finscope-hub.vercel.app/" },
    { name: "HireLens", live: "https://hire-lensz.vercel.app/" },
    { name: "DonorHub", live: "https://donor-hub-eta.vercel.app/" },
  ];
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative dark:bg-black bg-white dark:border-white/10 border-slate-200 border-t">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:pt-20 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Col 1: Brand & Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-3"
          >
            <div className="font-bold text-xl dark:text-white text-slate-900 tracking-tight">
              Muhammad Abu Hurairah
            </div>
            <p className="text-[10px] font-semibold text-primary tracking-wide uppercase">Full-Stack Engineer</p>
            <p className="text-xs dark:text-slate-400 text-slate-600 leading-relaxed font-sans">
              Full-stack engineer building high-performance systems with clean architecture.
            </p>
          </motion.div>

          {/* Col 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-3"
          >
            <h4 className="text-[10px] font-bold text-slate-500 dark:text-slate-500 tracking-[0.2em] uppercase">Navigation</h4>
            <div className="flex flex-col space-y-2.5">
              {["Home", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 2 }}
                  className="text-xs text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white font-sans transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 3: Latest Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-3"
          >
            <h4 className="text-[10px] font-bold text-slate-500 dark:text-slate-500 tracking-[0.2em] uppercase">Featured</h4>
            <div className="flex flex-col space-y-2.5">
              {topProjects.map((project) => (
                <motion.a
                  key={project.name}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="text-xs text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white font-sans transition-colors duration-300"
                >
                  {project.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Col 4: Social Links with Labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-3"
          >
            <h4 className="text-[10px] font-bold text-slate-500 dark:text-slate-500 tracking-[0.2em] uppercase">Connect</h4>
            <div className="flex flex-col space-y-2.5">
              {[
                { icon: Github, href: "https://github.com/ITZ-HURAIRAH18", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/itzhurairah18/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:hurairahumawais@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white font-sans transition-colors duration-300"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Divider */}
        <div className="h-px bg-slate-200 dark:bg-white/5 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Copyright */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-slate-500 dark:text-slate-500 font-sans">
              © {currentYear} Muhammad Abu Hurairah. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-400 dark:text-slate-600 font-sans tracking-wide">
              Built with React &amp; Tailwind CSS
            </p>
          </div>

          {/* Center: Status/Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xs text-primary/70 dark:text-primary/60 font-semibold font-sans"
          >
            Status: Available for opportunities
          </motion.p>

          {/* Right: Back to Top Button */}
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            onClick={scrollToTop}
            className="p-2 dark:bg-black/40 dark:border dark:border-white/10 dark:hover:border-white/20 dark:hover:bg-black/60 bg-slate-100 border border-slate-300 hover:bg-slate-200 rounded-lg transition-all duration-300"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4 text-primary dark:text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
