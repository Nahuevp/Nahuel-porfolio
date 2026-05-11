'use client'

import { Github, Linkedin, Mail, ExternalLink, Menu, X, Sparkles } from 'lucide-react'
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
      greeting: 'Hola, soy Nahuel',
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
      text1: "Soy estudiante avanzado de la Licenciatura en Informática orientado a la construcción de productos sólidos. Me especializo en el desarrollo Full Stack con Angular y .NET Core, diseñando arquitecturas escalables que priorizan el rendimiento y las buenas prácticas.",

      text2: "No me limito a escribir código; abordo el ciclo de vida completo del software. Desde el modelado de bases de datos y la creación de APIs REST o arquitecturas de Microservicios, hasta la implementación de interfaces de usuario modernas y el despliegue continuo en la nube.",

      text3: "A través de mis proyectos he construido y desplegado plataformas reales (como un SaaS o e-commerce distribuidos) resolviendo problemas de arquitectura, autenticación y despliegue. Me enfoco en entregar soluciones claras y mantenibles.",

      text4: "Busco integrarme a un equipo de desarrollo profesional donde pueda aplicar este enfoque orientado a producto, seguir elevando mis estándares técnicos y aportar valor desde el primer día.",
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
      tools: 'DevOps / Herramientas',
      learning: 'Explorando',
    },

    projects: {
      title: 'Proyectos Destacados',

      microservices: {
        name: 'E-Commerce Microservices',
        desc:
          'E-commerce full stack con arquitectura distribuida de 8 microservicios. El mayor desafío fue la orquestación en la nube: optimizamos el runtime de .NET para operar establemente en entornos de recursos limitados (512MB RAM) y desarrollamos un sistema de Warm-up Splash Screen para gestionar la resiliencia ante el cold start. Implementa Saga Pattern para la consistencia de datos, YARP como Gateway inteligente y seguridad centralizada con JWT y RBAC.',
      },

      tracklass: {
        name: 'Tracklass',
        desc:
          'Plataforma SaaS para gestión educativa y control financiero. El mayor desafío técnico fue el diseño de un motor analítico sobre PostgreSQL para la consolidación de ingresos y estados de deuda en tiempo real. Implementa una arquitectura por capas en .NET 8, optimizando el consumo de recursos mediante la delegación del procesamiento de reportes (PDF/Excel) al navegador (CSR). Integra notificaciones automatizadas vía WhatsApp para el seguimiento dinámico de actividades.',
      },

      rento: {
        name: 'Rento',
        desc:
          'Plataforma de alquiler de vehículos con motor de disponibilidad inteligente. El mayor desafío fue la implementación de una lógica de colisiones de fechas en el backend (.NET), permitiendo predecir la disponibilidad futura de cada unidad. Aplica Service-Oriented Architecture (SOA) y un set de pruebas unitarias que garantizan la integridad de las transacciones de reserva.',
      },

      technicalTest: {
        name: 'StockApp',
        desc:
          'Aplicación de gestión de inventario reactiva desarrollada como prueba técnica de alto rendimiento. Se enfoca en la gestión de estado local (In-Memory State Management) con validaciones avanzadas para prevenir duplicidad de datos. Presenta una interfaz minimalista construida con Bootstrap, priorizando la UX y la velocidad de interacción del usuario.',
      },

      saas: {
        name: 'Buscaló',
        desc:
          'Directorio centralizado de servicios y emprendimientos locales. Desarrollé una plataforma robusta que conecta a usuarios con emprendedores uruguayos, eliminando la fricción de búsqueda en redes sociales tradicionales. El sistema incluye un panel administrativo para moderación de contenido, gestión de membresías premium para negocios y un canal directo de contacto vía WhatsApp integrado para cada perfil. Diseñado con un enfoque en SEO y velocidad de carga extrema.',
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
      greeting: "Hey, I'm Nahuel",
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

      text1: "I am an advanced Computer Science student focused on building solid digital products. I specialize in Full Stack development with Angular and .NET Core, designing scalable architectures that prioritize performance and best practices.",

      text2: "I don't just write code; I handle the complete software lifecycle. From database modeling and creating REST APIs or Microservices architectures, to implementing modern user interfaces and managing continuous deployment in the cloud.",

      text3: "Through my projects, I have built and deployed real-world platforms (like a SaaS and distributed e-commerce), solving complex architecture, authentication, and deployment challenges. My focus is on delivering clean, maintainable solutions.",

      text4: "I am looking to join a professional development team where I can apply this product-oriented mindset, continue raising my technical standards, and contribute value from day one."
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
      tools: 'DevOps / Tools',
      learning: 'Exploring',
    },

    projects: {
      title: 'Featured Projects',

      microservices: {
        name: 'E-Commerce Microservices',
        desc:
          'Full-stack e-commerce with a distributed architecture of 8 microservices. The biggest challenge was cloud orchestration: we optimized the .NET runtime to operate stably in resource-constrained environments (512MB RAM) and developed a Warm-up Splash Screen system to manage resilience against cold start. It implements Saga Pattern for data consistency, YARP as an intelligent Gateway, and centralized security with JWT and RBAC.',
      },

      tracklass: {
        name: 'Tracklass',
        desc:
          'Full-stack SaaS for educational management and financial control. The main technical challenge was designing an analytical engine on PostgreSQL for real-time income consolidation and debt status tracking. It implements a layered architecture in .NET 8, optimizing resource consumption by delegating report generation (PDF/Excel) to the browser (CSR). Integrates automated WhatsApp notifications for dynamic activity tracking.',
      },

      rento: {
        name: 'Rento',
        desc:
          'Car rental platform featuring an intelligent availability engine. The main challenge was implementing date collision logic in the backend (.NET) to predict future availability for each vehicle. It follows Service-Oriented Architecture (SOA) principles and includes a suite of unit tests to ensure the integrity of booking transactions.',
      },

      technicalTest: {
        name: 'StockApp',
        desc:
          'Reactive inventory management application developed as a high-performance technical test. It focuses on in-memory state management with advanced validations to prevent data duplication. Features a minimalist interface built with Bootstrap, prioritizing UX and user interaction speed.',
      },

      saas: {
        name: 'Buscaló',
        desc:
          'Centralized directory for local services and businesses. I developed a robust platform connecting users with Uruguayan entrepreneurs, eliminating the friction of searching on traditional social networks. The system includes an administrative panel for content moderation, premium membership management for businesses, and a direct WhatsApp contact channel integrated into each profile. Designed with a focus on SEO and extreme loading speed.',
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
    { name: "Neon", logo: "/icons/neon.svg" },
    { name: "Supabase", logo: "/icons/supabase-logo-icon.svg" }
  ],

  learning: [
    { name: "React", logo: "/icons/react.svg" },
    { name: "Next.js", logo: "/icons/nextdotjs.svg" }
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
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center mb-8"
              >
                <div className="relative group">
                  {/* Ambient Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  
                  {/* The Unified Capsule */}
                  <div className="relative px-5 py-2 sm:px-7 sm:py-2.5 bg-muted/40 border border-foreground/10 rounded-full flex items-center gap-3 sm:gap-4 backdrop-blur-md">
                    
                    {/* Greeting Part */}
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 animate-pulse" />
                      <span className="text-base sm:text-lg font-medium text-foreground/90 tracking-wide whitespace-nowrap">
                        {t.hero.greeting}
                      </span>
                    </div>

                    {/* Elegant Separator */}
                    <div className="h-4 w-px bg-foreground/15" />

                    {/* Status Part */}
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold text-green-500/90 uppercase tracking-wider">
                        {language === 'es' ? 'Disponible' : 'Available'}
                      </span>
                    </div>

                  </div>
                </div>
              </motion.div>

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
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/v1778216711/5d81badb-715c-4a70-a661-bbdaf0bf4c46.png",
                techs: ["Next.js 16", "TypeScript", "Supabase", "Tailwind v4", "Resend"],
                demo: "https://buscalo-uy.vercel.app/"
              },
              {
                key: "microservices",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/image_pfsvtg.png",
                techs: [".NET 10", "Microservices", "Docker", "YARP Gateway", "PostgreSQL", "JWT & RBAC", "Saga Pattern", "xUnit", "RAM Optimization", "Cloud deploy (Neon, Render)", "Pulsetic (Monitoring)"],
                github: "https://github.com/Nahuevp/E-Commerce-Microservices",
                demo: "https://ecommerce-microservices-ow4d.onrender.com/"
              },
              {
                key: "tracklass",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/image2_op6bbw.png",
                techs: ["Angular 20", ".NET 8", "PostgreSQL", "Layered Architecture", "CSR Reporting", "WhatsApp API", "Angular Material", "Cloud deploy (Neon, Render, Vercel)"],
                github: "https://github.com/Nahuevp/Tracklass",
                demo: "https://tracklass-five.vercel.app/dashboard"
              },
              {
                key: "rento",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/rento2_enuzvg.png",
                techs: ["Angular", ".NET 8", "PostgreSQL", "Service Pattern", "Unit Testing (xUnit)", "Availability Logic", "Cloud deploy (Neon, Render, Vercel)"],
                github: "https://github.com/Nahuevp/rento-car-rental-app",
                demo: "https://rento-car-rental-app.vercel.app/"
              },
              {
                key: "technicalTest",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/stockapp_qebmyo.png",
                techs: ["Angular", "Reactive State", "Local Storage", "Bootstrap", "UX Design", "Vercel"],
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
                  className={`group flex flex-col h-full ${project.key === 'saas' ? 'md:col-span-2 featured-saas-card' : 'glass-card sm:min-h-[650px]'}`}
                >
                  <div className={project.key === 'saas' ? 'card-inner' : 'flex flex-col h-full'}>
                    {/* Project Image */}
                    <div className={`relative w-full overflow-hidden ${project.key === 'saas' ? 'h-64 sm:h-80' : 'h-48'}`}>

                      <Image
                        src={project.image}
                        alt={project.key}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
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
