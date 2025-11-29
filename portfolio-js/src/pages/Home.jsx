import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <section className="flex-1 flex flex-col items-center justify-center space-y-10 py-12 text-center md:py-24 lg:py-32 overflow-hidden relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container flex max-w-[64rem] flex-col md:flex-row items-center gap-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              Hi 👋, I'm <br />
              <span className="text-primary">
                Muhammad Abu Hurairah
              </span>
            </h1>

            <div className="flex justify-center md:justify-start items-center gap-2 flex-wrap h-[30px]">
              <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=24&pause=1000&color=000000&center=false&vCenter=true&width=550&lines=Full-Stack+Developer+🚀;Python+|+Django+|+React+|+Next.js;MERN+Stack+Developer;Clean+Code+|+API+Craftsman;Always+Learning+New+Things" className="dark:invert" />
            </div>

            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 mx-auto md:mx-0">
              A passionate Full-Stack, MERN Developer & Next.js Developer from Pakistan.
            </p>

            <div className="space-x-4 pt-4">
              <a href="#projects">
                <Button size="lg">View Work</Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="lg">Contact Me</Button>
              </a>
            </div>

            <div className="pt-8 flex justify-center md:justify-start">
              <img src="https://komarev.com/ghpvc/?username=itz-hurairah18&label=Profile%20views&color=000000&style=flat-square" alt="Profile Views" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex-1 flex justify-center md:justify-end"
          >
            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-primary overflow-hidden shadow-2xl">
              <img
                src="https://github.com/itz-hurairah18.png"
                alt="Muhammad Abu Hurairah"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
