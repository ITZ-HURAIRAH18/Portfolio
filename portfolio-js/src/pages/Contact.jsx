import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export function Contact() {
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
            Contact
          </h2>
          <p className="text-xl text-muted-foreground">
            Get in touch with me for opportunities or collaborations.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="m@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Connect with Me</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through social media or check out my code repositories.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/HurairahAb73769" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="https://skillicons.dev/icons?i=twitter" width="40" alt="Twitter" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="https://skillicons.dev/icons?i=linkedin" width="40" alt="LinkedIn" />
              </a>
              <a href="https://instagram.com/abu_hurairah.rehmani" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="https://skillicons.dev/icons?i=instagram" width="40" alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">GitHub Streaks</h3>
            <img
              src="https://github-readme-streak-stats.herokuapp.com?user=itz-hurairah18&theme=dark&hide_border=true&background=00000000"
              alt="GitHub Streak"
              className="w-full max-w-md dark:invert"
            />
          </div>

          <div className="p-6 border rounded-xl bg-secondary/20">
            <blockquote className="italic text-lg text-muted-foreground">
              "Code is like humor. When you have to explain it, it’s bad."
            </blockquote>
            <p className="mt-2 font-semibold">— Cory House</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
