'use client'

import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

type Language = 'es' | 'en'

const content = {
  es: {
    nav: 'Nahuel Viera — Desarrollador de Software',

    hero: {
      greeting: 'Hola, soy Nahuel.',
      title: 'Desarrollador Full Stack',
      subtitle:
        'Especializado en .NET y Angular | construyendo aplicaciones web modernas y resolviendo problemas reales a través del software.',
    },

    cta: {
      work: 'Ver mi trabajo',
      contact: 'Contactame',
    },

    about: {
      title: "Sobre mí",
      text1: "Soy estudiante avanzado de la Licenciatura en Informática con experiencia práctica en desarrollo de aplicaciones web full stack. Me enfoco en construir aplicaciones modernas utilizando Angular y .NET, aplicando buenas prácticas como arquitectura por capas y separación de responsabilidades.",

      text2: "He desarrollado proyectos personales donde trabajé con SPAs y APIs REST, participando en todo el ciclo de desarrollo: desde el diseño de la aplicación hasta su implementación y mejora continua.",

      text3: "Disfruto resolver problemas a través del software, aprender nuevas tecnologías y trabajar en equipo para construir soluciones claras, mantenibles y escalables.",

      text4: "Actualmente estoy buscando mi primera oportunidad profesional en el área IT, donde pueda seguir creciendo como desarrollador y aportar valor dentro de un equipo de desarrollo.",
    },

    languages: {
      title: 'Idiomas',
      spanish: 'Español — Nativo',
      english: 'Inglés — Nivel B2 (Certificación ECCE)',
      englishDesc:
        'Puedo leer documentación técnica, comunicarme en entornos de desarrollo y trabajar con recursos en inglés sin problemas.',
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

      microservices: {
        name: 'E-Commerce Microservices',
        desc:
          'Arquitectura de microservicios para un e-commerce con 8 servicios independientes (.NET 10), API Gateway con YARP, autenticación JWT, Saga pattern para checkout distribuido, Docker Compose y tests unitarios. Cada servicio con su propia base de datos PostgreSQL.',
      },

      tracklass: {
        name: 'Tracklass',
        desc:
          'Aplicación full stack orientada al seguimiento del progreso de aprendizaje de estudiantes. Permite registrar actividades, visualizar métricas y organizar información académica en una interfaz clara. Desarrollada con Angular y .NET aplicando una arquitectura limpia.',
      },

      rento: {
        name: 'Rento',
        desc:
          'Aplicación web enfocada en la gestión y presentación de vehículos para alquiler. El proyecto se centra en la arquitectura backend, modelado de base de datos y diseño de APIs utilizando .NET junto con un frontend en Angular.',
      },

      technicalTest: {
        name: 'StockApp',
        desc:
          'Aplicación web desarrollada para gestionar productos y stock. Permite registrar artículos, visualizar listados con paginación y administrar información básica de inventario a través de una interfaz simple orientada a la gestión.',
      },

      saas: {
        name: 'ConectaEmprendedores',
        desc:
          'Plataforma SaaS integral para la gestión de marketplaces locales. Desarrollé un ecosistema completo que incluye un panel administrativo para moderación, sistema de membresías/suscripciones para emprendedores, y flujos automatizados de contacto vía WhatsApp. El enfoque principal fue la escalabilidad y la experiencia del usuario (UX) tanto para el admin como para el vendedor.',
      },
    },

    contact: {
      title: 'Ponte en contacto',
      subtitle:
        'Siempre estoy interesado en escuchar sobre nuevas oportunidades o proyectos interesantes.',
    },

    footer:
      '© 2026 Nahuel Viera — Full Stack Developer (.NET & Angular)',
  },

  en: {
    nav: 'Nahuel Viera — Software Developer',

    hero: {
      greeting: "Hey, I'm Nahuel.",
      title: 'Full Stack Developer',
      subtitle:
        'Specialized in .NET and Angular — building modern web applications and solving real problems through software.',
    },

    cta: {
      work: 'View My Work',
      contact: 'Get In Touch',
    },

    about: {
      title: "About me",

      text1: "I am an advanced student of the Bachelor's Degree in Computer Science with hands-on experience in full stack web development. I focus on building modern applications using Angular and .NET while applying best practices such as layered architecture and separation of concerns.",

      text2: "I have developed personal projects where I implemented SPAs and REST APIs, working through the entire development process — from application design to implementation and continuous improvement.",

      text3: "I enjoy solving problems through software, learning new technologies and collaborating in team environments to build clear, maintainable and scalable solutions.",

      text4: "Currently, I am seeking my first professional opportunity in the IT industry where I can continue growing as a developer and contribute value within a development team."
    },

    languages: {
      title: 'Languages',
      spanish: 'Spanish — Native',
      english: 'English — B2 (ECCE Certification)',
      englishDesc:
        'Comfortable reading technical documentation and working with English resources in development environments.',
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

      microservices: {
        name: 'E-Commerce Microservices',
        desc:
          'Microservices architecture for an e-commerce with 8 independent services (.NET 10), YARP API Gateway, JWT authentication, Saga pattern for distributed checkout, Docker Compose and unit tests. Each service with its own PostgreSQL database.',
      },

      tracklass: {
        name: 'Tracklass',
        desc:
          'Full stack application designed to track student learning progress. Built with Angular and .NET following clean architecture principles.',
      },

      rento: {
        name: 'Rento',
        desc:
          'Web application focused on vehicle management and presentation for rental services. The project emphasizes backend architecture, database modeling and API design using .NET.',
      },

      technicalTest: {
        name: 'StockApp',
        desc:
          'Web application created to manage products and inventory. Allows registering items, displaying paginated lists and managing stock information through a simple interface.',
      },

      saas: {
        name: 'ConectaEmprendedores',
        desc:
          'Comprehensive SaaS platform for local marketplace management. Includes an administrative panel, subscription system for entrepreneurs, and automated WhatsApp contact flows. Focus on scalability, admin and vendor UX.',
      },
    },

    contact: {
      title: 'Get In Touch',
      subtitle:
        'Always interested in hearing about new opportunities or interesting projects.',
    },

    footer:
      '© 2026 Nahuel Viera — Full Stack Developer (.NET & Angular)',
  },
}

