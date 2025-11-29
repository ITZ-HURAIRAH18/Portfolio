import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import profileImage from "@/assets/profile.jpeg"
import Typewriter from 'typewriter-effect';

export function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-8 md:py-16 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container flex max-w-[68rem] flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-600 animate-gradient-x">
                Hi </span><motion.span
                  style={{ display: 'inline-block' }}
                  animate={{
                    rotate: [0, 20, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.5
                  }}
                  className="origin-bottom-right"
                ></motion.span><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-600 animate-gradient-x">, I'm
              </span> <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-600 animate-gradient-x">
                Muhammad Abu Hurairah
              </span>
            </h1>

            <div className="flex justify-center md:justify-start items-center gap-2 flex-wrap text-xl sm:text-2xl md:text-3xl font-bold min-h-[40px]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-600 animate-gradient-x">
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Developer ",
                      "Python | Django | React | Next.js",
                      "MERN Stack Developer",
                      "Clean Code | API Craftsman",
                      "Always Learning New Things"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 50,
                  }}
                />
              </span>
            </div>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto md:mx-0">
              A passionate Full-Stack, MERN Developer & Next.js Developer from Pakistan.
            </p>

            <div className="space-x-4 pt-4 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-0">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300">
                  View Work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-purple-500 hover:bg-gradient-to-r hover:from-primary hover:to-purple-600 hover:border-transparent transition-all duration-300">Contact Me</Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md h-[400px] md:h-[450px] group">
              {/* Glowing Background Blob */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-full blur-[40px] opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />

              <div className="relative w-full h-full overflow-hidden shadow-2xl rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm">
                <img
                  src={profileImage}
                  alt="Muhammad Abu Hurairah"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
