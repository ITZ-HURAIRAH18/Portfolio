import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code2 } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-4 pt-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="dark:bg-slate-900/30 dark:border dark:border-white/60 bg-white border border-slate-200 rounded-2xl backdrop-blur-xl px-6 py-3"
      >
        <div className="flex h-auto max-w-screen-2xl items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#home" className="group flex items-center gap-2 font-semibold text-sm tracking-wide">
              <Code2 className="h-5 w-5 text-primary transition-all group-hover:scale-110" />
              <span className="dark:text-white text-slate-900 transition-colors group-hover:text-primary font-sans">MAH<span className="text-primary font-mono">.Eng</span></span>
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {["Skills", "Projects", "Experience", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-3.5 py-1.5 text-xs font-medium dark:text-white dark:hover:text-white dark:hover:bg-slate-900/60 text-slate-600 hover:text-slate-900 hover:bg-blue-50 transition-all duration-200 rounded-lg"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    </header>
  )
}
