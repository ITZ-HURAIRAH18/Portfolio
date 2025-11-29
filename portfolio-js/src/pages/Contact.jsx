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

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

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

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000)
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
        <div className="space-y-4">
          <h2 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground">
            Get in touch with me for opportunities or collaborations.
          </p>
        </div>
      </motion.div>

      <div className="flex flex-col gap-12 max-w-3xl mx-auto">
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
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Send a message</CardTitle>
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
                <Button type="submit" className="w-full relative overflow-hidden group/btn" disabled={isSubmitting}>
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
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
            <div className="p-1 rounded-xl">
              <img
                src="https://github-readme-streak-stats.herokuapp.com?user=itz-hurairah18&theme=dark&hide_border=true&background=00000000"
                alt="GitHub Streak"
                className="w-full max-w-md rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 border-0 rounded-xl bg-gradient-to-br from-secondary/30 to-purple-900/10 w-full backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500" />
            <blockquote className="italic text-lg text-muted-foreground relative z-10">
              "Code is like humor. When you have to explain it, it’s bad."
            </blockquote>
            <p className="mt-2 font-semibold text-primary relative z-10">— Cory House</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
