/**
 * =============================================================================
 * PROJECTS DATA - Portfolio Projects
 * =============================================================================
 *
 * AI CUSTOMIZATION INSTRUCTIONS:
 * This file contains portfolio projects displayed in the Portfolio section.
 *
 * TO CUSTOMIZE:
 * 1. Replace example projects with your actual projects
 * 2. Mark your best projects as featured (featured: true)
 * 3. Include project images if available
 * 4. Add live demo and GitHub links where applicable
 *
 * TO ADD A NEW PROJECT:
 * Copy an existing entry and modify all fields. Make sure to:
 * - Use a unique ID (e.g., 'proj-6', 'proj-7')
 * - Create a URL-friendly slug (lowercase, hyphens, no spaces)
 * - Add at least a thumbnail image
 *
 * PROJECT CATEGORIES:
 * Choose from existing categories or add new ones to projectCategories array.
 *
 * IMAGES:
 * - Store images in /public/projects/
 * - Use paths like '/projects/project-name.jpg'
 * - Recommended size: 1200x630 for thumbnails
 * =============================================================================
 */

/**
 * Project entry type definition
 */
export interface Project {
  /** Unique identifier (e.g., 'proj-1', 'proj-2') */
  id: string;

  /**
   * URL-friendly slug for the project page
   * Format: lowercase, hyphens instead of spaces
   * Example: 'my-awesome-project'
   */
  slug: string;

  /** Project title */
  title: string;

  /**
   * Short description (1-2 sentences)
   * Displayed in project cards
   */
  description: string;

  /**
   * Detailed description (optional)
   * Displayed on the project detail page
   */
  longDescription?: string;

  /**
   * Thumbnail image path
   * - Use '/projects/thumb.jpg' for local image
   * - Use full URL for external image
   */
  thumbnail: string;

  /**
   * Additional project images (optional)
   * For project detail page gallery
   */
  images: string[];

  /**
   * Technologies used in the project
   * List frameworks, languages, and tools
   */
  technologies: string[];

  /**
   * Project category
   * Must match one from projectCategories array
   */
  category: string;

  /**
   * Your role in the project
   * Examples: "Lead Developer", "Frontend Developer", "Solo Project"
   */
  role: string;

  /**
   * Project duration
   * Examples: "3 months", "6 weeks", "Ongoing"
   */
  duration: string;

  /**
   * Live project URL (optional)
   * Link to deployed project
   */
  liveUrl?: string;

  /**
   * GitHub repository URL (optional)
   * Link to source code
   */
  githubUrl?: string;

  /**
   * Is this a featured project?
   * Featured projects are highlighted on the homepage
   */
  featured: boolean;

  /**
   * Key highlights/achievements
   * Use metrics when possible (numbers, percentages)
   */
  highlights: string[];
}

/**
 * =============================================================================
 * PROJECT CATEGORIES - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Categories for filtering projects.
 * 'All' is required and should always be first.
 */
export const projectCategories: string[] = [
  'All',
  'Web Application',
  'SaaS',
  'Mobile App',
  'Data Visualization',
  'Developer Tools',
  // Add more categories here:
  // 'E-Commerce',
  // 'AI/ML',
  // 'Open Source',
  // 'Personal Project',
];

/**
 * =============================================================================
 * YOUR PROJECTS - CUSTOMIZE BELOW
 * =============================================================================
 *
 * Replace these example projects with your actual projects.
 * Mark your best 3-4 projects as featured.
 */
