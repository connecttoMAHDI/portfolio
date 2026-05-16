export const siteMark = 'M.'

export const headerCta = {
  label: "Let's Work Together",
  href: '#contact',
}

export const navLinks = [
  {
    label: 'Work',
    href: '#selected-work',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Process',
    href: '#process',
  },
  {
    label: 'Proof',
    href: '#proof',
  },
  {
    label: 'FAQ',
    href: '#faq',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export const heroCopy = {
  eyebrow: "Hi, I'm MAHDI",
  headline: ['Web Developer', 'crafting digital', 'experiences.'],
  description:
    'I build clean, responsive, and high-performing websites that feel calm, editorial, and built to last.',
  primaryCta: {
    label: 'View My Work',
    href: '#selected-work',
  },
  secondaryCta: {
    label: 'About Me',
    href: '#about',
  },
}

export const heroImage = {
  src: '/assets/hero-image.jpg',
  alt: 'Editorial portrait of the featured developer in soft natural light',
}

export const logos = ['Vercel', 'Webflow', 'Framer', 'Next.js', 'Tailwind', 'Supabase']

export const selectedWorkIntro = {
  eyebrow: 'Our Work',
  title: 'Selected Work',
  description:
    'We partner with ambitious brands to design and build digital experiences that are beautiful, functional, and built to perform.',
  cta: {
    label: 'View All Projects',
    href: 'mailto:hello@design-lab.dev?subject=Portfolio%20projects',
  },
}

export const proofIntro = {
  eyebrow: 'Proof',
  title: ['Good work,', 'remembered.'],
  description: "A few words from people I've worked with, plus the signals that matter most.",
}

export const featuredTestimonial = {
  quote: 'Mahdi translated our rough idea into a clean, fast website that felt exactly right.',
  author: 'Aurelia Tan',
  role: 'Founder, Aurelia Studio',
}

export const proofSignals = [
  {
    number: '01',
    title: 'Clear communication',
    description: "You're always in the loop, with updates that are easy to follow.",
  },
  {
    number: '02',
    title: 'Fast delivery',
    description: 'Thoughtful planning and focus that keep projects moving.',
  },
  {
    number: '03',
    title: 'Clean handoff',
    description: 'Organized files and clear docs so your team can move forward with confidence.',
  },
  {
    number: '04',
    title: 'Long-term support',
    description: 'Ongoing care and improvements to keep your product strong over time.',
  },
]

export const faqIntro = {
  eyebrow: 'FAQ',
  title: ['Questions,', 'answered.'],
  description: 'Anything else? Email is the fastest way, replies within one business day.',
  cta: {
    label: 'hi@mahdi.dev',
    href: 'mailto:hi@mahdi.dev',
  },
}

export const faqItems = [
  {
    id: 'project-cost',
    question: 'How much does a project cost?',
    answer: [
      "Pricing depends on the scope, timeline, and complexity of your project. After a short discovery call, I'll share a clear proposal with a fixed price and timeline.",
      'Most projects fall into a range, but every build is quoted individually to fit your goals.',
    ],
  },
  {
    id: 'build-timeline',
    question: 'How long does a build take?',
    answer: [
      'Most focused portfolio or marketing builds take three to six weeks once content and direction are clear. Smaller refreshes can move faster, larger sites get a staged timeline.',
    ],
  },
  {
    id: 'hosting',
    question: 'Do you handle hosting?',
    answer: [
      'Yes. I can set up hosting, domains, analytics, forms, and deployment so the site is ready to manage after launch.',
    ],
  },
  {
    id: 'existing-designer',
    question: 'What if I already have a designer?',
    answer: [
      'That works well. I can build from finished design files, tighten responsive states, and flag implementation issues before they become launch problems.',
    ],
  },
  {
    id: 'stack',
    question: 'What stack do you use?',
    answer: [
      'I choose the stack around the project, but I usually work with React, Next.js, Tailwind, Framer Motion, headless CMS tools, and modern hosting on Vercel or similar platforms.',
    ],
  },
  {
    id: 'ongoing-support',
    question: 'Do you offer ongoing support?',
    answer: [
      'Yes. After launch, I can stay close for improvements, new sections, content updates, performance checks, and small product iterations.',
    ],
  },
]

export const contactIntro = {
  eyebrow: 'Next Step',
  title: ["Let's make", 'something', 'worth shipping.'],
  description: "A focused website, a product launch, or a fresh rebuild, let's talk through it.",
  primaryCta: {
    label: 'Book a 20-min call',
    href: 'mailto:hi@mahdi.dev?subject=Project%20call',
  },
  secondaryCta: {
    label: 'Or email',
    href: 'mailto:hi@mahdi.dev',
  },
}

export const contactForm = {
  eyebrow: 'Quick Brief',
  email: 'hi@mahdi.dev',
  status: 'Replies within 1 biz day',
  submitLabel: 'Send',
  fields: {
    name: {
      label: 'Name',
      placeholder: 'Your name',
    },
    email: {
      label: 'Email',
      placeholder: 'you@company.com',
    },
    message: {
      label: 'What are you building?',
      placeholder: 'Tell us about your project, goals, and timeline...',
    },
  },
}

export const processIntro = {
  eyebrow: 'Process',
  title: ['How we work', 'together to deliver'],
  highlight: 'results.',
  description:
    'A clear, four-phase process designed to move from clarity to impact. Collaborative, focused, and built to last.',
  footer: 'Clear steps. Open communication. Thoughtful execution.',
  footerHighlight: 'Every time.',
}

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    icon: 'compass',
    description:
      'We align on goals, audience, and what success looks like. The upfront questions save time later.',
    deliverables: ['Brief', 'Sitemap', 'Moodboard'],
  },
  {
    number: '02',
    title: 'Design',
    icon: 'pen',
    description:
      'We translate strategy into structure and visuals, clean, intentional, and made to feel easy to use.',
    deliverables: ['Wires', 'Visual System', 'Page Library'],
  },
  {
    number: '03',
    title: 'Build',
    icon: 'code',
    description:
      'We bring the design to life with clean, scalable code, fast, accessible, and built for performance.',
    deliverables: ['Components', 'CMS', 'Perf Budget'],
  },
  {
    number: '04',
    title: 'Launch',
    icon: 'rocket',
    description:
      'We ship with confidence and stay close for a smooth handoff, practical QA, and ongoing support.',
    deliverables: ['QA', 'Handoff', '30-Day Care'],
  },
]

