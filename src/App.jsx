import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'

import finexpoImage1 from '../image/finexpo/image.png'
import finexpoImage2 from '../image/finexpo/image copy.png'
import finexpoImage3 from '../image/finexpo/image copy 2.png'
import stockflowImage1 from '../image/stockflow/image.png'
import stockflowImage2 from '../image/stockflow/image copy.png'
import stockflowImage3 from '../image/stockflow/image copy 2.png'
import photoboothImage1 from '../image/photobooth gojek/image.png'
import photoboothImage2 from '../image/photobooth gojek/image copy.png'
import photoboothImage3 from '../image/photobooth gojek/image copy 2.png'
import herminaImage1 from '../image/hermina run/image.png'
import herminaImage2 from '../image/hermina run/image copy.png'
import kaltimImage1 from '../image/kaltim adventures/image.png'
import kaltimImage2 from '../image/kaltim adventures/image copy.png'
import kaltimImage3 from '../image/kaltim adventures/image copy 2.png'
import dodolImage1 from '../image/dodol al arabi/image.png'
import dodolImage2 from '../image/dodol al arabi/image copy.png'
import dodolImage3 from '../image/dodol al arabi/image copy 2.png'

const capabilities = [
  {
    title: 'Frontend Engineering',
    description:
      'I build responsive interfaces with React, Next.js, and clean component-driven workflows focused on usability and clarity.',
  },
  {
    title: 'Backend And APIs',
    description:
      'I work with Laravel, databases, and system integrations to build reliable application logic behind real business processes.',
  },
  {
    title: 'Mobile And Cross-platform',
    description:
      'My work also spans React Native and Electron when products need mobile reach or desktop-oriented workflows.',
  },
  {
    title: 'System Analysis',
    description:
      'I enjoy translating requirements into implementation plans, technical decisions, and software that solves practical problems.',
  },
]

const highlights = [
  {
    value: '3+',
    label: 'years building web applications across product, internal, and event-driven use cases',
  },
  {
    value: '6',
    label: 'featured projects spanning marketplace, inventory, event, travel, and interactive products',
  },
  {
    value: '13+',
    label: 'tools across frontend, backend, mobile, desktop, databases, and delivery workflows',
  },
]

const projects = [
  {
    title: 'FinExpo',
    category: 'Event Commerce Platform',
    pitch:
      'An interactive event platform connecting exhibitors and visitors through products, promos, coupons, transactions, and QR-based redemption.',
    description:
      'Designed to support exhibition activity with smoother visitor interaction and merchant-side product management in one connected experience.',
    tags: ['Event Platform', 'Transactions', 'QR Scan', 'Visitor Flow'],
    images: [finexpoImage1, finexpoImage2, finexpoImage3],
  },
  {
    title: 'StockFlow',
    category: 'Inventory Management',
    pitch:
      'A stock management application built to track goods movement in and out of warehouses with real-time visibility.',
    description:
      'Focused on operational control, stock monitoring, and reducing the risk of loss, overstock, and shortages in business inventory workflows.',
    tags: ['Inventory', 'Real-time Monitoring', 'Operations', 'Business System'],
    images: [stockflowImage1, stockflowImage2, stockflowImage3],
  },
  {
    title: 'PhotoBooth Gojek',
    category: 'Interactive Experience',
    pitch:
      'An interactive photo booth application with themed filters and branded visual experiences for event engagement.',
    description:
      'Users can capture photos, apply creative frames and filters, then save or share them, making the product both playful and promotional.',
    tags: ['Interactive UI', 'Event Activation', 'Creative Filters', 'Social Sharing'],
    images: [photoboothImage1, photoboothImage2, photoboothImage3],
  },
  {
    title: 'Hermina Run',
    category: 'Event Registration Website',
    pitch:
      'An official event website for race registration and racepack purchasing with a straightforward user flow.',
    description:
      'Built to make registration and purchase steps easier, faster, and more reliable for participants joining the running event.',
    tags: ['Registration Flow', 'Racepack Purchase', 'Event Website', 'User-friendly UX'],
    images: [herminaImage1, herminaImage2],
  },
  {
    title: 'Kaltim Adventure Tours & Travel Services',
    category: 'Travel Management System',
    pitch:
      'A travel-focused system for ticket handling, trip scheduling, and invoice management for users and travel agents.',
    description:
      'The goal was to simplify booking and administrative workflows through an integrated application that supports practical business operations.',
    tags: ['Ticketing', 'Invoices', 'Travel Admin', 'Integrated Workflow'],
    images: [kaltimImage1, kaltimImage2, kaltimImage3],
  },
  {
    title: 'Dodol Al Arabi',
    category: 'Marketplace Platform',
    pitch:
      'An online marketplace for selling and ordering dodol products with integrated product, order, and transaction management.',
    description:
      'Built to expand product reach for sellers while keeping the shopping process simple and efficient for customers.',
    tags: ['Marketplace', 'E-commerce', 'Order Flow', 'Product Management'],
    images: [dodolImage1, dodolImage2, dodolImage3],
  },
]

