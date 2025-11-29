import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion"

const experience = [
  {
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description: "Leading the frontend team in building scalable web applications using React and Next.js.",
  },
  {
    company: "Digital Agency",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: "Developed and maintained client websites using MERN stack.",
  },
  {
    company: "StartUp Hub",
    role: "Junior Developer",
    period: "2019 - 2020",
    description: "Collaborated with senior developers to implement UI features.",
  },
]

export function Experience() {
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
            Professional Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and work history.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent"
      >
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 md:-ml-5 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:scale-125 transition-transform duration-300" />
            </div>

            <Card className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 group-hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]">
              {/* Gradient Border Line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity" />

              <CardHeader>
                <div className="flex flex-col gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">{job.role}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1 text-foreground/80">{job.company}</CardDescription>
                  </div>
                  <span className="text-sm font-medium text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full w-fit border border-purple-500/20">{job.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div >
  )
}
