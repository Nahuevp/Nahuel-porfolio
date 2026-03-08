'use client'

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
    if (prefersDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="text-lg font-semibold hover:opacity-70 transition-opacity"
          >
            Developer
          </a>
          <div className="flex items-center gap-4">
            <a href="#about" className="text-sm hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#projects" className="text-sm hover:opacity-70 transition-opacity">
              Projects
            </a>
            <a href="#contact" className="text-sm hover:opacity-70 transition-opacity">
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-muted/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-balance">
            Full Stack Developer
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 mb-6 text-balance">
            Building modern web applications with .NET, Angular, and React
          </p>
          <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
            I{`'`}m passionate about writing clean code, solving real problems, and learning new technologies. Currently finishing my Computer Science degree and looking for my first opportunity in the software industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30 dark:bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">About Me</h2>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I{`'`}m a junior full-stack developer finishing my Bachelor{`'`}s degree in Computer Science, focused on building web applications that actually work well. I enjoy the problem-solving side of development—figuring out how to structure code so it{`'`}s maintainable, testable, and easy for others to understand.
            </p>
            <p>
              My experience spans across the full stack: I{`'`}ve worked with C# and ASP.NET Core on the backend, built responsive frontends with Angular and React, and designed databases with SQL Server and PostgreSQL. But beyond the tech stack, what drives me is learning how to write code that matters—code that solves problems, scales gracefully, and doesn{`'`}t make future developers want to scream.
            </p>
            <p>
              I{`'`}m looking for my first role in the industry where I can grow, contribute real value, and collaborate with people who care about doing things right. I{`'`}m the type of developer who reads documentation, asks good questions, and actually enjoys refactoring.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'C#',
              '.NET Core',
              'ASP.NET Core',
              'Angular',
              'React',
              'TypeScript',
              'SQL Server',
              'PostgreSQL',
              'Git',
              'REST APIs',
              'Entity Framework',
              'HTML/CSS',
            ].map((tech) => (
              <div
                key={tech}
                className="px-4 py-3 bg-muted/50 dark:bg-muted/20 border border-border rounded-lg text-center hover:bg-muted dark:hover:bg-muted/30 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30 dark:bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Project 1 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-foreground/20">
              <h3 className="text-xl font-bold mb-3">Tracklass</h3>
              <p className="text-foreground/70 mb-4">
                Full-stack application for tracking and managing learning progress. Built to demonstrate end-to-end development with a focus on clean architecture and user experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  Angular
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  .NET
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  SQL
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity font-medium"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 2 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-foreground/20">
              <h3 className="text-xl font-bold mb-3">Rento</h3>
              <p className="text-foreground/70 mb-4">
                Web application focused on backend architecture and system design. Demonstrates understanding of database normalization, API design, and business logic implementation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  ASP.NET Core
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  REST API
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity font-medium"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 3 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-foreground/20">
              <h3 className="text-xl font-bold mb-3">Technical Test SPA</h3>
              <p className="text-foreground/70 mb-4">
                Single-page application created as part of a technical evaluation. Shows ability to quickly learn frameworks, write clean code, and deliver quality results under constraints.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  Component Design
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity font-medium"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Project 4 */}
            <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-foreground/20">
              <h3 className="text-xl font-bold mb-3">REST API Project</h3>
              <p className="text-foreground/70 mb-4">
                ASP.NET Core REST API demonstrating proper endpoint design, error handling, and authentication. Shows understanding of API best practices and architectural patterns.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  ASP.NET Core
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  Authentication
                </span>
                <span className="px-3 py-1 bg-muted/50 dark:bg-muted/30 rounded-full text-sm">
                  REST Best Practices
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity font-medium"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">More on GitHub</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            The projects above are just a selection of what I{`'`}ve been working on. Check out my GitHub profile to see more experiments, contributions, and learning projects. I believe in learning by building, so you{`'`}ll find a mix of polished work and side projects where I{`'`}m exploring new ideas.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Github className="w-5 h-5" />
            Visit GitHub
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30 dark:bg-muted/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let{`'`}s Connect</h2>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            I{`'`}m always interested in talking about new projects, learning opportunities, or just discussing development. Feel free to reach out—I respond to genuine messages and love connecting with other developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center flex-wrap">
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 rounded-lg hover:bg-muted dark:hover:bg-muted/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 rounded-lg hover:bg-muted dark:hover:bg-muted/30 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/30 rounded-lg hover:bg-muted dark:hover:bg-muted/30 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-sm text-foreground/60">
            © 2025 Full Stack Developer. All rights reserved.
          </p>
          <div className="text-sm text-foreground/60">
            Built with React • Styled with Tailwind • Deployed on Vercel
          </div>
        </div>
      </footer>
    </div>
  )
}
