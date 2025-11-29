import { motion } from "framer-motion"

const skills = [
  { name: "MongoDB", icon: "mongodb" },
  { name: "Express", icon: "express" },
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Django", icon: "django" },
  { name: "Python", icon: "python" },
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Git", icon: "git" },
  { name: "C++", icon: "cpp" },
]

export function Skills() {
  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            The tools and technologies I use to build digital products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="relative p-4 rounded-xl bg-secondary/50 group-hover:bg-secondary transition-colors">
                <img
                  src={`https://skillicons.dev/icons?i=${skill.icon}`}
                  alt={skill.name}
                  width="48"
                  height="48"
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
