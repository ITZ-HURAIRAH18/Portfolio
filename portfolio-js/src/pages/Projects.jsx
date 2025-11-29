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

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing daily tasks and projects.",
    tags: ["Next.js", "TypeScript", "Prisma"],
    link: "#",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills and projects.",
    tags: ["React", "Vite", "shadcn/ui"],
    link: "#",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
]

export function Projects() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-12"
      >
        <div className="flex-1 space-y-4">
          <h2 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl font-bold">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            A collection of projects I've worked on.
          </p>
        </div>
      </motion.div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="flex flex-col justify-between h-full hover:border-primary/50 transition-colors overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <a href={project.link}>View Project</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
