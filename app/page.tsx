'use client'

import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type Language = 'es' | 'en'

const content = {
  es: {
    nav: 'Nahuel Viera – Desarrollador de Software',
    hero: {
      greeting: 'Hola, soy Nahuel.',
      title: 'Desarrollador Full Stack enfocado en .NET y Angular',
      subtitle: 'Construyendo aplicaciones web modernas y resolviendo problemas reales a través del software.',
    },
    cta: {
      work: 'Ver mi trabajo',
      contact: 'Contactame',
    },
    about: {
      title: 'Sobre mí',
      text1: 'Soy un desarrollador full stack junior terminando mi Licenciatura en Ciencias de la Computación, enfocado en construir aplicaciones web que funcionen realmente bien. Disfruto el lado de resolución de problemas del desarrollo—descubrir cómo estructurar el código para que sea mantenible, testeable y fácil de entender para otros.',
      text2: 'Mi experiencia abarca toda la pila: he trabajado con C# y ASP.NET Core en el backend, construido frontends responsivos con Angular y React, y diseñado bases de datos con SQL Server y PostgreSQL. Pero más allá de la pila tecnológica, lo que me impulsa es aprender cómo escribir código que importe—código que resuelva problemas, escale gracefully, y no haga que los desarrolladores futuros quieran gritar.',
      text3: 'Estoy buscando mi primera oportunidad en la industria donde pueda crecer, aportar valor real y colaborar con personas que se importan por hacer las cosas bien. Soy el tipo de desarrollador que lee documentación, hace buenas preguntas y realmente disfruta refactorizar.',
    },
    languages: {
      title: 'Idiomas',
      spanish: 'Español — Nativo',
      english: 'Inglés — B2 (Certificación ECCE)',
    },
    tech: {
      title: 'Stack Tecnológico',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Bases de Datos',
      tools: 'Herramientas',
      learning: 'Aprendiendo',
    },
    projects: {
      title: 'Proyectos Destacados',
      tracklass: {
        name: 'Tracklass',
        desc: 'Aplicación full stack construida con Angular y .NET enfocada en arquitectura limpia y gestión del progreso de aprendizaje.',
      },
      rento: {
        name: 'Rento',
        desc: 'Aplicación web enfocada en arquitectura backend, diseño de bases de datos y estructura de APIs.',
      },
      technicalTest: {
        name: 'Technical Test SPA',
        desc: 'Aplicación de página única desarrollada como parte de una evaluación técnica demostrando habilidades de desarrollo frontend.',
      },
      restApi: {
        name: 'ASP.NET Core REST API',
        desc: 'Proyecto backend demostrando diseño de REST APIs, autenticación y manejo de errores.',
      },
      portfolio: {
        name: 'Developer Portfolio',
        desc: 'Portfolio personal construido con React y Tailwind para mostrar mis proyectos y viaje de desarrollo.',
      },
    },
    contact: {
      title: 'Ponte en contacto',
      subtitle: 'Siempre estoy interesado en oír sobre nuevas oportunidades y proyectos interesantes.',
    },
    footer: 'Construido con React, Tailwind CSS y Next.js',
  },
  en: {
    nav: 'Nahuel Viera – Software Developer',
    hero: {
      greeting: "Hey, I'm Nahuel.",
      title: 'Full Stack Developer focused on .NET and Angular',
      subtitle: 'Building modern web applications and solving real problems through software.',
    },
    cta: {
      work: 'View My Work',
      contact: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      text1: "I'm a junior full-stack developer finishing my Bachelor's degree in Computer Science, focused on building web applications that actually work well. I enjoy the problem-solving side of development—figuring out how to structure code so it's maintainable, testeable, and easy for others to understand.",
      text2: "My experience spans across the full stack: I've worked with C# and ASP.NET Core on the backend, built responsive frontends with Angular and React, and designed databases with SQL Server and PostgreSQL. But beyond the tech stack, what drives me is learning how to write code that matters—code that solves problems, scales gracefully, and doesn't make future developers want to scream.",
      text3: "I'm looking for my first role in the industry where I can grow, contribute real value, and collaborate with people who care about doing things right. I'm the type of developer who reads documentation, asks good questions, and actually enjoys refactoring.",
    },
    languages: {
      title: 'Languages',
      spanish: 'Spanish — Native',
      english: 'English — B2 (ECCE Certification)',
    },
    cta: {
      work: 'View My Work',
      contact: 'Get In Touch',
    },
    about: {
      title: 'About Me',
      text1: "I'm a junior full-stack developer finishing my Bachelor's degree in Computer Science, focused on building web applications that actually work well. I enjoy the problem-solving side of development—figuring out how to structure code so it's maintainable, testable, and easy for others to understand.",
      text2: "My experience spans across the full stack: I've worked with C# and ASP.NET Core on the backend, built responsive frontends with Angular and React, and designed databases with SQL Server and PostgreSQL. But beyond the tech stack, what drives me is learning how to write code that matters—code that solves problems, scales gracefully, and doesn't make future developers want to scream.",
      text3: "I'm looking for my first role in the industry where I can grow, contribute real value, and collaborate with people who care about doing things right. I'm the type of developer who reads documentation, asks good questions, and actually enjoys refactoring.",
      english: 'English: B2 (ECCE Certification)',
    },
    tech: {
      title: 'Tech Stack',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      tools: 'Tools',
      learning: 'Learning',
    },
    projects: {
      title: 'Featured Projects',
      tracklass: {
        name: 'Tracklass',
        desc: 'Full stack application built with Angular and .NET focused on clean architecture and managing learning progress.',
      },
      rento: {
        name: 'Rento',
        desc: 'Web application focused on backend architecture, database design and API structure.',
      },
      technicalTest: {
        name: 'Technical Test SPA',
        desc: 'Single page application developed as part of a technical evaluation demonstrating frontend development skills.',
      },
      restApi: {
        name: 'ASP.NET Core REST API',
        desc: 'Backend project demonstrating REST API design, authentication and error handling.',
      },
      portfolio: {
        name: 'Developer Portfolio',
        desc: 'Personal portfolio built with React and Tailwind to showcase my projects and development journey.',
      },
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Always interested to hear about new opportunities and interesting projects.',
    },
    footer: 'Built with React, Tailwind CSS, and Next.js',
  },
}

