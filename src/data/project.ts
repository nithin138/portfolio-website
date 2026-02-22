import { Project } from '../types/project';

export const projects: Project[] = [
  // Full Stack Web Development Projects
  {
    id: '1',
    title: 'TechMate - Service Marketplace',
    description: 'A comprehensive service and product provider platform connecting users with verified professionals across multiple sectors including hardware repairs, software solutions, home appliances, plumbing, electrical work, and more. Features real-time booking, service tracking, secure payments, and AI-powered technician matching.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay API', 'JWT Auth', 'Socket.io'],
    github: 'https://github.com/nithin138/Techmate_UserWebApp-22-01-25',
    demo: 'https://techmateservices.in/',
    genre: 'Dev',
    featured: true,
    demoed: true
  },
  {
    id: '2',
    title: 'TechMate - Admin Panel',
    description: 'Advanced administrative dashboard for managing the TechMate platform. Provides complete control over technician verification, service requests, user management, transaction monitoring, analytics visualization, and operational workflows with role-based access control.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'JWT Auth'],
    github: 'https://github.com/nithin138/Techlink_AdminWebApp',
    demo: 'https://admin.techmateservices.in/',
    genre: 'Dev',
    featured: true,
    demoed: true
  },
  {
    id: '3',
    title: 'Rntout - Rental Platform',
    description: 'A versatile rental marketplace enabling users to rent products across diverse categories from everyday items like iron boxes to high-value electronics and vehicles. Features include smart search, availability tracking, booking management, damage protection, and secure payment processing.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay API', 'AWS S3'],
    github: 'https://github.com',
    demo: 'https://rntout.com/',
    genre: 'Dev',
    featured: true,
    demoed: true
  },
  {
    id: '4',
    title: 'Rntout - Admin Panel',
    description: 'Comprehensive admin dashboard for Rntout platform management. Handles product listings, rental inventory, user verification, booking oversight, payment reconciliation, dispute resolution, and business analytics with real-time monitoring capabilities.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'JWT Auth'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    genre: 'Dev',
    featured: false,
    demoed: true
  },
  {
    id: '5',
    title: 'Bodegaa - Fresh Grocery E-commerce',
    description: 'A modern e-commerce platform similar to BigBasket, specializing in fresh vegetables, fruits, and essential kitchen items including oils, flours, and spices. Features include real-time inventory management, quality assurance, doorstep delivery tracking, and personalized recommendations.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Payment Gateway', 'Google Maps API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    genre: 'Dev',
    featured: true,
    demoed: true
  },
  {
    id: '6',
    title: 'Dream - Enterprise Dispute Resolution',
    description: 'Enterprise-grade application designed for large organizations to manage and resolve disputes in sales data from platforms like Salesforce and Xactly. Features automated dispute detection, workflow management, audit trails, multi-level approvals, and comprehensive reporting for sales operations teams.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Salesforce API', 'Xactly Integration'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    genre: 'Dev',
    featured: true,
    demoed: true
  },
  {
    id: '7',
    title: 'myWiz - AI-Powered EdTech for Kids',
    description: 'An innovative AI-based educational platform designed for children aged 6-14. Unlike traditional AI tools that provide direct answers, myWiz focuses on enhancing cognitive thinking and problem-solving skills through guided learning, interactive challenges, and adaptive AI that encourages critical thinking.',
    tech: ['React', 'Node.js', 'Python', 'OpenAI API', 'MongoDB', 'TensorFlow'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    genre: 'AI',
    featured: true,
    demoed: true
  }
];