const technologies = {
  backend: [
    { name: "C#", logo: "/icons/csharp.svg" },
    { name: ".NET / ASP.NET Core", logo: "/icons/dotnet.svg" },
    { name: "Entity Framework Core", logo: "/icons/entityframework.svg" },
    { name: "REST APIs", logo: "/icons/swagger.svg" }
  ],

  frontend: [
    { name: "Angular", logo: "/icons/angular.svg" },
    { name: "TypeScript", logo: "/icons/typescript.svg" },
    { name: "Angular Material", logo: "/icons/angularmaterial.svg" },
    { name: "Bootstrap", logo: "/icons/bootstrap.svg" },
    { name: "Tailwind CSS", logo: "/icons/tailwind.svg" },
    { name: "HTML", logo: "/icons/html.svg" },
    { name: "CSS", logo: "/icons/css.svg" }
  ],

  databases: [
    { name: "SQL Server", logo: "/icons/sqlserver.svg" },
    { name: "PostgreSQL", logo: "/icons/postgresql.svg" }
  ],

  tools: [
    { name: "Git", logo: "/icons/git.svg" },
    { name: "Docker", logo: "/icons/docker.svg" },
    { name: "Swagger", logo: "/icons/swagger.svg" },
    { name: "Azure", logo: "/icons/azure.svg" },
    { name: "Vercel", logo: "/icons/vercel.svg" },
    { name: "Render", logo: "/icons/render.svg" },
    { name: "Neon", logo: "/icons/neon.svg" }
  ],

  learning: [
    { name: "React", logo: "/icons/react.svg" }
  ]
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)
  const waveStyle = {
    display: "inline-block",
    transformOrigin: "70% 70%",
    animation: "wave 2s ease-in-out infinite"
  }
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  }
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget

    // Honeypot anti-bot
    const honeypot = (form.elements.namedItem("company") as HTMLInputElement)

    if (honeypot && honeypot.value) {
      return
    }

    // Rate limit 30 minutos
    const lastSend = localStorage.getItem("lastEmailSent")
    const now = Date.now()

    if (lastSend && now - Number(lastSend) < 30 * 60 * 1000) {
      alert("Ya enviaste un mensaje recientemente. Intenta nuevamente en 30 minutos.")
      return
    }

    try {
      await emailjs.sendForm(
        "service_9dbwgod",
        "template_j7o2r89",
        form,
        "FbzWC4r2dBke9HemS"
      )

      localStorage.setItem("lastEmailSent", now.toString())

      alert("Mensaje enviado correctamente!")

      form.reset()

    } catch (error) {
      alert("Error al enviar el mensaje. Intenta nuevamente.")
    }
  }


  useEffect(() => {
    setMounted(true)
    // Forzamos el modo oscuro por defecto porque la paleta resalta mejor
    setIsDark(true)
    document.documentElement.classList.add('dark')
  }, [])

  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const [heroMouse, setHeroMouse] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)
      const doc = document.documentElement
      setScrollProgress((scrollY / (doc.scrollHeight - doc.clientHeight)) * 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ids = ['hero', 'about', 'tech', 'projects', 'contact']
    const observers: IntersectionObserver[] = []
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.25 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const t = content[language]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-background dark:text-foreground">
      {/* Scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      {/* Noise grain texture */}
      <div className="noise-overlay" />
      {/* Animated background glows */}
      <div className="bg-glow-container">
        <div className="bg-glow-a" />
        <div className="bg-glow-b" />
        <div className="bg-glow-c" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b
  ${scrolled
            ? "bg-background/95 backdrop-blur-md border-border"
            : "bg-transparent border-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2 text-sm sm:text-base font-semibold hover:opacity-70 transition-opacity truncate mr-4"
          >
            <span>{t.nav}</span>
            <img src="/flags/uy.svg" alt="Uruguay" className="w-4 h-4 sm:w-5 sm:h-5 rounded-sm shadow-sm" />
          </a>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="#about" className={`nav-link hidden sm:inline ${activeSection === 'about' ? 'active' : ''}`}>
              {language === 'es' ? 'Sobre mí' : 'About'}
            </a>
            <a href="#tech" className={`nav-link hidden sm:inline ${activeSection === 'tech' ? 'active' : ''}`}>
              {language === 'es' ? 'Stack' : 'Stack'}
            </a>
            <a href="#projects" className={`nav-link hidden sm:inline ${activeSection === 'projects' ? 'active' : ''}`}>
              {language === 'es' ? 'Proyectos' : 'Projects'}
            </a>
            <a href="#contact" className={`nav-link hidden sm:inline ${activeSection === 'contact' ? 'active' : ''}`}>
              {language === 'es' ? 'Contacto' : 'Contact'}
            </a>
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">

              <button
                onClick={() => setLanguage('es')}
                className={`flex items-center gap-1 transition-opacity hover:opacity-80 ${language === 'es' ? 'text-foreground' : 'text-foreground/50'
                  }`}
              >
                <img src="/flags/es.svg" alt="Español" className="w-4 h-4 rounded-sm" />
                ES
              </button>

              <span className="text-foreground/40">|</span>

              <button
                onClick={() => setLanguage('en')}
                className={`flex items-center gap-1 transition-opacity hover:opacity-80 ${language === 'en' ? 'text-foreground' : 'text-foreground/50'
                  }`}
              >
                <img src="/flags/gb.svg" alt="English" className="w-4 h-4 rounded-sm" />
                EN
              </button>

            </div>
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
      <style>
        {`
@keyframes wave {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
`}
      </style>
      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          setHeroMouse({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
          })
        }}
      >
        {/* Dot grid overlay */}
        <div className="hero-dot-grid" />

        {/* Mouse spotlight - adapts to dark/light mode */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: isDark
              ? `radial-gradient(700px circle at ${heroMouse.x}% ${heroMouse.y}%, rgba(16,185,129,0.10), transparent 55%)`
              : `radial-gradient(700px circle at ${heroMouse.x}% ${heroMouse.y}%, rgba(16,185,129,0.20), transparent 55%)`
          }}
        />

        <div className="relative z-20 max-w-4xl mx-auto w-full">
          <div className="flex flex-col items-center text-center gap-8 sm:gap-10">
            {/* Profile Image */}
            <div className="relative w-52 h-52 sm:w-64 sm:h-64">
              {/* Rotating gradient ring */}
              <div className="profile-ring-spinner" />
              {/* Background gap */}
              <div className="profile-ring-mask" />
              {/* Image */}
              <div className="profile-ring-image">
                <Image
                  src="https://res.cloudinary.com/dclt3q5lo/image/upload/w_400,f_auto,q_auto/foto_nueva_cv_de_menor_tamaño_urxylx"
                  alt="Nahuel Viera"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <p className="text-lg sm:text-xl mb-4 text-foreground/70">
                <span style={waveStyle} className="mr-2">👋</span>
                <span className="text-foreground/80">{t.hero.greeting}</span>
              </p>

              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  {language === 'es' ? 'Disponible para trabajar' : 'Open to work'}
                </div>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 tracking-tight hero-title">
                {t.hero.title}
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 text-balance leading-relaxed max-w-2xl mx-auto">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">

              <a
                href={
                  language === "es"
                    ? "/cv/Nahuel-Viera-CV-Desarrollador-FullStack.pdf"
                    : "/cv/Nahuel-Viera-CV-FullStack-Developer.pdf"
                }
                download={
                  language === "es"
                    ? "Nahuel-Viera-CV-Desarrollador-FullStack.pdf"
                    : "Nahuel-Viera-CV-FullStack-Developer.pdf"
                }
                className="hero-btn hero-btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-[#10b981] hover:bg-[#059669] text-white rounded-lg font-medium"
              >
                <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                {language === "es" ? "Descargar CV" : "Download CV"}
              </a>

              <a
                href="#projects"
                className="hero-btn hero-btn-secondary inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-foreground text-background rounded-lg font-medium hover:opacity-90"
              >
                {t.cta.work}
              </a>

              <a
                href="#contact"
                className="hero-btn hero-btn-outline inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-muted"
              >
                {t.cta.contact}
              </a>

            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30 dark:bg-muted/5 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 section-title">{t.about.title}</h2>
          <div className="space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <p>{t.about.text1}</p>
            <p>{t.about.text2}</p>
            <p>{t.about.text3}</p>
            <p className="font-medium text-foreground/90">{t.about.text4}</p>
          </div>

          {/* Education */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
              {language === 'es' ? 'Educación' : 'Education'}
            </h3>

            <p className="text-base sm:text-lg text-foreground/80">
              {language === 'es'
                ? 'Licenciatura en Informática — Universidad de la Empresa (UDE)'
                : "Bachelor's Degree in Computer Science — Universidad de la Empresa (UDE)"}
            </p>

            <p className="text-foreground/70">
              {language === 'es' ? '2022 - Actualidad (Tesis en curso)' : '2022 — Present (Thesis in progress)'}
            </p>
          </div>

          {/* Languages Section */}
          <div className="mt-12 pt-12 border-t border-border">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">{t.languages.title}</h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <img src="/flags/es.svg" alt="Español" className="w-5 h-5 rounded-sm" />
                <p className="text-base sm:text-lg text-foreground/80">
                  {t.languages.spanish}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="/flags/gb.svg" alt="English" className="w-5 h-5 rounded-sm" />
                  <p className="text-base sm:text-lg text-foreground/80">
                    {t.languages.english}
                  </p>
                </div>

                <p className="text-base sm:text-lg text-foreground/70 ml-8">
                  {t.languages.englishDesc}
                </p>
              </div>

            </div>
          </div>
        </div>
      </motion.section>

      <div className="section-divider" />

      {/* Tech Stack Section */}
      <motion.section
        id="tech"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 sm:py-32 px-4 sm:px-6 relative"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 section-title">{t.tech.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

            {/* Backend */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">
                {t.tech.backend}
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.backend.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="tech-badge"
                    data-tech={tech.name}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <img src={tech.logo} alt={tech.name} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">
                {t.tech.frontend}
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.frontend.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="tech-badge"
                    data-tech={tech.name}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <img src={tech.logo} alt={tech.name} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">
                {t.tech.databases}
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.databases.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="tech-badge"
                    data-tech={tech.name}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <img src={tech.logo} alt={tech.name} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">
                {t.tech.tools}
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.tools.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="tech-badge"
                    data-tech={tech.name}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <img src={tech.logo} alt={tech.name} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Learning */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-foreground/90">
                {t.tech.learning}
              </h3>

              <div className="flex flex-wrap gap-3">
                {technologies.learning.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="tech-badge opacity-70"
                    data-tech={tech.name}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  >
                    <img src={tech.logo} alt={tech.name} />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      <div className="section-divider" />

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 sm:py-32 px-4 sm:px-6 bg-muted/30 dark:bg-muted/5"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 section-title">{t.projects.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                key: "saas",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/v1777862100/586339e6-d8d1-4ab6-962d-0efa5d5296af.png",
                techs: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS"],
                demo: "https://conecta-emprendedores.vercel.app/"
              },
              {
                key: "microservices",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/image_pfsvtg.png",
                techs: [".NET 10", "Microservices", "Docker", "YARP Gateway", "PostgreSQL", "Saga Pattern", "xUnit", "Cloud deploy (Neon, Render)"],
                github: "https://github.com/Nahuevp/E-Commerce-Microservices",
                demo: "https://ecommerce-microservices-ow4d.onrender.com/"
              },
              {
                key: "tracklass",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/image2_op6bbw.png",
                techs: ["Angular", ".NET Core", "PostgreSQL", "Angular Material","Cloud deploy (Neon, Render, Vercel)"],
                github: "https://github.com/Nahuevp/Tracklass",
                demo: "https://tracklass-five.vercel.app/dashboard"
              },
              {
                key: "rento",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/rento2_enuzvg.png",
                techs: ["Angular", ".NET Core", "PostgreSQL", "SCSS", "Cloud deploy (Neon, Render, Vercel)"],
                github: "https://github.com/Nahuevp/rento-car-rental-app",
                demo: "https://rento-car-rental-app.vercel.app/"
              },
              {
                key: "technicalTest",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/stockapp_qebmyo.png",
                techs: ["Angular", "Bootstrap", "Vercel"],
                github: "https://github.com/Nahuevp/prueba-tecnica",
                demo: "https://prueba-tecnica-roan.vercel.app/"
              },
            ].map((project) => {
              const proj = t.projects[
                project.key as keyof typeof t.projects
              ] as { name: string; desc: string }

              return (
                <div
                  key={project.key}
                  className={`group flex flex-col ${project.key === 'saas' ? 'md:col-span-2 featured-saas-card' : 'glass-card'}`}
                >
                  <div className={project.key === 'saas' ? 'card-inner' : 'flex flex-col h-full'}>
                    {/* Project Image */}
                    <div className={`relative w-full overflow-hidden ${project.key === 'saas' ? 'h-64 sm:h-80' : 'h-48'}`}>

                      <Image
                        src={project.image}
                        alt={project.key}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />

                    </div>

                    {/* Project Info */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
                      {project.key === 'saas' && (
                        <div className="badge-saas">
                          SaaS Platform
                        </div>
                      )}
                      <h3 className="text-lg sm:text-xl font-semibold mb-3">
                        {proj.name}
                      </h3>

                    <p className="text-sm sm:text-base text-foreground/70 mb-4 leading-relaxed flex-1">
                      {proj.desc}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techs.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs bg-muted/60 border border-border/40 rounded-md text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto pt-2">

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-border bg-muted/40 hover:bg-muted transition"
                        >
                          <Github className="w-4 h-4" />
                          {language === 'es' ? 'Código' : 'Code'}
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-md border border-border bg-muted/40 hover:bg-muted transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}

                    </div>
                  </div>
                </div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.section>

      <div className="section-divider" />

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-20 sm:py-32 px-4 sm:px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 section-title">{t.contact.title}</h2>
          <p className="text-lg sm:text-xl text-foreground/70 mb-12 text-balance">
            {t.contact.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <form onSubmit={sendEmail} className="max-w-xl mx-auto space-y-4">

              {/* Honeypot anti bots */}
              <input
                type="text"
                name="company"
                className="hidden"
              />

              <input
                name="name"
                type="text"
                placeholder={language === 'es' ? 'Nombre' : 'Name'}
                required
                className="form-input"
              />

              <input
                name="email"
                type="email"
                placeholder={language === 'es' ? 'Correo' : 'Email'}
                required
                className="form-input"
              />

              <textarea
                name="message"
                placeholder={language === 'es' ? 'Mensaje' : 'Message'}
                rows={4}
                maxLength={1000}
                required
                className="form-input"
              />

              <button
                type="submit"
                className="form-submit w-full"
              >
                {language === 'es' ? 'Enviar mensaje' : 'Send message'}
              </button>

            </form>
            <a
              href="https://github.com/Nahuevp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nahuel-viera-porta-518077281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border border-foreground/30 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 bg-muted/20 dark:bg-muted/5">
        <div className="max-w-6xl mx-auto text-center text-sm text-foreground/50">
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
