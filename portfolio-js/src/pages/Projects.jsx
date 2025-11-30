import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Finscope from "../assets/Finscope.png"
const projects = [
  {
    title: "FinScope - Real-Time Analytics Dashboard",
    description: "A comprehensive financial analytics platform with real-time crypto & stock trading simulation, portfolio management, and market analytics.",
    tags: ["Next.js", "TypeScript", "Redux", "Prisma", "PostgreSQL", "WebSocket"],
    github: "https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard",
    live: "https://finscope-hub.vercel.app/",
    image: Finscope,
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing daily tasks and projects.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills and projects.",
    tags: ["React", "Vite", "shadcn/ui"],
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
]

export function Projects() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-12"
      >
        <div className="space-y-4 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <h2 className="relative inline-block font-heading text-4xl tracking-tight lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-600 animate-gradient-x">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've worked on.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-50 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>

            <Card className="relative flex flex-col justify-between h-full bg-card/90 backdrop-blur-xl border-0 rounded-xl overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-primary group-hover:to-purple-400 transition-all duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors border border-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto pt-0">
                <div className="flex gap-3 w-full">
                  <Button asChild className="flex-1 group/btn relative overflow-hidden" variant="outline">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Code</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                  <Button asChild className="flex-1 group/btn relative overflow-hidden" variant="outline">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Live</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div >
  )
}
