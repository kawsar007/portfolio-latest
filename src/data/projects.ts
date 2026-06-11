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
    slug: 'mobile-fitness-app',
    title: 'FitTrack Mobile App',
    description:
      'Cross-platform fitness tracking application with workout plans and progress analytics.',
    thumbnail: '/projects/fitness-thumb.jpg',
    images: ['/projects/fitness-1.jpg', '/projects/fitness-2.jpg'],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Node.js'],
    category: 'Mobile App',
    role: 'Mobile Developer',
    duration: '5 months',
    // liveUrl: undefined,  // App store link would go here
    githubUrl: 'https://github.com/alexjohnson/fittrack',
    featured: false,
    highlights: [
      'iOS & Android support',
      'Offline-first architecture',
      'Wearable device integration',
      '10K+ downloads',
    ],
  },

  // ---------------------------------------------------------------------------
  // NON-FEATURED PROJECT
  // ---------------------------------------------------------------------------
  {
    id: 'proj-5',
    slug: 'open-source-cli',
    title: 'DevToolkit CLI',
    description:
      'Open-source command-line toolkit for developers with code generation and automation.',
    thumbnail: '/projects/cli-thumb.jpg',
    images: ['/projects/cli-1.jpg'],
    technologies: ['Go', 'Cobra', 'Docker'],
    category: 'Developer Tools',
    role: 'Creator & Maintainer',
    duration: 'Ongoing',
    // liveUrl: undefined,  // CLI tools usually don't have live URLs
    githubUrl: 'https://github.com/alexjohnson/devtoolkit',
    featured: false,
    highlights: [
      '2K+ GitHub stars',
      '500+ contributors',
      'Used by 100+ companies',
      'Weekly releases',
    ],
  },

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
