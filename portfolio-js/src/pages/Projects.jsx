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
import { useState } from "react"
import Finscope from "../assets/Finscope.png"
import donor_hub from "../assets/donor_hub.png"
import loan from "../assets/loan_System.png"
import chat from "../assets/chatbot.png"
import schedule from "../assets/schedule.png"
import era from "../assets/Era.png"
import quiz from "../assets/quiz.png"
import todo from "../assets/todo.png"
import hirelens from "../assets/hire.png"
import fundhubVideo from "../assets/fundhub.mp4"
import hirelensVideo from "../assets/hirelens.mp4"
import loanVideo from "../assets/loan.mp4"
import scheduleEaseVideo from "../assets/scheduleease.mp4"
import todoVideo from "../assets/todo.mp4"

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
    title: "DonorHub - Charity & Donation Platform",
    description: "A full-stack MERN platform connecting NGOs and donors through transparent campaign management and secure donation tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
    github: "https://github.com/ITZ-HURAIRAH18/Saylani_hackton",
    live: "https://donor-hub-eta.vercel.app/",
    image: donor_hub,
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
  },
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
    <div className="container py-24 md:py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-6 text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-slate-900/30 dark:border dark:border-white/6 bg-blue-50 border border-blue-200">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-xs font-medium text-primary tracking-widest">FEATURED PROJECTS</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text">
          Case Studies
        </h2>

        <p className="text-base dark:text-gray-400 text-slate-600 max-w-2xl font-sans">
          Production applications built with modern tech stacks and clean, scalable architecture
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative h-full dark:bg-slate-900/30 dark:border dark:border-white/10 dark:rounded-2xl bg-white border border-blue-300 rounded-2xl overflow-hidden transition-all duration-300 dark:hover:border-white/20 hover:border-blue-400 hover:shadow-md dark:hover:shadow-none flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 dark:border-white/8 border-slate-200 border-b dark:bg-slate-800/50 bg-slate-50">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60"></div>
                </div>
                <span className="text-xs font-mono dark:text-gray-400 text-slate-500 ml-2">projects/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
              </div>

              {/* Image Section */}
              <div className="relative h-40 overflow-hidden dark:bg-muted bg-slate-100 border-b dark:border-white/8 border-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-gradient-to-t from-background to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="relative p-5 flex flex-col flex-grow">
                {/* Title & Description */}
                <div className="space-y-2.5 flex-grow">
                  <h3 className="text-base font-semibold dark:text-white text-slate-900 line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs dark:text-gray-400 text-slate-600 line-clamp-2 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="my-3 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-2.5 py-1 text-xs font-medium dark:border-white/60 dark:bg-slate-900/40 dark:text-white dark:group-hover:border-white/80 dark:group-hover:text-white border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-300 rounded-full transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="inline-flex px-2.5 py-1 text-xs font-medium dark:text-gray-400 text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-1.5 pt-3 dark:border-white/8 border-slate-200 border-t">
                  {project.github && (
                    <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button 
                        asChild 
                        size="sm"
                        className="w-full dark:border-white/60 dark:text-white dark:bg-slate-900/40 dark:hover:bg-slate-900/60 dark:hover:border-white/80 border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 font-medium text-xs transition-all duration-200 rounded-lg"
                        variant="outline"
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                          <Github className="w-3.5 h-3.5" />
                          <span>CODE</span>
                        </a>
                      </Button>
                    </motion.div>
                  )}
                  {project.live && (
                    <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button 
                        asChild 
                        size="sm"
                        className="w-full dark:border-white/60 dark:text-white dark:bg-slate-900/40 dark:hover:bg-slate-900/60 dark:hover:border-white/80 border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 font-medium text-xs transition-all duration-200 rounded-lg"
                        variant="outline"
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>LIVE</span>
                        </a>
                      </Button>
                    </motion.div>
                  )}
                  {project.video && (
                    <motion.div whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button 
                        size="sm"
                        className="w-full dark:border-white/60 dark:text-white dark:bg-slate-900/40 dark:hover:bg-slate-900/60 dark:hover:border-white/80 border border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 font-medium text-xs transition-all duration-200 rounded-lg"
                        variant="outline"
                        onClick={() => setModalVideo(project.video)}
                      >
                        <span className="flex items-center justify-center gap-1.5">
                          <span>▶</span>
                          <span>DEMO</span>
                        </span>
                      </Button>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Video Modal */}
      {modalVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 dark:bg-black/90 bg-black/75 flex items-center justify-center z-50 p-4" 
          onClick={closeModal}
        >
          <motion.div 
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="relative w-full max-w-4xl" 
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 dark:text-white text-white z-50 p-2 dark:hover:bg-slate-900/40 hover:bg-black/40 transition-colors dark:border-white/10 border border-white/20 rounded"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <video
              src={modalVideo}
              controls
              autoPlay
              className="w-full h-auto dark:border-white/6 border border-white/20 rounded-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
