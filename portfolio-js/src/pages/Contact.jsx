import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Github, Mail, Linkedin, CheckCircle2, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { fireConfetti } from "@/lib/fireConfetti"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

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
      console.log('Form submitted successfully, triggering confetti...');
      fireConfetti()
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
    <div className="container py-24 md:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-slate-900/30 dark:border dark:border-white/60 bg-blue-50 border border-blue-200">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-xs font-medium text-primary tracking-widest">CONTACT</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">
          Get In Touch
        </h2>

        <p className="text-base dark:text-white text-slate-600 max-w-2xl font-sans">
          Have a project, idea, or just want to connect? I respond to all inquiries within 24 hours.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex-1 max-w-2xl mx-auto w-full lg:mx-0"
        >
          <div className="relative dark:bg-slate-900/30 dark:border dark:border-white/10 dark:rounded-2xl dark:hover:border-white/30 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-8 transition-all">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-8 pb-6 dark:border-white/20 border-slate-200 border-b dark:bg-slate-800/50 bg-slate-50 -m-8 mb-0 p-6 rounded-t-2xl">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
                <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
              </div>
              <span className="text-xs font-mono dark:text-white text-slate-500 ml-2">~/contact/message</span>
            </div>

            {/* Success State */}
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 p-8 rounded-2xl"
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>
                  <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                </motion.div>
                <h3 className="text-lg font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-gray-400 mt-2">I'll get back to you soon.</p>
              </motion.div>
            )}

            {/* Error State */}
            {error && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-4 border border-red-500/40 bg-red-500/5 rounded-lg flex gap-3"
              >
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-red-600">Error</h3>
                  <p className="text-xs text-red-500/80 mt-1">{error}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-xs font-medium text-primary tracking-widest uppercase">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="dark:bg-slate-900/30 dark:border-white/60 dark:focus:border-white dark:text-white dark:placeholder:text-gray-400 bg-slate-50 border border-slate-300 focus:border-blue-400 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium text-primary tracking-widest uppercase">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="dark:bg-slate-900/30 dark:border-white/60 dark:focus:border-white dark:text-white dark:placeholder:text-gray-400 bg-slate-50 border border-slate-300 focus:border-blue-400 text-slate-900 placeholder:text-slate-400 transition-all rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-medium text-primary tracking-widest uppercase">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="dark:bg-slate-900/30 dark:border-white/60 dark:focus:border-white dark:text-white dark:placeholder:text-gray-400 bg-slate-50 border border-slate-300 focus:border-blue-400 text-slate-900 placeholder:text-slate-400 transition-all min-h-[120px] resize-none rounded-lg"
                />
              </div>

              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-white hover:bg-primary/90 font-semibold tracking-wide transition-all rounded-lg shadow-lg hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 space-y-4"
        >
          {/* Email Card */}
          <motion.a
            href="mailto:hurairahumawais@gmail.com"
            whileHover={{ y: -4, scale: 1.02 }}
            className="block p-5 dark:bg-slate-900/30 dark:border dark:border-white/10 dark:rounded-2xl dark:hover:border-white/30 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all group"
          >
            <div className="flex gap-3.5">
              <motion.div whileHover={{ scale: 1.1 }} className="p-2.5 dark:bg-slate-900/50 dark:border-white/60 dark:group-hover:border-white/80 bg-blue-50 border border-blue-200 group-hover:border-blue-300 transition-all rounded-lg">
                <Mail className="w-4 h-4 text-primary dark:text-white" />
              </motion.div>
              <div>
                <p className="text-xs font-medium text-primary tracking-widest uppercase">Email</p>
                <p className="text-sm font-semibold dark:text-white text-slate-900 break-all">muhammadabuhurairah22@gmail.com</p>
              </div>
            </div>
          </motion.a>

          {/* Social Links */}
            <div className="dark:border-white/20 border-slate-200 border-t pt-4 space-y-3">
            <p className="text-xs font-medium text-primary tracking-widest uppercase">Social</p>
            
            {[
              { icon: Github, label: "GitHub", href: "https://github.com/itz-hurairah18" },
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/itzhurairah18/" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.02 }}
                className="flex items-center gap-3 p-3 dark:bg-slate-900/30 dark:border dark:border-white/10 dark:rounded-lg dark:hover:border-white/30 bg-white border border-slate-200 hover:border-blue-300 rounded-lg transition-all group"
              >
                <motion.div whileHover={{ scale: 1.1 }} className="p-1.5 dark:bg-slate-900/50 dark:border-white/60 dark:group-hover:border-white/80 bg-blue-50 border border-blue-200 group-hover:border-blue-300 transition-all rounded-lg">
                  <social.icon className="w-4 h-4 text-primary dark:text-white" />
                </motion.div>
                <div>
                  <p className="text-xs font-medium dark:text-white text-slate-900">{social.label}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Response Time */}
          <div className="dark:border-white/8 border-slate-200 border-t pt-4">
            <motion.div whileHover={{ scale: 1.02 }} className="p-4 dark:bg-slate-900/30 dark:border-white/6 dark:rounded-lg dark:hover:border-white/12 bg-blue-50 border border-blue-200 rounded-lg flex gap-3 transition-all">
              <div className="w-2 h-2 rounded-full bg-primary mt-1 flex-shrink-0 animate-pulse"></div>
              <div>
                <p className="text-xs font-medium text-primary tracking-widest uppercase">Response Time</p>
                <p className="text-xs dark:text-gray-400 text-slate-600 mt-1">Usually within 24 hours</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>  
    </div>  
  )  
} 
