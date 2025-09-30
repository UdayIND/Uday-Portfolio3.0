export interface Project {
  id: number
  title: string
  category: 'web' | 'ai' | 'design'
  description: string
  image: string
  tech: string[]
  link?: string
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Portfolio Builder',
    category: 'ai',
    description: 'Intelligent portfolio generation platform using GPT-4 to create personalized portfolio websites. Features real-time preview, custom themes, and automatic content optimization.',
    image: '/images/works/ai-portfolio.jpg',
    tech: ['Next.js', 'OpenAI GPT-4', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/ai-portfolio',
    featured: true,
  },
  {
    id: 2,
    title: 'E-Commerce Analytics Dashboard',
    category: 'web',
    description: 'Real-time analytics dashboard for e-commerce businesses with advanced data visualization, predictive insights, and custom reporting capabilities.',
    image: '/images/works/ecommerce-dashboard.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'D3.js', 'Express', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/analytics-dashboard',
    featured: true,
  },
  {
    id: 3,
    title: 'Modern SaaS Design System',
    category: 'design',
    description: 'Comprehensive design system with 200+ components, dark mode support, and accessibility-first approach. Built for scalable SaaS applications.',
    image: '/images/works/design-system.jpg',
    tech: ['Figma', 'Storybook', 'React', 'TypeScript', 'Radix UI'],
    link: 'https://example.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Social Media Management Platform',
    category: 'web',
    description: 'Multi-platform social media scheduler and analytics tool with AI-powered content suggestions and performance tracking.',
    image: '/images/works/social-platform.jpg',
    tech: ['Next.js', 'PostgreSQL', 'Redis', 'TailwindCSS', 'Vercel'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/social-platform',
  },
  {
    id: 5,
    title: 'Machine Learning Model Optimizer',
    category: 'ai',
    description: 'AutoML platform that automatically tunes hyperparameters and optimizes machine learning models for production deployment.',
    image: '/images/works/ml-optimizer.jpg',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Kubernetes'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/ml-optimizer',
  },
  {
    id: 6,
    title: 'Brand Identity Package',
    category: 'design',
    description: 'Complete brand identity system including logo design, color palette, typography guidelines, and marketing materials for a fintech startup.',
    image: '/images/works/brand-identity.jpg',
    tech: ['Adobe Illustrator', 'Figma', 'Adobe Photoshop', 'After Effects'],
    link: 'https://example.com',
  },
  {
    id: 7,
    title: 'Real-Time Collaboration Tool',
    category: 'web',
    description: 'WebRTC-based collaboration platform with video conferencing, screen sharing, and collaborative whiteboard features.',
    image: '/images/works/collab-tool.jpg',
    tech: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB'],
    link: 'https://example.com',
    github: 'https://github.com/yourusername/collab-tool',
  },
  {
    id: 8,
    title: 'AI Content Generator',
    category: 'ai',
    description: 'Multi-purpose content generation tool powered by GPT-4 for blogs, social media, and marketing copy with SEO optimization.',
    image: '/images/works/content-generator.jpg',
    tech: ['Next.js', 'OpenAI API', 'TypeScript', 'Supabase', 'Stripe'],
    link: 'https://example.com',
  },
  {
    id: 9,
    title: 'Mobile Banking App UI/UX',
    category: 'design',
    description: 'Modern mobile banking interface with biometric authentication, transaction tracking, and investment portfolio management.',
    image: '/images/works/banking-app.jpg',
    tech: ['Figma', 'Principle', 'User Research', 'Prototyping'],
    link: 'https://example.com',
  },
]

export const featuredProjects = projects.filter(p => p.featured)

export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects
  return projects.filter(p => p.category === category)
}

