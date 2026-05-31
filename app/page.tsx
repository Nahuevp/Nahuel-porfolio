'use client'

import { Github, Linkedin, Mail, ExternalLink, Menu, X, Sparkles, Copy, Check, GraduationCap } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import emailjs from "@emailjs/browser"
import { Download } from "lucide-react"
import { motion } from "framer-motion"

type Language = 'es' | 'en'

const content = {
  es: {
    nav: 'Nahuel Viera — Desarrollador de Software',
    common: {
      coldStartNotice: 'Esta demo se encuentra en infraestructura gratuita y puede tardar ~30s en iniciar por "Cold Start".',
      optimizedNotice: 'Demo optimizada: Cold start mitigado mediante monitoreo activo 24/7.',
      instantNotice: 'Carga instantánea: Aplicación puramente frontend (SPA) sin demoras de servidor.',
      warmedUpNotice: 'Servicios activos: La demo cargará instantáneamente.',
    },

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
      text1: "Soy estudiante avanzado de la Licenciatura en Informática, apasionado por la ingeniería de software y la resolución de problemas. Mi enfoque principal es el desarrollo Full Stack utilizando .NET, Angular y PostgreSQL/SQL Server, y también cuento con experiencia práctica construyendo aplicaciones modernas con React y Next.js. Busco desarrollar soluciones mantenibles, eficientes y bien estructuradas.",

      text2: "Para mí, el desarrollo no termina en la escritura de código; me interesa comprender el ciclo de vida completo de una aplicación. Disfruto especialmente trabajar en el diseño de APIs REST, el modelado de datos, la lógica de negocio y la organización del software, además de la integración de interfaces modernas. A través de proyectos personales y académicos, he trabajado en aplicaciones tipo SaaS y e-commerce, enfrentando desafíos relacionados con autenticación, estructura de aplicaciones y despliegues básicos en la nube.",

      text3: "Además, integro herramientas de Inteligencia Artificial y automatización en mi flujo de trabajo para optimizar productividad, aprendizaje y desarrollo de soluciones.",

      text4: "Actualmente busco mi primera oportunidad profesional en IT como desarrollador, donde pueda aportar mi capacidad analítica, seguir creciendo técnicamente y ganar experiencia en proyectos de impacto real.",
    },

    languages: {
      title: 'Idiomas',
      spanish: 'Español — Nativo',
      english: 'Inglés — Nivel B2 (Certificación ECCE)',
      englishDesc:
        'Lectura técnica y comunicación fluida en entornos de desarrollo.',
    },

    tech: {
      title: 'Stack Tecnológico',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Bases de Datos',
      tools: 'DevOps / Herramientas',
      learning: 'Ampliando stack',
    },

    projects: {
      title: 'Proyectos Destacados',

      microservices: {
        name: 'E-Commerce Microservices',
        desc:
          'E-commerce full stack basado en una arquitectura distribuida de 8 microservicios. El principal desafío fue optimizar el consumo de recursos en entornos cloud limitados (512MB RAM) y mitigar el impacto del cold start en servicios serverless. Implementa Saga Pattern para garantizar consistencia de datos, YARP como API Gateway y seguridad centralizada mediante JWT y RBAC.',
      },

      tracklass: {
        name: 'Tracklass',
        desc:
          'Plataforma SaaS para gestión educativa y control financiero. El mayor desafío técnico fue el diseño de lógica financiera sobre PostgreSQL para consolidación de ingresos y estados de deuda en tiempo real. Implementa una arquitectura por capas en .NET 8, optimizando el consumo de recursos mediante la delegación de reportes (PDF/Excel) al navegador (CSR). Integra notificaciones automatizadas vía WhatsApp para el seguimiento dinámico de actividades.',
      },

      rento: {
        name: 'Rento',
        desc:
          'Plataforma de alquiler de vehículos con motor de disponibilidad inteligente. El principal desafío fue implementar lógica de colisiones de fechas en el backend (.NET). Aplica arquitectura orientada a servicios (SOA) y pruebas unitarias para garantizar integridad en las transacciones de reserva.',
      },

      technicalTest: {
        name: 'Nexus Inventory',
        desc:
          'Sistema de gestión de inventario que inicié como una prueba técnica y decidí refactorizar por completo para aplicar conocimientos avanzados. Implementé una arquitectura reactiva con Angular Signals y un rediseño total estilo SaaS, transformando una herramienta simple en un panel de control empresarial con métricas de valor real y alto rendimiento.',
      },

      saas: {
        name: 'Buscaló – Plataforma SaaS de Conexión de Negocios',
        desc:
          'Plataforma web SaaS de alto rendimiento diseñada para conectar usuarios con emprendedores y servicios locales. Desarrollada con arquitectura Server-First en Next.js 16 y Supabase, elimina la fricción en la búsqueda y contratación directa a través de integraciones ágiles de WhatsApp y redes sociales. El sistema incluye un panel de administración robusto para moderación en tiempo real, suscripciones con planes de membresía premium, analíticas de conversión de leads y búsqueda inteligente optimizada en base de datos.',
      },
    },

    contact: {
      title: 'Ponte en contacto',
      subtitle:
        'Siempre estoy interesado en escuchar sobre nuevas oportunidades o proyectos interesantes.',
      email: 'bnZpZXJhODQxQGdtYWlsLmNvbQ==', // Base64 protected
    },

    footer:
      '© 2026 Nahuel Viera — Full Stack Developer (.NET & Angular)',
  },

  en: {
    nav: 'Nahuel Viera — Software Developer',
    common: {
      coldStartNotice: 'This demo is on free tier infrastructure and may take ~30s to start due to "Cold Start".',
      optimizedNotice: 'Optimized demo: Cold start mitigated via active 24/7 monitoring.',
      instantNotice: 'Instant load: Pure frontend application (SPA) with no server delays.',
      warmedUpNotice: 'Services active: The demo will load instantly.',
    },

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

      text1: "Advanced Computer Science student with a strong technical foundation in the .NET and Angular ecosystem. Passionate about software architecture and best practices, with practical experience in developing monolithic and microservices applications through personal projects. I stand out for my analytical capacity and my focus on creating maintainable, robust, and efficient solutions.",

      text2: "I don't just write code; I handle the complete software lifecycle. From database modeling and creating REST APIs or Microservices architectures, to implementing modern user interfaces and managing continuous deployment in the cloud.",

      text3: "Through my projects, I have built and deployed real-world platforms (like a SaaS and distributed e-commerce), solving complex architecture, authentication, and deployment challenges. My focus is on delivering clean, maintainable solutions.",

      text4: "I am looking to join a professional development team where I can apply this product-oriented mindset, continue raising my technical standards, and contribute value from day one."
    },

    languages: {
      title: 'Languages',
      spanish: 'Spanish — Native',
      english: 'English — B2 (ECCE Certification)',
      englishDesc:
        'Technical documentation reading and fluent communication in dev environments.',
    },

    tech: {
      title: 'Tech Stack',
      backend: 'Backend',
      frontend: 'Frontend',
      databases: 'Databases',
      tools: 'DevOps / Tools',
      learning: 'Expanding stack',
    },

    projects: {
      title: 'Featured Projects',

      microservices: {
        name: 'E-Commerce Microservices',
        desc:
          'Full-stack e-commerce based on a distributed architecture of 8 microservices. The main challenge was optimizing resource consumption in constrained cloud environments (512MB RAM) and mitigating cold start impact in serverless services. It implements Saga Pattern to guarantee data consistency, YARP as an API Gateway, and centralized security through JWT and RBAC.',
      },

      tracklass: {
        name: 'Tracklass',
        desc:
          'SaaS platform for educational management and financial control. The major technical challenge was the design of financial logic on PostgreSQL for real-time income consolidation and debt status tracking. It implements a layered architecture in .NET 8, optimizing resource consumption by delegating reports (PDF/Excel) to the browser (CSR). Integrates automated WhatsApp notifications for dynamic activity tracking.',
      },

      rento: {
        name: 'Rento',
        desc:
          'Car rental platform featuring an intelligent availability engine. The main challenge was implementing date collision logic in the backend (.NET). It follows Service-Oriented Architecture (SOA) and includes unit tests to ensure the integrity of booking transactions.',
      },

      technicalTest: {
        name: 'Nexus Inventory',
        desc:
          'Inventory management system that started as a technical test and I decided to fully refactor to apply advanced knowledge. I implemented a reactive architecture with Angular Signals and a total SaaS-style redesign, transforming a simple tool into an enterprise dashboard with real value metrics and high performance.',
      },

      saas: {
        name: 'Buscaló – SaaS Business Connection Platform',
        desc:
          'High-performance SaaS web platform designed to connect users with local entrepreneurs and services. Developed using a Server-First architecture with Next.js 16 and Supabase, it eliminates friction in searching and direct hiring through agile WhatsApp and social media integrations. The system features a robust admin panel for real-time moderation, premium membership subscription plans, lead conversion analytics, and database-optimized smart search.',
      },
    },

    contact: {
      title: 'Get In Touch',
      subtitle:
        'Always interested in hearing about new opportunities or interesting projects.',
      email: 'bnZpZXJhODQxQGdtYWlsLmNvbQ==', // Base64 protected
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
    { name: "JavaScript", logo: "/icons/javascript.svg" },
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
  const [emailCopied, setEmailCopied] = useState(false)
  const [isWarmingUp, setIsWarmingUp] = useState(true)
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

  const handleCopyEmail = () => {
    const decodedEmail = atob(t.contact.email)
    navigator.clipboard.writeText(decodedEmail)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }


  useEffect(() => {
    setMounted(true)
    // Forzamos el modo oscuro por defecto porque la paleta resalta mejor
    setIsDark(true)
    document.documentElement.classList.add('dark')

    // Cold Start Mitigation: Wake up backends on Render
    const backends = [
      "https://ecommerce-microservices-ow4d.onrender.com/",
      "https://rento-car-rental-app-backend.onrender.com/api/cars",
      "https://tracklass.onrender.com"
    ]
    
    backends.forEach(url => {
      fetch(url, { mode: 'no-cors' }).catch(() => {})
    })

    const timer = setTimeout(() => {
      setIsWarmingUp(false)
    }, 30000)

    return () => clearTimeout(timer)
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
                    ? "/cv/Nahuel_Viera_Software_Developer_CV.pdf"
                    : "/cv/Nahuel-Viera-CV-FullStack-Developer.pdf"
                }
                download={
                  language === "es"
                    ? "Nahuel_Viera_Software_Developer_CV.pdf"
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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-16 section-title">{t.about.title}</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Narrative Column */}
            <div className="lg:col-span-2 space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
              <p>{t.about.text3}</p>
              <p className="font-medium text-foreground/90 text-lg sm:text-xl">{t.about.text4}</p>
            </div>

            {/* Formal Data Column (Education & Languages) */}
            <div className="space-y-10">
              {/* Education */}
              <div className="glass-card p-6 sm:p-7 border-l-4 border-l-[#10b981]">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-[#10b981]" />
                  {language === 'es' ? 'Educación' : 'Education'}
                </h3>
                <div className="space-y-2">
                  <p className="text-base font-semibold text-foreground/90 leading-tight">
                    {language === 'es'
                      ? 'Licenciatura en Informática — Universidad de la Empresa (UDE)'
                      : "Bachelor's Degree in Computer Science — Universidad de la Empresa (UDE)"}
                  </p>
                  <p className="text-sm text-foreground/60">
                    {language === 'es' ? '2022 - Actualidad (Tesis en curso)' : '2022 — Present (Thesis in progress)'}
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div className="glass-card p-6 sm:p-7 border-l-4 border-l-blue-500">
                <h3 className="text-xl font-bold mb-6">
                  {t.languages.title}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <img src="/flags/es.svg" alt="Español" className="w-5 h-5 rounded-sm shadow-sm" />
                    <p className="text-base text-foreground/80 font-medium">
                      {t.languages.spanish}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <img src="/flags/gb.svg" alt="English" className="w-5 h-5 rounded-sm shadow-sm" />
                      <p className="text-base text-foreground/80 font-medium">
                        {t.languages.english}
                      </p>
                    </div>
                    <p className="text-sm text-foreground/70 ml-8 mt-1 leading-relaxed">
                      {t.languages.englishDesc}
                    </p>
                  </div>
                </div>
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
                techs: [".NET 10", "Microservices", "Docker", "YARP Gateway", "PostgreSQL", "JWT & RBAC", "Saga Pattern", "xUnit", "RAM Optimization", "Cloud deploy (Neon, Render)"],
                github: "https://github.com/Nahuevp/E-Commerce-Microservices",
                demo: "https://ecommerce-microservices-ow4d.onrender.com/",
                isFreeTier: true
              },
              {
                key: "tracklass",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/image2_op6bbw.png",
                techs: ["Angular 20", ".NET 8", "PostgreSQL", "Layered Architecture", "CSR Reporting", "WhatsApp API", "Angular Material", "Cloud deploy (Neon, Render, Vercel)"],
                github: "https://github.com/Nahuevp/Tracklass",
                demo: "https://tracklass-five.vercel.app/dashboard",
                isFreeTier: true
              },
              {
                key: "rento",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/w_600,f_auto,q_auto/rento2_enuzvg.png",
                techs: ["Angular", ".NET 8", "PostgreSQL", "Service Pattern", "Unit Testing (xUnit)", "Availability Logic", "Cloud deploy (Neon, Render, Vercel)"],
                github: "https://github.com/Nahuevp/rento-car-rental-app",
                demo: "https://rento-car-rental-app.vercel.app/",
                isFreeTier: true
              },
              {
                key: "technicalTest",
                image: "https://res.cloudinary.com/dclt3q5lo/image/upload/v1778917922/d0c132fd-9736-4175-ab91-66d297809dba.png",
                techs: ["Angular 20", "Signals", "Tailwind v4", "Reactive State", "Vercel"],
                github: "https://github.com/Nahuevp/prueba-tecnica",
                demo: "https://prueba-tecnica-roan.vercel.app/",
                isInstant: true
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

                    <p className="text-sm sm:text-base text-foreground/70 mb-4 leading-relaxed min-h-[210px]">
                      {proj.desc}
                    </p>

                    {(project as any).isFreeTier && (
                      isWarmingUp ? (
                        <div className="flex items-center gap-2 mb-4 p-2 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] sm:text-xs font-medium min-h-[60px]">
                          <span className="animate-pulse flex-shrink-0">⚠️</span>
                          <span>{(t as any).common.coldStartNotice}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 mb-4 p-2 rounded-md bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] sm:text-xs font-medium min-h-[60px]">
                          <span className="flex-shrink-0">✅</span>
                          <span>{(t as any).common.warmedUpNotice}</span>
                        </div>
                      )
                    )}

                    {(project as any).isOptimized && (
                      <div className="flex items-center gap-2 mb-4 p-2 rounded-md bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] sm:text-xs font-medium min-h-[60px]">
                        <span className="flex-shrink-0">✅</span>
                        <span>{(t as any).common.optimizedNotice}</span>
                      </div>
                    )}

                    {(project as any).isInstant && (
                      <div className="flex items-center gap-2 mb-4 p-2 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] sm:text-xs font-medium min-h-[60px]">
                        <span className="flex-shrink-0">⚡</span>
                        <span>{(t as any).common.instantNotice}</span>
                      </div>
                    )}

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

          <div className="flex flex-col gap-12 items-center">
            {/* Form */}
            <form onSubmit={sendEmail} className="w-full max-w-xl space-y-4">
              <input type="text" name="company" className="hidden" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>
              <textarea
                name="message"
                placeholder={language === 'es' ? 'Mensaje' : 'Message'}
                rows={4}
                maxLength={1000}
                required
                className="form-input"
              />
              <button type="submit" className="form-submit w-full">
                {language === 'es' ? 'Enviar mensaje' : 'Send message'}
              </button>
            </form>

            <div className="w-full max-w-2xl">
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
                {/* Email Copy Button (Social Style) */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/10 rounded-xl font-medium hover:bg-muted transition-all glass-card group relative"
                >
                  {emailCopied ? (
                    <Check className="w-5 h-5 text-[#10b981]" />
                  ) : (
                    <Mail className="w-5 h-5" />
                  )}
                  <span className="min-w-[100px]">
                    {emailCopied 
                      ? (language === 'es' ? '¡Copiado!' : 'Copied!') 
                      : (language === 'es' ? 'Copiar Email' : 'Copy Email')}
                  </span>
                </button>

                <a
                  href="https://github.com/Nahuevp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/10 rounded-xl font-medium hover:bg-muted transition-all glass-card"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/nahuel-viera-porta-518077281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/10 rounded-xl font-medium hover:bg-muted transition-all glass-card"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 bg-muted/20 dark:bg-muted/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-foreground/50">
          <img src="/favicon-nv.png" alt="Logo" className="w-5 h-5 grayscale opacity-50" />
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  )
}
