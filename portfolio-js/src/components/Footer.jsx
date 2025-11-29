export function Footer() {
  return (
    <footer className="relative py-8 md:py-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with <span className="font-medium text-foreground">React</span>, <span className="font-medium text-foreground">Tailwind CSS</span>, and <span className="font-medium text-foreground">shadcn/ui</span>.
        </p>
        <p className="text-center text-sm text-muted-foreground md:text-right">
          &copy; {new Date().getFullYear()} <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 font-bold">Abu Hurairah</span>. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
