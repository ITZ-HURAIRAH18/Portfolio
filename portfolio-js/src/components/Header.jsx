import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a href="#home" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Portfolio
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a
              href="#projects"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Add search or other controls here if needed */}
          </div>
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
