import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-8 md:py-5 overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      {/* Animated gradient border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70 animate-pulse" />
      
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
          className="absolute bottom-0 left-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-1/4 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative flex flex-col items-center justify-center gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground flex items-center gap-2">
          <motion.span
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="h-4 w-4 text-purple-500" />
          </motion.span>
          &copy; {new Date().getFullYear()} <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 font-bold">Abu Hurairah</span>. All rights reserved.
          <motion.span
            animate={{
              rotate: [0, -180, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="h-4 w-4 text-pink-500" />
          </motion.span>
        </p>
      </div>
    </footer>
  )
}
