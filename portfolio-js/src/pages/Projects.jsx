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
import { Github, ExternalLink, X } from "lucide-react"
import { useState } from "react"  // added to manage modal state
import Finscope from "../assets/Finscope.png"
import donor_hub from "../assets/donor_hub.png"
import loan from "../assets/loan_System.png"
import chat from "../assets/chatbot.png"
import schedule from "../assets/schedule.png"
import era from "../assets/Era.png"
import quiz from "../assets/quiz.png"
import todo from "../assets/todo.png"
import hirelens from "../assets/hire.png"
// video asset for project previews
import fundhubVideo from "../assets/fundhub.mp4"
import hirelensVideo from "../assets/hirelens.mp4"
import loanVideo from "../assets/loan.mp4"
import scheduleEaseVideo from "../assets/scheduleease.mp4"
import todoVideo from "../assets/todo.mp4"

const projects = [
  // Projects with both code and live links
  {
    title: "FinScope - Real-Time Analytics Dashboard",
    description: "A comprehensive financial analytics platform with real-time crypto & stock trading simulation, portfolio management, and market analytics.",
    tags: ["Next.js", "TypeScript", "Redux", "Prisma", "PostgreSQL", "WebSocket"],
    github: "https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard",
    live: "https://finscope-hub.vercel.app/",
    image: Finscope,
  },
  {
    title: "DonorHub - Charity & Donation Platform",
    description: "A full-stack MERN platform connecting NGOs and donors through transparent campaign management and secure donation tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
    github: "https://github.com/ITZ-HURAIRAH18/Saylani_hackton",
    live: "https://donor-hub-eta.vercel.app/",
    image: donor_hub,
    // include video preview for this project
    video: fundhubVideo,
  },
{
  title: "HireLens – Intelligent Resume Intelligence",
  description: "Real-time AI resume analysis platform delivering ATS scores, actionable insights, and LLM-powered resume chat through a scalable FastAPI backend.",
  tags: ["React", "FastAPI", "LangGraph", "Gemini API", "AI Systems"],
  github: "https://github.com/ITZ-HURAIRAH18/HireLens",
  live: "https://hire-lensz.vercel.app/",
  image: hirelens,
  video: hirelensVideo,
}

,
  {
    title: "HealthWise AI - Medical Chatbot",
    description: "An intelligent medical assistant chatbot providing instant, structured health information powered by Google Gemini API with dark mode support.",
    tags: ["React", "Tailwind", "Google Gemini API", "Lucide Icons"],
    github: "https://github.com/ITZ-HURAIRAH18/HealthWise-AI",
    live: "https://health-wise-ai-chatbot.vercel.app/",
    image: chat,
  },
  {
    title: "Excel-Based Quiz App",
    description:
      "A dynamic and interactive quiz platform where users can upload Excel files containing MCQs. The app supports custom question selection, timers, instant answer validation, and a responsive Bootstrap UI.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "SheetJS", "Web3Forms"],
    github: "https://github.com/ITZ-HURAIRAH18/Excel-Based-Quiz-App",
    live: "https://eraquiz.netlify.app/",
    image: quiz,
  },
  {
    title: "Todo App in Next.js",
    description:
      "A modern and feature-rich Todo management application built with Next.js 16, TypeScript, Prisma, and PostgreSQL. Includes authentication, role-based access, todo sharing, admin dashboard, dark/light theme support, and advanced UI animations.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
      "Shadcn UI"
    ],
    github: "https://github.com/ITZ-HURAIRAH18/Todo-in-Next.js",
    live: "https://taskify18.vercel.app/",
    image: todo,
    video: todoVideo,
  },
  // Projects with only code links
  {
    title: "LoanVerse - Loan Management System",
    description: "A full-stack loan management platform built with Django and React, enabling loan applications, approvals, repayment tracking with role-based dashboards.",
    tags: ["Django", "React", "Vite", "Tailwind", "REST API", "SQLite"],
    github: "https://github.com/ITZ-HURAIRAH18/LoanVerse",
    live: null,
    image: loan,
    video: loanVideo,
  },
  {
    title: "Nexagen - Meeting Scheduling Platform",
    description: "A professional meeting scheduling and video conferencing platform with WebRTC, real-time communication, and role-based access control.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "WebRTC", "Express"],
    github: "https://github.com/ITZ-HURAIRAH18/Schedule_Ease",
    live: null,
    image: schedule,
    video: scheduleEaseVideo,
  },
  {
    title: "ERA - Smart Wardrobe Manager",
    description: "A modern clothing management system for boutiques with category management, cart functionality, checkout system, and inventory tracking.",
    tags: ["Django", "Python", "Bootstrap", "SQLite", "HTML/CSS"],
    github: "https://github.com/ITZ-HURAIRAH18/ERA--Smart-Wardrobe-Manager",
    live: null,
    image: era,
  },
]

export function Projects() {
  const [modalVideo, setModalVideo] = useState(null)

  const closeModal = () => setModalVideo(null)

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
            className="group"
          >
            {/* Animated Water Flow Border */}
            <div className="animated-border group-hover:animated-border-hover rounded-xl h-full">
              <Card className="relative flex flex-col h-[520px] bg-card backdrop-blur-xl border-0 rounded-xl overflow-hidden shadow-2xl">
              <div className="h-48 flex-shrink-0 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <CardHeader className="flex-shrink-0">
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:from-primary group-hover:to-purple-400 transition-all duration-300 line-clamp-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow overflow-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors border border-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex-shrink-0 pt-4">
                <div className="flex gap-3 w-full">
                  {project.github && (
                    <Button asChild className={`${project.live || project.video ? 'flex-1' : 'w-full'} group/btn relative overflow-hidden`} variant="outline">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">Code</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button asChild className="flex-1 group/btn relative overflow-hidden" variant="outline">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">Live</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  )}
                  {project.video && (
                    <Button className="flex-1" variant="outline" onClick={() => setModalVideo(project.video)}>
                      <span className="flex items-center justify-center gap-2">
                        &#9658; Video
                      </span>
                    </Button>
                  )}
                </div>
              </CardFooter>
              </Card>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* video modal overlay */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="relative w-full max-w-3xl" onClick={e => e.stopPropagation()}>
            {/* close icon over video */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl z-50 p-1 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <video
              src={modalVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div >
  )
}
