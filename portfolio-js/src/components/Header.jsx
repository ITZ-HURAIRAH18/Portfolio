import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Code2, Sparkles } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      {/* Animated gradient border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 animate-pulse" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container flex h-16 max-w-screen-2xl items-center relative">
        <div className="mr-4 hidden md:flex">
          <a href="#home" className="mr-8 flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Code2 className="h-6 w-6 text-purple-500" />
              <Sparkles className="h-3 w-3 text-pink-500 absolute -top-1 -right-1 animate-pulse" />
            </motion.div>
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-[length:200%_auto] animate-gradient-x">
              M Abu Hurairah
            </span>
          </a>
          <nav className="flex items-center gap-8 text-sm font-medium">
            {["Skills", "Projects", "Experience", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative transition-colors hover:text-foreground text-foreground/70 group"
              >
                <span className="relative z-10">{item}</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full rounded-full"
                  whileHover={{ boxShadow: "0 0 8px rgba(168, 85, 247, 0.6)" }}
                />
              </motion.a>
            ))}
          </nav>
        </div>
        
        {/* Mobile menu - Portfolio text */}
        <div className="flex md:hidden">
          <a href="#home" className="flex items-center space-x-2 group">
            <Code2 className="h-5 w-5 text-purple-500" />
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Portfolio
            </span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <motion.nav 
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ModeToggle />
          </motion.nav>
        </div>
      </div>
    </header>
  )
}
