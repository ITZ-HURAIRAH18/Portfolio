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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 mb-12"
      >
        <div className="flex-1 space-y-4">
          <h2 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl font-bold">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and work history.
          </p>
        </div>
      </motion.div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
        {experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>{job.role}</CardTitle>
                    <CardDescription className="text-lg font-medium mt-1">{job.company}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">{job.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p>{job.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