export const servicesIntro = {
  eyebrow: 'Services',
  title: ['Digital work,', 'shaped with intention.'],
  description:
    'I partner with ambitious brands to turn ideas into clear, useful digital experiences. From strategy to launch, each engagement is shaped to feel thoughtful, work cleanly, and support real business goals.',
}

export const services = [
  {
    number: '01',
    title: 'Strategy & Direction',
    icon: 'compass',
    description:
      'I start by getting clear on goals, audience, and positioning so the site has a sharp point of view before any screen gets designed.',
    deliverables: [
      'Brand and market positioning',
      'Site structure and information architecture',
      'Messaging and content strategy',
      'Conversion planning and user journey mapping',
    ],
    cta: {
      label: 'Learn More',
      href: 'mailto:hello@design-lab.dev?subject=Strategy%20%26%20Direction',
    },
  },
  {
    number: '02',
    title: 'Web Design',
    icon: 'pen',
    description:
      'I craft responsive interfaces with strong hierarchy, clear pacing, and a material feel that stays refined on every screen size.',
    deliverables: [
      'Visual direction and design systems',
      'UI design and component libraries',
      'Responsive layouts and interactions',
      'Brand-led, user-focused experiences',
    ],
    cta: {
      label: 'Learn More',
      href: 'mailto:hello@design-lab.dev?subject=Web%20Design',
    },
  },
  {
    number: '03',
    title: 'Development & Launch',
    icon: 'code',
    description:
      'I build with clean front-end code, thoughtful CMS structure, and the practical polish needed for a smooth launch.',
    deliverables: [
      'Next.js development and best practices',
      'CMS integration and content modeling',
      'Performance optimization and SEO',
      'QA testing, deployment, and ongoing support',
    ],
    cta: {
      label: 'Learn More',
      href: 'mailto:hello@design-lab.dev?subject=Development%20%26%20Launch',
    },
  },
]

export const selectedWorkProjects = [
  {
    eyebrow: 'Featured Project',
    title: 'Aurelia Studio',
    category: 'E-commerce Experience',
    description:
      'A refined e-commerce experience for a modern home goods brand. We designed a calm, editorial interface and custom Webflow build that elevates the brand and drives measurable results.',
    services: ['Strategy', 'Web Design', 'Webflow Development', 'E-Commerce'],
    cta: {
      label: 'View Case Study',
      href: 'mailto:hello@design-lab.dev?subject=Aurelia%20Studio',
    },
    image: {
      src: '/assets/works/Laptop%20Mock-Up%20Scene.png',
      alt: 'Laptop mock-up on a soft beige bed with pink floral accents',
    },
  },
  {
    eyebrow: 'Brand & Web Design',
    title: 'Nora Wellness',
    category: 'Brand & Web Design',
    description:
      'A clean, conversion-focused website for a wellness brand, designed to build trust and drive subscriptions.',
    cta: {
      label: 'View Project',
      href: 'mailto:hello@design-lab.dev?subject=Nora%20Wellness',
    },
    image: {
      src: '/assets/works/Minimalist%20Workspace.png',
      alt: 'Laptop mock-up on a cream pedestal beside a vase of pale flowers',
    },
  },
  {
    eyebrow: 'Web Design & Development',
    title: 'Forma Architecture',
    category: 'Web Design & Development',
    description:
      'A sophisticated portfolio website for an architecture studio, showcasing projects with clarity and impact.',
    cta: {
      label: 'View Project',
      href: 'mailto:hello@design-lab.dev?subject=Forma%20Architecture',
    },
    image: {
      src: '/assets/works/Modern%20Workspace%20Setup.png',
      alt: 'Dual-monitor creative desk setup with code and analytics on screen',
    },
  },
]

export const stats = [
  {
    value: '03',
    label: 'Disciplines',
    detail: 'Strategy, interface design, and front-end build.',
  },
  {
    value: '12',
    label: 'Launches',
    detail: 'Portfolio sites, product pages, and brand moments.',
  },
  {
    value: '24h',
    label: 'Reply time',
    detail: 'Fast responses for new project inquiries.',
  },
  {
    value: '18',
    label: 'Projects',
    detail: 'Across brand, portfolio, and product work.',
  },
]