const technologies = {
  backend: [
    { name: 'C#', icon: '⚙️' },
    { name: '.NET / ASP.NET Core', icon: '🔧' },
    { name: 'Entity Framework Core', icon: '💾' },
    { name: 'REST APIs', icon: '🌐' },
  ],
  frontend: [
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Angular Material', icon: '✨' },
    { name: 'Bootstrap', icon: '📦' },
    { name: 'Tailwind CSS', icon: '🎨' },
    { name: 'HTML', icon: '📄' },
    { name: 'CSS', icon: '🎭' },
  ],
  databases: [
    { name: 'SQL Server', icon: '🗄️' },
    { name: 'PostgreSQL', icon: '🐘' },
  ],
  tools: [
    { name: 'Git', icon: '🔗' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Swagger', icon: '📚' },
    { name: 'Azure', icon: '☁️' },
    { name: 'Vercel', icon: '⚡' },
    { name: 'Railway', icon: '🚂' },
  ],
  learning: [
    { name: 'React', icon: '⚛️' },
  ],
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
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

  const t = content[language]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-900/15 to-purple-900/15 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-900/15 to-cyan-900/15 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-900/10 to-blue-900/10 dark:from-purple-900/20 dark:to-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="text-sm sm:text-base font-semibold hover:opacity-70 transition-opacity truncate mr-4"
          >
            {t.nav}
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#about" className="text-xs sm:text-sm hover:opacity-70 transition-opacity hidden sm:inline">
              {language === 'es' ? 'Sobre mí' : 'About'}
            </a>
            <a href="#projects" className="text-xs sm:text-sm hover:opacity-70 transition-opacity hidden sm:inline">
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </a>
            <a href="#contact" className="text-xs sm:text-sm hover:opacity-70 transition-opacity hidden sm:inline">
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors flex items-center gap-1"
              aria-label="Toggle language"
            >
              <span>{language === 'es' ? '🇪🇸 ES' : '🇬🇧 EN'}</span>
            </button>
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
        className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 relative"
      >
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center text-center gap-8 sm:gap-10">
            {/* Profile Image */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 sm:ring-4 ring-offset-4 ring-offset-background/50 ring-foreground/20 dark:ring-offset-background/30 hover:ring-foreground/30 hover:scale-105 transition-all duration-300 shadow-lg dark:shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 pointer-events-none" />
              <Image
                src="/images/profile.jpg"
                alt="Nahuel Viera"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-lg sm:text-xl text-foreground/70 mb-4">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-foreground/60 mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                {t.cta.work}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                {t.cta.contact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30 dark:bg-muted/5 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12">{t.about.title}</h2>
          <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <p>{t.about.text3}</p>
          </div>

          {/* Languages Section */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">{t.languages.title}</h3>
            <div className="space-y-3">
              <p className="text-base sm:text-lg text-foreground/80">
                <span className="font-medium text-foreground">🇪🇸</span> {t.languages.spanish}
              </p>
              <p className="text-base sm:text-lg text-foreground/80">
                <span className="font-medium text-foreground">🇬🇧</span> {t.languages.english}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="py-20 sm:py-32 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16">{t.tech.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Backend */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">{t.tech.backend}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.backend.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 sm:px-4 py-2 bg-muted/50 dark:bg-muted/30 rounded-lg text-sm sm:text-base hover:bg-muted/70 hover:scale-105 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span>{tech.icon}</span>{tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">{t.tech.frontend}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.frontend.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 sm:px-4 py-2 bg-muted/50 dark:bg-muted/30 rounded-lg text-sm sm:text-base hover:bg-muted/70 hover:scale-105 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span>{tech.icon}</span>{tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">{t.tech.databases}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.databases.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 sm:px-4 py-2 bg-muted/50 dark:bg-muted/30 rounded-lg text-sm sm:text-base hover:bg-muted/70 hover:scale-105 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span>{tech.icon}</span>{tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">{t.tech.tools}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.tools.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 sm:px-4 py-2 bg-muted/50 dark:bg-muted/30 rounded-lg text-sm sm:text-base hover:bg-muted/70 hover:scale-105 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span>{tech.icon}</span>{tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">{t.tech.learning}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.learning.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 sm:px-4 py-2 bg-muted/50 dark:bg-muted/30 rounded-lg text-sm sm:text-base hover:bg-muted/70 hover:scale-105 hover:shadow-md dark:hover:shadow-lg transition-all duration-200 inline-flex items-center gap-2 opacity-75"
                  >
                    <span>{tech.icon}</span>{tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30 dark:bg-muted/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16">{t.projects.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { key: 'tracklass', tech: 'Angular, C#, .NET', icon: '📊' },
              { key: 'rento', tech: 'Angular, C#, .NET', icon: '🏠' },
              { key: 'technicalTest', tech: 'Angular', icon: '✅' },
              { key: 'restApi', tech: 'C#, .NET', icon: '🔌' },
              { key: 'portfolio', tech: 'React, Tailwind, Next.js', icon: '💼' },
            ].map((project) => {
              const proj = t.projects[project.key as keyof typeof t.projects]
              return (
                <div
                  key={project.key}
                  className="group overflow-hidden rounded-lg border border-border bg-card/50 dark:bg-card/30 hover:border-foreground/20 hover:shadow-lg dark:hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  {/* Project Image/Preview */}
                  <div className="w-full h-32 sm:h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/30 dark:to-purple-400/30 flex items-center justify-center overflow-hidden relative">
                    <div className="text-5xl sm:text-6xl group-hover:scale-110 transition-transform duration-200">
                      {project.icon}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 sm:p-8">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 group-hover:text-foreground/90 transition-colors">
                      {proj.name}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 mb-4 leading-relaxed">
                      {proj.desc}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm text-foreground/50 font-medium">{project.tech}</span>
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">{t.contact.title}</h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-12 text-balance">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              {language === 'es' ? 'Enviar Email' : 'Send Email'}
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 bg-muted/20 dark:bg-muted/5">
        <div className="max-w-6xl mx-auto text-center text-sm text-foreground/50">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
