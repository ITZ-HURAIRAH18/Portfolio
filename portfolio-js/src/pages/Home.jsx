import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-24 text-center md:py-32 lg:py-40 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container flex max-w-[64rem] flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-primary overflow-hidden mx-auto">
              <img
                src="https://github.com/itz-hurairah18.png"
                alt="Muhammad Abu Hurairah"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Hi 👋, I'm <br className="hidden md:block" />
              <span className="text-primary">
                Muhammad Abu Hurairah
              </span>
            </h1>

            <div className="flex justify-center items-center gap-2 flex-wrap">
              <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=000000&center=true&vCenter=true&width=550&lines=Full-Stack+Developer+🚀;Python+|+Django+|+React+|+Next.js;MERN+Stack+Developer;Clean+Code+|+API+Craftsman;Always+Learning+New+Things" className="dark:invert" />
            </div>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto">
              A passionate Full-Stack, MERN Developer & Next.js Developer from Pakistan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-x-4"
          >
            <a href="#projects">
              <Button size="lg">View Work</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg">Contact Me</Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="pt-8"
          >
            <img src="https://komarev.com/ghpvc/?username=itz-hurairah18&label=Profile%20views&color=000000&style=flat-square" alt="Profile Views" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
