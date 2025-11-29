import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import profileImage from "@/assets/profile.jpeg"

export function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-8 md:py-16 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container flex max-w-[64rem] flex-col md:flex-row items-center justify-between gap-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 space-y-8"
          >
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Hi <motion.span
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
              >👋</motion.span>, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-600 animate-gradient-x">
                Muhammad Abu Hurairah
              </span>
            </h1>

            <div className="flex justify-center md:justify-start items-center gap-2 flex-wrap h-[30px]">
              <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=A855F7&center=false&vCenter=true&width=550&lines=Full-Stack+Developer+🚀;Python+|+Django+|+React+|+Next.js;MERN+Stack+Developer;Clean+Code+|+API+Craftsman;Always+Learning+New+Things" alt="Typing SVG" />
            </div>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto md:mx-0">
              A passionate Full-Stack, MERN Developer & Next.js Developer from Pakistan.
            </p>

            <div className="space-x-4 pt-4 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-0">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto relative overflow-hidden group">
                  <span className="relative z-10">View Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-purple-500/20 hover:bg-purple-500/10 hover:text-purple-400 transition-colors">Contact Me</Button>
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
