export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  approach: string;
  features: string[];
  stack: string[];
  myRole: string;
  image: string;
  repoUrl: string | null;
  liveUrl: string | null;
  status: 'completed' | 'in-progress' | 'placeholder';
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'bella-artista',
    title: 'Bella Artista Restaurant Suite',
    shortDescription: 'Commercial trilingual restaurant management, delivery & table reservation platform (FR/EN/AR RTL).',
    overview:
      'A full-scale commercial restaurant platform built with Laravel 9 and MySQL. Real-world hospitality software featuring dynamic trilingual localization (French, English, and Arabic RTL), online delivery ordering with guest reference tracking, table reservations with admin approval workflows, Google OAuth, and payment webhook integrations.',
    challenge:
      'Implementing seamless Right-to-Left (RTL) localization for Arabic alongside table booking availability rules and asynchronous payment webhook processing.',
    approach:
      'Engineered custom session locale middleware supporting RTL views, designed a 22-migration relational schema, implemented Google OAuth, and created a secure admin dashboard with dine-in session counters.',
    features: [
      'Trilingual interface: French, English, and Arabic (RTL layout)',
      'Online food delivery ordering with guest reference tracking',
      'Interactive table booking system with acceptance/rejection workflows',
      'Google OAuth customer sign-in and secure password resets',
      'Payment confirmation and asynchronous webhook callbacks',
      'Admin operations suite with menu CRUD, order workflows, and dine-in counters',
    ],
    stack: ['PHP', 'Laravel 9', 'MySQL', 'Blade', 'Google OAuth', 'i18n (RTL)'],
    myRole: 'Full-stack developer — architected the database, built multilingual Blade templates, and implemented OAuth and payment webhooks.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/bella-artista-restaurant',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'edtech-mvp',
    title: 'LearnHub Online Course Platform',
    shortDescription: 'Full-featured online learning platform (LMS) with courses, progress tracking, and Stripe checkout.',
    overview:
      'A modern EdTech MVP built with Next.js 16 and Prisma ORM. Students can register, enroll in video courses, track their lesson-level learning progress in the database, and leave verified reviews. Instructors have a dedicated studio to build courses, manage curriculum, and track student enrollments.',
    challenge:
      'Building a cohesive full-stack experience in Next.js 16 App Router — handling signed cookie authentication, database relations, dynamic routing, and Stripe checkout verification.',
    approach:
      'Used Next.js App Router with server actions for data mutations, Prisma ORM with SQLite/PostgreSQL persistence, and Stripe Checkout sessions verified via webhook.',
    features: [
      'User registration, login, and signed session cookies (JWT via jose)',
      'Course catalogue with categories and dynamic enrollment',
      'Lesson-level progress tracking and completion state per student',
      'Course ratings and review system with average score aggregation',
      'Instructor studio to create courses, add lessons, and track revenue',
      'Stripe Checkout integration with webhook fulfillment',
    ],
    stack: ['TypeScript', 'Next.js 16', 'React 19', 'Prisma ORM', 'Tailwind CSS 4', 'Stripe'],
    myRole: 'Sole developer — designed the database schema, implemented auth, built all pages, and integrated Stripe.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/edtech-lms-platform',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'caption-studio',
    title: 'CaptionStudio SaaS',
    shortDescription: 'AI speech-to-text video subtitling SaaS with interactive timeline and FFmpeg video burning.',
    overview:
      'A multimedia video subtitling web application inspired by CapCut and Submagic. Users upload videos, transcribe speech into word-level timestamps using OpenAI Whisper AI, customize animated subtitle overlays on an interactive timeline, and burn styled captions directly into MP4 using FFmpeg.',
    challenge:
      'Synchronizing word-level AI transcription timestamps with video playback and rendering high-quality hardcoded subtitles directly onto video streams.',
    approach:
      'Integrated OpenAI Whisper for speech recognition, built a custom interactive timeline editor in React with drag-and-drop scrubbing, and created a Node.js rendering queue executing native FFmpeg.',
    features: [
      'Automatic speech-to-text transcription via Whisper AI',
      'Interactive multi-track subtitle timeline editor',
      'Animated karaoke word-by-word highlight presets',
      'Server-side video hardcoding via FFmpeg pipeline',
      'Instant video preview and HD MP4 export',
    ],
    stack: ['React 18', 'Node.js', 'Express', 'Whisper AI', 'FFmpeg', 'Tailwind CSS'],
    myRole: 'Sole developer — architected the media processing pipeline, Whisper AI integration, and the React timeline player.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/caption-studio',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'ashop',
    title: 'Ashop Fashion E-Commerce',
    shortDescription: 'Production apparel store with 3-level categories, variant matrix, cart, and admin inventory.',
    overview:
      'A full-featured e-commerce web application built with Laravel for the retail apparel market. Products are organized in a three-level category hierarchy, support multi-attribute variants (Size x Color matrix with stock tracking), session cart, local delivery checkout, and full admin order processing.',
    challenge:
      'Implementing a flexible product variant inventory matrix and a recursive 3-level category tree in a clean, maintainable Laravel codebase.',
    approach:
      'Used Laravel Eloquent relationships to model categories recursively and products with polymorphic variant attributes. The admin panel is built with Blade templates and resource controllers.',
    features: [
      '3-level nested product category system with SEO slugs',
      'Multi-attribute product variants (Size x Color swatches with live stock)',
      'Persistent session shopping cart and multi-governorate checkout',
      'Payment method integration (Cash on delivery, Flouci, Konnect)',
      'Admin panel for products, category banners, variants, and order statuses',
    ],
    stack: ['PHP', 'Laravel 9', 'MySQL', 'Blade', 'Bootstrap', 'JavaScript'],
    myRole: 'Sole developer — designed the database schema, built all backend logic, cart flow, and admin panel.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/ashop-tunisia',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'game-vault',
    title: 'GameVault Commerce & Rental',
    shortDescription: 'Digital game store, rental platform & wallet with dual commerce models.',
    overview:
      'A modern full-stack gaming commerce platform built with Laravel 11, Tailwind CSS, and Vite. Implements a dual acquisition system (buy permanently or rent with calculated daily fees), an in-app digital balance wallet, and an admin rental return verification portal.',
    challenge:
      'Designing a dual commerce model that dynamically balances buy transactions vs. active rental durations, calculated fees, and digital wallet balance deductions.',
    approach:
      'Built custom Eloquent models for Games, Purchases, Borrowings, and User Wallets with transaction safety and an interactive catalog with Tailwind CSS styling.',
    features: [
      'Dual acquisition model: Buy outright vs. Borrow/Rent with daily fees',
      'In-app digital balance wallet with deposit simulation',
      'Rich game catalog filtered by platform (PC, PS5, Xbox) and genre',
      'Admin inventory management and game rental return verification',
    ],
    stack: ['PHP', 'Laravel 11', 'Tailwind CSS', 'Vite', 'MySQL'],
    myRole: 'Full-stack developer — designed the dual rental/purchase domain model, wallet ledger, and Tailwind frontend.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/game-vault',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
  {
    id: 'booking-system',
    title: 'BookIt Appointment System',
    shortDescription: 'Full-stack appointment booking app with atomic transactions to prevent double-booking.',
    overview:
      'A production booking platform built with Express 5 on the backend and React on the frontend. Clients browse available time slots, make reservations, and receive instant feedback. Administrators have a dedicated panel to manage slot availability, view bookings, and handle scheduling.',
    challenge:
      'Preventing double-booking race conditions when multiple users attempt to reserve the same time slot simultaneously.',
    approach:
      'Used atomic SQLite transactions via better-sqlite3 to lock slot selection at the database level. Built a clean React client with JWT authentication and role-based route guards.',
    features: [
      'Interactive time-slot booking calendar with live validation',
      'Atomic database transactions preventing double-booking race conditions',
      'User booking dashboard with cancellation and status tracking',
      'Admin portal for managing slots, schedules, and user roles',
      'JWT authentication and Zod schema validation on all endpoints',
    ],
    stack: ['JavaScript', 'Express 5', 'SQLite', 'better-sqlite3', 'React 19', 'Tailwind CSS 4'],
    myRole: 'Sole developer — designed the REST API, implemented atomic database transactions, and built the React client.',
    image: '/placeholder-project.svg',
    repoUrl: 'https://github.com/IhebNajjar/booking-system',
    liveUrl: null,
    status: 'completed',
    featured: true,
  },
];
