import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Home } from "@/pages/Home"
import { Skills } from "@/pages/Skills"
import { Projects } from "@/pages/Projects"
import { Experience } from "@/pages/Experience"
import { Contact } from "@/pages/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased overflow-x-hidden">
        <Header />
        <main className="flex-1">
          <section id="home">
            <Home />
          </section>
          <section id="skills" className="bg-secondary/20">
            <Skills />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
