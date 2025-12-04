import { useState } from "react"
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
import { Github, Twitter, Linkedin, Instagram, CheckCircle2 } from "lucide-react"

import emailjs from "@emailjs/browser"
import { useRef } from "react"

export function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [streakError, setStreakError] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Abu Hurairah",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (err) {
      console.error("EmailJS Error:", err)
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 text-center mb-12"
      >
        <div className="space-y-4 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
          <h2 className="relative inline-block font-heading text-4xl tracking-tight lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-pink-600 animate-gradient-x">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col gap-8 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative"
        >
          {/* Gradient Border Effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-50 group-hover:opacity-100 transition duration-500 blur group-hover:blur-md"></div>

          <Card className="border-0 bg-card/90 backdrop-blur-xl relative overflow-hidden">
            {isSuccess && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 animate-in fade-in duration-300">
                <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            )}
            {error && (
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 animate-in fade-in duration-300">
                <div className="h-16 w-16 text-red-500 mb-4 flex items-center justify-center rounded-full bg-red-500/10">
                  <span className="text-3xl font-bold">!</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Oops!</h3>
                <p className="text-muted-foreground mb-4">{error}</p>
                <Button onClick={() => setError("")} variant="outline">Try Again</Button>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Send a message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-white/10 focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-white/10 focus:border-purple-500 transition-colors"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-white/10 focus:border-purple-500 transition-colors min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8 text-center flex flex-col items-center"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Connect with Me</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through social media or check out my code repositories.
            </p>
            <div className="flex gap-4 justify-center">
              {[
                { icon: Twitter, href: "https://x.com/HurairahAb73769", label: "Twitter" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/abu_hurairah.rehmani", label: "Instagram" },
                { icon: Github, href: "https://github.com/itz-hurairah18", label: "GitHub" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-transparent hover:text-white transition-all hover:scale-110 relative group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <social.icon className="h-6 w-6 relative z-10" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4 w-full flex flex-col items-center">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">GitHub Streaks</h3>
            <div className="p-1 rounded-xl relative">
              {!streakError ? (
                <>
                  {/* Dark mode streak */}
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com?user=itz-hurairah18&theme=dark&hide_border=true&background=00000000&ring=A855F7&fire=A855F7&currStreakNum=A855F7&currStreakLabel=A855F7&sideLabels=A855F7&dates=A855F7"
                    alt="GitHub Streak"
                    className="w-full max-w-md rounded-lg dark:block hidden"
                    onError={() => setStreakError(true)}
                    loading="lazy"
                  />
                  {/* Light mode streak */}
                  <img
                    src="https://github-readme-streak-stats.herokuapp.com?user=itz-hurairah18&theme=default&hide_border=true&background=FFFFFF&ring=A855F7&fire=A855F7&currStreakNum=000000&currStreakLabel=000000&sideLabels=000000&dates=666666&stroke=A855F7"
                    alt="GitHub Streak"
                    className="w-full max-w-md rounded-lg dark:hidden block"
                    onError={() => setStreakError(true)}
                    loading="lazy"
                  />
                </>
              ) : (
                <div className="w-full max-w-md p-8 rounded-lg bg-secondary/50 border border-white/10 flex flex-col items-center justify-center text-center">
                  <Github className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">GitHub stats temporarily unavailable</p>
                  <a 
                    href="https://github.com/itz-hurairah18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View my GitHub profile →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* <div className="relative w-full max-w-2xl mx-auto mt-8 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative p-8 rounded-2xl bg-card/50 backdrop-blur-xl border border-white/10 flex flex-col items-center text-center">
              <span className="text-6xl text-purple-500/20 font-serif absolute top-4 left-4">"</span>
              <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 relative z-10 italic font-serif">
                Code is like humor. When you have to explain it, it’s bad.
              </blockquote>
              <span className="text-6xl text-purple-500/20 font-serif absolute bottom-0 right-4 leading-none">"</span>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px w-8 bg-purple-500/50" />
                <p className="font-semibold text-primary">— Cory House</p>
                <div className="h-px w-8 bg-purple-500/50" />
              </div>
            </div>
          </div> */}
        </motion.div>
      </div>
    </div>
  )
}