const experiences = [
  {
    company: 'Lawencon Internasional',
    role: 'Front End Developer',
    period: '03/2025 - Present',
    summary:
      'Developing and maintaining financing application interfaces for PNM, including API integration and collaboration with backend, UI/UX, and business teams.',
  },
  {
    company: 'PT HK Teknologi',
    role: 'Senior Programmer',
    period: '09/2022 - 01/2025',
    summary:
      'Worked across web, mobile, backend, and system analysis on products including marketplace, finance, inventory, and AI-enabled applications.',
  },
  {
    company: 'PT Pupuk Kalimantan Timur',
    role: 'Fullstack Web Development Intern',
    period: '03/2021 - 09/2021',
    summary:
      'Built full-stack web applications around ticketing and internal business workflows using Laravel and Vue.js.',
  },
  {
    company: 'Mulawarman University',
    role: 'Laboratory Teaching Assistant',
    period: '2018 - 2020',
    summary:
      'Supported programming labs and helped students learn algorithms, OOP, data structures, and databases through practical sessions.',
  },
]

const techStack = [
  'React',
  'Next.js',
  'React Native',
  'Laravel',
  'Vue.js',
  'PHP',
  'MySQL',
  'SQL Server',
  'Go',
  'Docker',
  'Electron',
  'Tailwind CSS',
  'Git',
  'Reporting Services',
]

const contactItems = [
  ['Location', 'Jakarta, Indonesia'],
  ['Email', 'fahmi.adr46@gmail.com', 'mailto:fahmi.adr46@gmail.com'],
  ['Phone', '+62 821 5340 4772', 'tel:+6282153404772'],
  ['LinkedIn', '/in/fahmi-adrian', 'https://www.linkedin.com/in/fahmi-adrian/'],
]

const initialForm = {
  name: '',
  email: '',
  note: '',
}

const shellClass = 'mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-[72px]'
const pillClass =
  'inline-flex w-fit items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-2 text-[0.76rem] uppercase tracking-[0.12em] text-sky-100'
const secondaryPillClass =
  'inline-flex w-fit items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-[0.76rem] uppercase tracking-[0.12em] text-violet-100'
const mutedTextClass = 'text-slate-400 leading-7'
const actionClass =
  'inline-flex min-h-[50px] items-center justify-center rounded-full border px-[18px] transition duration-200'
const primaryActionClass =
  `${actionClass} border-transparent bg-[linear-gradient(135deg,#77b9ff,#4e8fff)] font-semibold text-[#04101d]`
const secondaryActionClass = `${actionClass} border-white/10 bg-white/[0.03] text-white`
const sectionTitleClass =
  'mb-3 mt-4 text-[clamp(2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white'

function Pill({ children, variant = 'primary' }) {
  return <span className={variant === 'secondary' ? secondaryPillClass : pillClass}>{children}</span>
}

function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-7 flex flex-col items-start justify-between gap-7 xl:flex-row xl:items-end">
      <div>
        <Pill>{label}</Pill>
        <h2 className={sectionTitleClass}>{title}</h2>
      </div>
      {description ? <p className="max-w-[48ch] text-slate-400">{description}</p> : null}
    </div>
  )
}

function ContactItem({ label, value, href }) {
  return (
    <div className="border-t border-white/10 py-4">
      <span className="text-sm text-slate-400">{label}</span>
      {href ? (
        <a
          className="mt-1 block font-semibold text-white transition hover:text-sky-100"
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
        >
          {value}
        </a>
      ) : (
        <strong className="mt-1 block font-semibold text-white">{value}</strong>
      )}
    </div>
  )
}