export const projects: Project[] = [
  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 1
  // ---------------------------------------------------------------------------
  {
    id: 'proj-1',
    slug: 'medical-service-platform',
    title: 'Medser',
    description:
      'Full-stack medical service platform with real-time appointment scheduling and patient management.',
    longDescription: `Medser, a real-time healthcare platform that connects healthcare providers with trained
professionals for medical scribing, virtual assistance, and remote patient monitoring. The
platform supports secure video streaming, audio recording, and structured patient note
management to enhance clinical efficiency and care quality.`,
    thumbnail: '/projects/medser.png',
    images: [
      '/public/projects/medser.png',
      '/public/projects/medser-2.jpg',
      '/public/projects/medser-3.jpg',
    ],
    technologies: ['Next.js', 'TypeScript', 'Nest.js', 'Tailwind CSS', 'Web Socket', 'MySql', 'Prisma ORM', 'Agora.io', 'JWT Authentication', 'REST APIs', 'Docker', 'AWS'],
    category: 'SaaS',
    role: 'Full Stack Developer',
    duration: '6 months',
    liveUrl: 'https://medser.us',
    githubUrl: 'https://github.com/alexjohnson/ecommerce',
    featured: true,
    highlights: [
      'Role-based access management (Admin, Physician, Scribe, Manager, etc.)',
      'Real-time video streaming for provider–patient and provider–scribe collaboration',
      'Patient registration and management',
      'Physician profile and scheduling management',
      'Real-time communication using socket-based integration',
      'Audio call recording and management',
      'Medical transcription and documentation workflow',
      'Date-wise patient search and filtering',
      'Comprehensive reporting and analytics',
      'Secure authentication and authorization',
      'Responsive dashboard for different user roles',
      'Real-time notifications and status updates',
      'Centralized administrative control panel',
      'Data management and audit tracking',
      'User activity monitoring and reporting',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 2
  // ---------------------------------------------------------------------------
  {
    id: 'proj-2',
    slug: 'vehicle-tracking-solution',
    title: 'Vehicle Tracking Solution',
    description:
      'Real-time vehicle tracking and management solution for fleet operators.',
    longDescription: `Developed a scalable, role-based Vehicle Tracking System (VTS) designed to provide real-time fleet monitoring, vehicle management, and operational insights. The platform enables organizations to track vehicle locations live, monitor fleet activities, receive instant alerts, and generate detailed reports through a centralized management dashboard. The system supports multiple user roles with customized access levels, ensuring secure and efficient fleet operations.`,
    thumbnail: '/projects/vts.png',
    images: ['/projects/vts-1.jpg', '/projects/vts-2.jpg'],
    technologies: ['React', 'Tailwind CSS', 'Google Maps', 'Node.js', 'Express.js', 'MySql', 'Prisma ORM', 'JWT Authentication', 'REST APIs'],
    category: 'SaaS',
    role: 'Full-Stack Developer',
    duration: '4 months',
    liveUrl: 'https://vts-demo.com',
    githubUrl: 'https://github.com/alexjohnson/vts',
    featured: true,
    highlights: [
      'Role-based access control for Admin, Manager, Owner, and other user roles.',
      'Real-time GPS vehicle tracking with live location updates.',
      'Individual vehicle monitoring with follow mode functionality.',
      'Interactive map integration for route visualization and vehicle tracking.',
      'Instant notifications and alert management for critical events.',
      'Comprehensive fleet reporting and analytics dashboard.',
      'Vehicle history and trip monitoring capabilities.',
      'Centralized admin panel for user, vehicle, and system management.',
      'Responsive and user-friendly interface optimized for desktop and mobile devices.',
      'Secure authentication and authorization mechanisms.',
    ],
  },

  // ---------------------------------------------------------------------------
  // FEATURED PROJECT 3
  // ---------------------------------------------------------------------------
  {
    id: 'proj-3',
    slug: 'teton-shop-ecommerce-platform',
    title: 'Teton Shop',
    description:
      'Interactive data visualization dashboard for business analytics and insights.',
    longDescription:
      'Led frontend development for a production-grade e-commerce platform, integrating secure APIs, implementing dynamic and reusable components, and translating Figma designs into responsive, optimized, and user-friendly interfaces.',
    thumbnail: '/projects/teton-shop.png',
    images: ['/projects/teton-shop-1.jpg', '/projects/teton-shop-2.jpg'],
    technologies: ['Vue Js', 'Nuxt', 'Stylus CSS', 'JavaScript', 'Stripe', 'MySql', 'Laravel', 'JWT Authentication', 'REST APIs'],
    category: 'Web Application',
    role: 'Frontend Lead',
    duration: '8 months',
    liveUrl: 'https://bd.tetonshop.com/',
    // githubUrl: undefined,  // Private repository
    featured: true,
    highlights: [
      'Product catalog and category management',
      'Product search and browsing',
      'Shopping cart and checkout flow',
      'Customer account and order management',
      'Order tracking',
      'Promotional and campaign support',
      'Responsive e-commerce experience across devices',
      'Payment and delivery workflow integration',
    ],
  },

  // ---------------------------------------------------------------------------
  // NON-FEATURED PROJECT
  // ---------------------------------------------------------------------------
  {
    id: 'proj-4',
    slug: 'teton-corporate-website',
    title: 'Teton Corporate Website',
    description:
      'Modern, responsive website for a technology company with integrated CMS and marketing automation.',
    thumbnail: '/projects/teton.png',
    images: ['/projects/corporate-1.jpg', '/projects/corporate-2.jpg'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer motion', 'Google Analytics', 'SEO Optimization'],
    category: 'Web Application',
    role: 'Frontend Developer',
    duration: '5 months',
    liveUrl: 'https://tetonelectronics.com/',
    githubUrl: 'https://github.com/alexjohnson/fittrack',
    featured: false,
    highlights: [
      'Developed scalable and high-performance web applications with modern frontend architecture.',
      'Built responsive and intuitive user experiences focused on usability and accessibility.',
      'Contributed to end-to-end product development from concept, design, development, testing, and deployment.',
      'Implemented modular and reusable component architecture for maintainability.',
      'Integrated intelligent workflows and advanced digital capabilities into business solutions.',
      'Collaborated across cross-functional teams including software, hardware, QA, and product teams.',
      'Supported secure, reliable, and production-ready application delivery.',
      'Optimized performance, scalability, and overall user experience.',
      'Contributed to building solutions across AI, digital platforms, embedded technologies, and business applications.',
      'Followed quality assurance and agile development practices to ensure consistent delivery.',
    ],
  },

  // ---------------------------------------------------------------------------
  // NON-FEATURED PROJECT
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'real-estate-platform',
    title: 'Real Estate',
    description:
      'Comprehensive real estate platform for property listings, search, and management.',
    thumbnail: '/projects/realstate.png',
    images: ['/projects/real-estate-1.jpg', '/projects/real-estate-2.jpg'],
    technologies: ['Javascript', 'React', 'Open AI', 'SCSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication', 'REST APIs'],
    category: 'Web Application',
    role: 'Full Stack Developer',
    duration: '3 months',
    liveUrl: 'https://realtor.buildyourai.consulting/',  // CLI tools usually don't have live URLs
    githubUrl: 'https://github.com/alexjohnson/devtoolkit',
    featured: false,
    highlights: [
      'Generate Your Dream Room: Design and create your ideal room.',
      'Property Description: Generate detailed property descriptions.',
      'Generate a Biography: Create your biography with the assistance of Real Estate AI.',
      'Blog Post: Generate real estate blog posts efficiently.',
      'Newsletter Campaign: Create newsletters for your business using Real Estate AI.',
      'Email Campaign: Generate marketing emails for your business.',
      'Realtor Instagram Quotes: Quickly create Instagram quotes for your business using Real Estate AI.',
      'Generate Leads: Gain inspired ideas for lead generation with Real Estate AI.',
      'Improve Content: Enhance your content using Real Estate AI.',
      'Step By Step Guide: Receive step-by-step guidance for your business with Real Estate AI.',
    ],
  },
  {
    id: 'proj-6',
    slug: 'builda-brain-ecommerce-platform',
    title: 'Builda Brain',
    description:
      'Complete e-commerce solution for the Bangladesh market.',
    longDescription: `Designed and developed a production-ready, full-stack e-commerce platform tailored for the Bangladesh market, featuring a RESTful backend API and a modern, mobile-first storefront with a complete admin management system.`,
    thumbnail: '/projects/buildabrain.png',
    images: ['/projects/buildabrain-1.jpg', '/projects/buildabrain-2.jpg'],
    technologies: ['NestJS', 'Next.js 15', 'React 19', 'TypeScript', 'Prisma ORM', 'MySQL', 'Tailwind CSS', 'TanStack Query', 'Zustand', 'SSLCommerz', 'Cloudinary', 'JWT'],
    category: 'Web Application',
    role: 'Full Stack Developer',
    duration: '2 months',
    liveUrl: 'https://ecommerce-xi-eight-53.vercel.app/',  // CLI tools usually don't have live URLs
    githubUrl: 'https://github.com/alexjohnson/devtoolkit',
    featured: false,
    highlights: [
      'Architected a modular RESTful API with 11 feature modules (Auth, Products, Orders, Payments, Users, Cart, Wishlist, Reviews, Categories, Banners, Settings) following clean separation of concerns',
      'Implemented JWT-based authentication with dual transport (HttpOnly cookies + Bearer tokens), access/refresh token rotation, and role-based access control across three tiers: USER, ADMIN, and SUPER_ADMIN',
      'Integrated SSLCommerz payment gateway with full transaction lifecycle: payment initiation, success/failure/cancel callbacks, IPN webhook verification with MD5 hash validation, and idempotent payment record management',
      'Built a silent guest checkout system that automatically creates user accounts in the background without interrupting the purchase flow, associating the order with the new account',
      'Implemented Cloudinary media management for product images (multi-upload), category images, hero banners, and site logo with automatic cleanup on deletion',
      'Applied global security layers including Helmet, CORS, rate limiting, input whitelisting via class-validator, and a global exception filter that sanitizes error responses in production',
      'Designed the order lifecycle with enforced status transitions (PENDING → PROCESSING → SHIPPED → DELIVERED), automatic stock management, and cancellation with stock restoration',

      'Built a mobile-first storefront using Next.js App Router with strategic use of Server Components for SEO-critical pages (product detail with ISR), dynamic OpenGraph metadata, and semantic HTML',
      'Implemented a hybrid cart and wishlist system supporting both guest users (Zustand + localStorage) and authenticated users (server-synced), with automatic merge on login and cross-session isolation using user-scoped store keys',
      'Developed a frictionless guest checkout flow: collects customer details, silently registers an account, merges the local cart into the server, places the order, and redirects to the SSLCommerz payment gateway — all in a single uninterrupted user action',
      'Engineered a robust session management system with proactive JWT expiry detection on page load, automatic token refresh, atomic localStorage cleanup on logout, and redirect-safe force-logout to prevent infinite loading states',
      'Designed a full admin panel with dashboard statistics, product CRUD with multi-image upload, inline category and banner management, order status workflow, user moderation, review approval, and site settings management',
      'Applied production-grade state architecture: TanStack Query for all server state with cache invalidation strategies, Zustand with skipHydration + manual rehydration to eliminate SSR/hydration mismatches, and a SessionGuard component that detects and clears stale cross-user data on every page load'
    ],
  }

  // ---------------------------------------------------------------------------
  // ADD MORE PROJECTS HERE
  // ---------------------------------------------------------------------------
  // {
  //   id: 'proj-6',
  //   slug: 'your-project-slug',
  //   title: 'Your Project Title',
  //   description: 'Short description of your project...',
  //   longDescription: 'Detailed description...',  // Optional
  //   thumbnail: '/projects/your-project-thumb.jpg',
  //   images: ['/projects/your-project-1.jpg'],
  //   technologies: ['Tech1', 'Tech2', 'Tech3'],
  //   category: 'Web Application',
  //   role: 'Your Role',
  //   duration: '3 months',
  //   liveUrl: 'https://your-project.com',  // Optional
  //   githubUrl: 'https://github.com/you/project',  // Optional
  //   featured: false,
  //   highlights: [
  //     'Highlight 1 with metrics',
  //     'Highlight 2',
  //   ],
  // },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

/**
 * Get project by slug
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter((project) => project.category === category);
}

/**
 * Get all unique technologies used across projects
 */
export function getAllProjectTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((project) => {
    project.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}

/**
 * Get project count by category
 */
export function getProjectCountByCategory(): Record<string, number> {
  const counts: Record<string, number> = { All: projects.length };

  projectCategories.slice(1).forEach((category) => {
    counts[category] = projects.filter((p) => p.category === category).length;
  });

  return counts;
}

/**
 * Search projects by title, description, or technology
 */
export function searchProjects(query: string): Project[] {
  const lowerQuery = query.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(lowerQuery)
      )
  );
}

/**
 * Get related projects (same category, excluding current)
 */
export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return [];

  return projects
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit);
}
