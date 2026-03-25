import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <span className="text-xl font-bold tracking-tight">3-cong-chua</span>
          <nav className="flex items-center gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <Button size="sm">Contact</Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Welcome to 3-cong-chua
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-10">
          A modern website built with React, Vite, Tailwind CSS v4, and shadcn/ui.
          Edit <code className="font-mono text-sm bg-muted px-1 py-0.5 rounded">src/App.tsx</code> to get started.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} 3-cong-chua. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