function ProjectCard({ project, index, onOpen }) {
  return (
    <article className="grid content-start gap-[18px]">
      <button
        className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[rgba(10,18,33,0.8)] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
        type="button"
        onClick={() => onOpen(project)}
      >
        <img
          className="block h-[320px] w-full bg-[linear-gradient(180deg,rgba(9,15,28,0.96),rgba(7,13,24,0.98))] object-contain object-center transition duration-200 group-hover:scale-[1.02] md:h-[440px]"
          src={project.images[0]}
          alt={`${project.title} preview`}
        />
        <span className="absolute bottom-[18px] right-[18px] rounded-full border border-white/10 bg-[rgba(6,10,20,0.72)] px-3 py-2 text-[0.82rem] tracking-[0.04em] text-sky-50">
          Open gallery
        </span>
      </button>

      <div className="max-w-[56ch]">
        <Pill variant="secondary">{project.category}</Pill>
        <span className="mb-3 mt-3 block text-sm tracking-[0.12em] text-white/45">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mb-2.5 text-[1.2rem] font-medium text-white">{project.title}</h3>
        <p className="leading-7 text-slate-200">{project.pitch}</p>
        <p className="mt-3 leading-7 text-slate-400">{project.description}</p>
        <div className="mt-[18px] flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/[0.07] px-3.5 py-2 text-[0.92rem] text-sky-100"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ExperienceCard({ item }) {
  return (
    <article className="border-t border-white/10 pt-[18px]">
      <div className="mb-2.5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="mb-1 text-[1.2rem] font-medium text-white">{item.role}</h3>
          <p className="text-slate-400">{item.company}</p>
        </div>
        <span className="text-sm text-slate-400 sm:whitespace-nowrap">{item.period}</span>
      </div>
      <p className={mutedTextClass}>{item.summary}</p>
    </article>
  )
}

function FormField({ label, name, value, onChange, placeholder, type = 'text', multiline = false }) {
  const sharedClassName =
    'w-full rounded-[18px] border border-white/10 bg-white/[0.03] px-4 py-[15px] text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300/50 focus:ring-4 focus:ring-sky-300/10'

  return (
    <label className="grid gap-2">
      <span className="text-[0.94rem] text-sky-100">{label}</span>
      {multiline ? (
        <textarea
          className={`${sharedClassName} resize-y`}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          rows="5"
        />
      ) : (
        <input
          className={sharedClassName}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      )}
    </label>
  )
}

function GalleryModal({ gallery, onClose, onPrevious, onNext, onSelect }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-6">
      <div className="absolute inset-0 bg-[#01050c]/80 backdrop-blur-md" onClick={onClose} />
      <div className="relative max-h-[90vh] w-full max-w-[1080px] overflow-auto rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,29,0.98),rgba(6,10,20,0.98))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
        <div className="mb-[18px] flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-1.5 text-[0.88rem] uppercase tracking-[0.08em] text-slate-400">Project Gallery</p>
            <h3 className="text-[1.2rem] font-medium text-white">{gallery.title}</h3>
          </div>
          <button
            className="min-h-[42px] rounded-full border border-white/10 bg-white/[0.03] px-3.5 text-white transition hover:border-white/20"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,28,0.96),rgba(7,13,24,0.98))]">
          <button
            className="absolute left-4 top-1/2 z-10 min-h-11 -translate-y-1/2 rounded-full border border-white/10 bg-[#040913]/70 px-3.5 text-white backdrop-blur-md transition hover:border-white/20 max-sm:bottom-3 max-sm:left-3 max-sm:top-auto max-sm:translate-y-0"
            type="button"
            onClick={onPrevious}
          >
            Prev
          </button>
          <img
            className="block max-h-[62vh] w-full object-contain object-center"
            src={gallery.images[gallery.selectedIndex]}
            alt={`${gallery.title} screenshot ${gallery.selectedIndex + 1}`}
          />
          <button
            className="absolute right-4 top-1/2 z-10 min-h-11 -translate-y-1/2 rounded-full border border-white/10 bg-[#040913]/70 px-3.5 text-white backdrop-blur-md transition hover:border-white/20 max-sm:bottom-3 max-sm:right-3 max-sm:top-auto max-sm:translate-y-0"
            type="button"
            onClick={onNext}
          >
            Next
          </button>
        </div>

        <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3">
          {gallery.images.map((image, index) => (
            <button
              className={`overflow-hidden rounded-2xl border bg-white/[0.03] ${
                index === gallery.selectedIndex
                  ? 'border-sky-300/60 shadow-[0_0_0_2px_rgba(119,185,255,0.12)]'
                  : 'border-white/10'
              }`}
              key={image}
              type="button"
              onClick={() => onSelect(index)}
            >
              <img
                className="block h-[100px] w-full object-cover object-center"
                src={image}
                alt={`${gallery.title} thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [activeGallery, setActiveGallery] = useState(null)

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  async function handleSubmit(event) {
    event.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Add the EmailJS env values and try again.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: 'idle', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          note: formData.note,
        },
        { publicKey },
      )

      setFormData(initialForm)
      setStatus({ type: 'success', message: 'Your message has been sent successfully.' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending your message. Please try again.',
      })
    } finally {
      setIsSending(false)
    }
  }

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function openGallery(project) {
    setActiveGallery({ title: project.title, images: project.images, selectedIndex: 0 })
  }

  function closeGallery() {
    setActiveGallery(null)
  }

  function selectGalleryImage(index) {
    setActiveGallery((current) => (current ? { ...current, selectedIndex: index } : current))
  }

  function showPreviousImage() {
    setActiveGallery((current) => {
      if (!current) {
        return current
      }

      return {
        ...current,
        selectedIndex: (current.selectedIndex - 1 + current.images.length) % current.images.length,
      }
    })
  }

  function showNextImage() {
    setActiveGallery((current) => {
      if (!current) {
        return current
      }

      return {
        ...current,
        selectedIndex: (current.selectedIndex + 1) % current.images.length,
      }
    })
  }

  useEffect(() => {
    if (!activeGallery) {
      return undefined
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeGallery()
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage()
      }

      if (event.key === 'ArrowRight') {
        showNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeGallery])

  return (
    <>
      <div className="relative min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#06101d_0%,#030711_100%)] text-[#eef5ff]">
        <div className="pointer-events-none fixed -left-56 -top-48 h-[38rem] w-[38rem] rounded-full bg-[#275eea]/20 blur-[95px]" />
        <div className="pointer-events-none fixed -right-60 top-80 h-[38rem] w-[38rem] rounded-full bg-[#7646ff]/15 blur-[95px]" />

        <header className={`${shellClass} sticky top-0 z-20 flex items-center justify-between gap-5 py-6 backdrop-blur-md`}>
          <a className="text-base font-bold tracking-[-0.03em] text-white transition hover:text-sky-100" href="#top">
            Fahmi Adrian
          </a>

          <nav className="flex flex-wrap gap-5 text-sm text-slate-400">
            <a className="transition hover:text-white" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </header>

        <main id="top">
          <section className={`${shellClass} grid min-h-[calc(100vh-84px)] items-center gap-8 py-6 pb-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:gap-16 lg:pb-[72px]`}>
            <div className="max-w-[760px]">
              <Pill>Fullstack Developer</Pill>
              <h1 className="mt-[18px] max-w-[10ch] text-[clamp(3.6rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
                Building digital products that feel clear, useful, and reliable.
              </h1>
              <p className="max-w-[60ch] text-[1.08rem] leading-8 text-slate-400">
                I am Fahmi Adrian, a fullstack developer based in Jakarta, Indonesia. I have over 3 years of
                experience building scalable web applications, working across React on the frontend and Laravel on the
                backend to deliver products shaped by real business needs.
              </p>

              <div className="mt-7 flex flex-wrap gap-3.5">
                <a className={primaryActionClass} href="#projects">
                  Explore projects
                </a>
                <a className={secondaryActionClass} href="#contact">
                  Send a message
                </a>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {highlights.map((item) => (
                  <article key={item.value + item.label}>
                    <strong className="mb-2 block text-[clamp(1.9rem,3vw,2.8rem)] font-semibold tracking-[-0.05em] text-white">
                      {item.value}
                    </strong>
                    <span className="text-sm leading-6 text-slate-400">{item.label}</span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="w-full max-w-[460px] justify-self-start lg:justify-self-end">
              <div className="mx-auto mb-7 grid h-[clamp(220px,26vw,340px)] w-[clamp(220px,26vw,340px)] place-items-center rounded-full border border-sky-400/15 bg-[linear-gradient(135deg,rgba(119,185,255,0.28),rgba(118,70,255,0.22))] p-[16%] shadow-[0_30px_80px_rgba(0,0,0,0.28)] [transform:rotate(-8deg)]">
                <div className="grid h-full w-full place-items-center rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(19,31,57,0.95),rgba(7,14,28,0.96))] [transform:rotate(8deg)]">
                  <span className="text-[clamp(2.8rem,6vw,5rem)] font-bold tracking-[-0.08em] text-white">FA</span>
                </div>
              </div>

              <Pill>Current Focus</Pill>
              <h2 className={sectionTitleClass}>Shipping financing product interfaces with modern frontend workflows.</h2>
              <p className={mutedTextClass}>
                Currently working through Lawencon Internasional for PNM, building and maintaining financing
                application interfaces, handling API integration, and collaborating closely with backend, design, and
                business teams.
              </p>

              <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
                {contactItems.map(([label, value, href]) => (
                  <ContactItem key={label} label={label} value={value} href={href} />
                ))}
              </div>
            </aside>
          </section>

          <section className={`${shellClass} pb-6 pt-[72px]`} id="about">
            <SectionHeader
              label="Profile"
              title="A fullstack profile, not a resume page."
              description="My work covers interface development, backend implementation, mobile-oriented delivery, and system thinking. I care about fast iteration, clear problem solving, and building products that hold up in real business environments."
            />

            <div className="mb-8 max-w-[780px]">
              <p className="text-[clamp(1.2rem,2vw,1.5rem)] leading-8 text-slate-400">
                I enjoy building products that are practical first: systems people can actually use, maintain, and
                trust in daily work.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((item) => (
                <article className="border-t border-white/10 pt-[18px]" key={item.title}>
                  <h3 className="mb-2.5 text-[1.2rem] font-medium text-white">{item.title}</h3>
                  <p className={mutedTextClass}>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={`${shellClass} pb-6 pt-[72px]`} id="projects">
            <SectionHeader
              label="Featured Projects"
              title="Selected products and systems I helped bring to life."
              description="These projects cover interactive event products, business systems, marketplaces, and workflow-heavy applications across different domains."
            />

            <div className="grid gap-7 xl:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} index={index} project={project} onOpen={openGallery} />
              ))}
            </div>
          </section>

          <section className={`${shellClass} grid gap-9 pb-6 pt-[72px] xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]`} id="experience">
            <div className="max-w-[460px] border-t border-white/10 pt-[18px]">
              <Pill>Experience</Pill>
              <h2 className={sectionTitleClass}>Professional background in a compact view.</h2>
              <p className={mutedTextClass}>
                I have worked across frontend delivery, fullstack implementation, internal business systems, event
                products, and technical mentoring.
              </p>
            </div>

            <div className="grid gap-5">
              {experiences.map((item) => (
                <ExperienceCard item={item} key={item.company + item.role} />
              ))}
            </div>
          </section>

          <section className={`${shellClass} pb-[72px] pt-[72px]`} id="stack">
            <SectionHeader
              label="Stack"
              title="Tools I use across delivery."
              description="My toolkit spans frontend, backend, mobile, desktop, database, and team delivery workflows."
            />

            <div className="flex flex-wrap gap-2.5">
              {techStack.map((skill) => (
                <span
                  className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/[0.07] px-3.5 py-2 text-[0.92rem] text-sky-100"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section
            className={`${shellClass} mt-16 grid gap-12 border-t border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] py-[72px] xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]`}
            id="contact"
          >
            <div className="max-w-[480px]">
              <Pill>Contact</Pill>
              <h2 className={sectionTitleClass}>Let&apos;s talk about the next product or system.</h2>
              <p className={mutedTextClass}>
                Use the form to send a note directly to my inbox. The form is wired for EmailJS and reads its
                credentials from environment variables.
              </p>
            </div>

            <form className="grid gap-4" onSubmit={handleSubmit}>
              <FormField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
              <FormField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <FormField
                label="Note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Tell me about your project, role, or idea."
                multiline
              />

              <button className={`${primaryActionClass} w-full sm:w-auto`} disabled={isSending} type="submit">
                {isSending ? 'Sending...' : 'Send message'}
              </button>

              {status.message ? (
                <p className={`m-0 text-[0.95rem] ${status.type === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {status.message}
                </p>
              ) : null}
            </form>
          </section>
        </main>

        <footer className={`${shellClass} flex flex-col gap-3 py-6 pb-9 text-slate-400 sm:flex-row sm:items-center sm:justify-between`}>
          <span>Fahmi Adrian</span>
          <span>Fullstack Developer</span>
        </footer>
      </div>

      {activeGallery ? (
        <GalleryModal
          gallery={activeGallery}
          onClose={closeGallery}
          onNext={showNextImage}
          onPrevious={showPreviousImage}
          onSelect={selectGalleryImage}
        />
      ) : null}
    </>
  )
}

export default App
