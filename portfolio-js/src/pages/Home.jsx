import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import profileImage from "@/assets/profile.jpeg"
import CV from "@/assets/CV.pdf"
import Typewriter from 'typewriter-effect'
import { firePremiumConfetti } from "@/lib/fireConfetti"

export function Home() {
  const handleDownloadCV = () => {
    console.log('CV download triggered');
    const link = document.createElement('a')
    link.href = CV
    link.download = 'M Abu Hurairah CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    console.log('Triggering premium confetti...');
    firePremiumConfetti()
  }

  const techStack = ['React', 'Node.js', 'React Native', 'Electron.js', 'Django', 'PostgreSQL']

  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)] pt-[40px]">
      <section className="flex-1 flex flex-col items-center justify-start space-y-4 py-4 md:py-8 relative">
        <div className="container flex max-w-[72rem] flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 space-y-4"
          >
            {/* Status Indicator */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full dark:bg-slate-900/30 dark:border dark:border-white/6 bg-blue-50 border border-blue-200 w-fit mx-auto md:mx-0 text-xs font-medium text-primary"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-primary tracking-widest">AVAILABLE FOR WORK</span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] gradient-text">
                 Muhammad Abu Hurairah
              </h1>
              <div className="text-lg sm:text-xl md:text-2xl font-semibold text-primary tracking-tight">
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Developer",
                      "Mobile Developer",
                      "Desktop Developer",
                      "Backend Engineer",
                      "MERN Specialist",
                      "React Native Developer",
                      "Electron.js Developer",
                      "Problem Solver"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 60,
                    delay: 50,
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <p className="max-w-[50rem] leading-relaxed text-base md:text-lg dark:text-gray-400 text-slate-600">
              Full-stack engineer building scalable applications across web, mobile, and desktop platforms. Expertise in MERN, Django, React Native, Electron.js, and cloud infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ y: 0, scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 font-semibold tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={handleDownloadCV}
                >
                  DOWNLOAD CV
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -4, scale: 1.02 }} whileTap={{ y: 0, scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <a href="#contact" className="w-full sm:w-auto block">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="w-full dark:border-white/10 dark:text-white dark:hover:border-white/20 dark:hover:bg-slate-900/40 border border-blue-200 text-blue-700 hover:border-blue-400 hover:bg-blue-50 font-semibold tracking-wide rounded-lg transition-all backdrop-blur-sm"
                  >
                    GET IN TOUCH
                  </Button>
                </a>
              </motion.div>
            </div>

            {/* Tech Stack Bar */}
          
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-none"
          >
            <motion.div className="relative w-full max-w-sm aspect-square group" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}>
              <div className="absolute inset-0 dark:border-white/6 border border-blue-300 rounded-2xl pointer-events-none"></div>
              
              <div className="relative max-w-sm aspect-square overflow-hidden dark:border-white/6 dark:bg-slate-900/30 border border-blue-300 bg-slate-100 rounded-2xl">
                <img
                  src={profileImage}
                  alt="M Abu Hurairah"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Soft overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-gradient-to-b from-transparent to-primary/20"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
