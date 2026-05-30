import { CaseStudy } from '../types/project';

export const caseStudies: CaseStudy[] = [
  {
    id: 'techmate',
    category: 'Platform Engineering',
    title: 'TechMate — Service Marketplace',
    outcome:
      'Built a full-stack service marketplace connecting users with verified professionals across 10+ service categories with real-time booking and AI-powered technician matching.',
    challenge:
      'Local service discovery was fragmented — users had no reliable way to find, compare, and book verified professionals with transparent pricing and real-time availability.',
    solution:
      'Designed a microservices-backed platform with real-time WebSocket communication, intelligent matching algorithms, and a secure payment pipeline using Razorpay, enabling end-to-end service lifecycle management.',
    metrics: [
      { label: 'Service Categories', value: '10+' },
      { label: 'Real-Time Booking', value: 'Sub-Second' },
      { label: 'Payment Success Rate', value: '99.2%' },
      { label: 'Uptime', value: '99.9%' },
    ],
    architectureHighlights: [
      'Microservices',
      'Real-Time WebSockets',
      'AI Matching',
      'Event-Driven',
      'Secure Payments',
    ],
    engineeringInsights: {
      architectureDecisions:
        'Chose a service-oriented architecture to isolate booking, payments, and user management. Socket.io handles real-time status updates without polling overhead.',
      scalability:
        'Horizontal scaling via stateless API servers behind a load balancer. MongoDB sharding for high-write booking data. Redis caching for technician availability lookups.',
      performance:
        'Implemented connection pooling, query indexing on geolocation fields, and lazy-loaded service catalogs to keep initial page load under 1.5s.',
      challenges:
        'Handling concurrent booking conflicts required implementing optimistic locking with retry logic. Payment webhook reliability was solved with idempotency keys and dead-letter queues.',
      lessons:
        'Real-time systems need graceful degradation — fallback to polling when WebSocket connections drop. Early investment in observability (structured logging + distributed tracing) paid off during scaling.',
    },
    links: {
      live: 'https://techmateservices.in/',
      github: 'https://github.com/nithin138/Techmate_UserWebApp-22-01-25',
    },
    gradient: 'from-blue-600/20 via-indigo-600/10 to-transparent',
    accentColor: '#3B82F6',
  },
  {
    id: 'dream',
    category: 'Product Engineering',
    title: 'Dream — Enterprise Dispute Resolution',
    outcome:
      'Architected an enterprise-grade dispute resolution system that automates sales data reconciliation across Salesforce and Xactly, reducing manual review time by 70%.',
    challenge:
      'Large organizations struggled with thousands of unresolved sales commission disputes scattered across multiple platforms, causing revenue leakage and operational bottlenecks.',
    solution:
      'Built a centralized dispute management engine with automated detection algorithms, multi-level approval workflows, comprehensive audit trails, and deep integrations with Salesforce and Xactly APIs.',
    metrics: [
      { label: 'Workflow Automation', value: '70%' },
      { label: 'Dispute Resolution Speed', value: '3× Faster' },
      { label: 'Data Sources Integrated', value: '4+' },
      { label: 'Audit Compliance', value: '100%' },
    ],
    architectureHighlights: [
      'Enterprise Integration',
      'Workflow Engine',
      'Audit System',
      'Role-Based Access',
      'Analytics Pipeline',
    ],
    engineeringInsights: {
      architectureDecisions:
        'PostgreSQL chosen over MongoDB for ACID compliance critical to financial dispute data. Implemented a state-machine-based workflow engine for deterministic dispute lifecycle management.',
      scalability:
        'Designed for multi-tenant isolation with row-level security. Background job processing via queue workers handles bulk dispute imports without blocking the main API.',
      performance:
        'Materialized views for analytics dashboards. Pagination with cursor-based approach for dispute lists exceeding 100k records. Indexed full-text search on dispute descriptions.',
      challenges:
        'Salesforce API rate limits required implementing a smart batching strategy with exponential backoff. Ensuring data consistency across async integrations was solved with saga patterns.',
      lessons:
        'Enterprise software demands exhaustive audit logging from day one — retrofitting is painful. Investing in a robust permission system early prevented security issues at scale.',
    },
    links: {
      live: 'https://dream.uniflo.ai/auth/sign-in?returnTo=%2Fhome',
    },
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    accentColor: '#10B981',
  },
  {
    id: 'mywiz',
    category: 'AI Systems',
    title: 'myWiz — AI-Powered EdTech for Kids',
    outcome:
      'Developed an adaptive AI education platform that enhances cognitive thinking in children aged 6–14 through guided learning instead of direct answers.',
    challenge:
      'Existing AI tools give children instant answers, undermining critical thinking development. Parents and educators needed a tool that teaches reasoning, not just retrieval.',
    solution:
      'Engineered a multi-model AI pipeline using OpenAI and custom fine-tuned models that adapts difficulty in real-time, provides Socratic-style guidance, and tracks cognitive growth metrics.',
    metrics: [
      { label: 'Age Range Supported', value: '6–14 yrs' },
      { label: 'Adaptive Difficulty', value: 'Real-Time' },
      { label: 'Cognitive Growth Tracking', value: '12 Metrics' },
      { label: 'Response Latency', value: '<800ms' },
    ],
    architectureHighlights: [
      'Agentic AI',
      'Adaptive Learning',
      'Multi-Model Pipeline',
      'Real-Time Analytics',
      'Cognitive Modeling',
    ],
    engineeringInsights: {
      architectureDecisions:
        'Implemented a chain-of-thought prompting system that breaks complex problems into guided steps. Used a router model to select between GPT-4 and lighter models based on query complexity to optimize cost.',
      scalability:
        'Serverless inference endpoints with auto-scaling. Conversation context managed via Redis with TTL-based expiry. Model responses cached for common question patterns.',
      performance:
        'Streaming responses for perceived low-latency. Pre-computed embeddings for curriculum content enable sub-100ms similarity lookups. Batch processing for analytics aggregation.',
      challenges:
        'Ensuring age-appropriate responses required multi-layer content filtering and a custom safety classifier. Balancing helpfulness with not giving away answers needed extensive prompt engineering.',
      lessons:
        'AI products for children require 10× more safety guardrails than adult-facing tools. User testing with actual children revealed UX assumptions that analytics alone would never surface.',
    },
    links: {
      live: 'https://mywiz.ai/',
    },
    gradient: 'from-violet-600/20 via-purple-600/10 to-transparent',
    accentColor: '#8B5CF6',
  },
  {
    id: 'rntout',
    category: 'Cloud Infrastructure',
    title: 'Rntout — Rental Marketplace Platform',
    outcome:
      'Built a cloud-native rental marketplace handling diverse product categories with smart availability tracking, damage protection workflows, and secure payment processing.',
    challenge:
      'The rental economy lacked a unified platform for diverse categories — from everyday items to high-value electronics — with proper availability management and trust mechanisms.',
    solution:
      'Designed a modular platform with category-agnostic inventory management, real-time availability calendars, automated damage assessment workflows, and AWS S3-backed media processing.',
    metrics: [
      { label: 'Product Categories', value: '15+' },
      { label: 'Availability Accuracy', value: '99.5%' },
      { label: 'Media Processing', value: 'Automated' },
      { label: 'Booking Conflicts', value: '0%' },
    ],
    architectureHighlights: [
      'Cloud Native',
      'Event-Driven Design',
      'Media Pipeline',
      'Calendar System',
      'Distributed Processing',
    ],
    engineeringInsights: {
      architectureDecisions:
        'Event-sourced booking system ensures zero double-bookings through append-only event logs. AWS S3 with CloudFront CDN for media delivery. Separate read/write models (CQRS) for inventory queries.',
      scalability:
        'Stateless API layer with container orchestration. Database read replicas for search-heavy workloads. Async image processing pipeline prevents upload bottlenecks.',
      performance:
        'Implemented calendar availability as a bitmap index for O(1) conflict detection. Lazy-loaded product images with progressive JPEG encoding. API response caching with cache invalidation on booking events.',
      challenges:
        'Handling timezone-aware availability across regions required a normalized UTC storage strategy with client-side rendering. Damage dispute resolution needed a fair, automated scoring system.',
      lessons:
        'Calendar/scheduling systems are deceptively complex — edge cases around timezone boundaries and DST transitions require exhaustive testing. Building trust in peer-to-peer platforms requires transparent dispute resolution.',
    },
    links: {
      live: 'https://rntout.com/',
    },
    gradient: 'from-orange-600/20 via-amber-600/10 to-transparent',
    accentColor: '#F59E0B',
  },
  {
    id: 'techmate-admin',
    category: 'Developer Tools',
    title: 'TechMate — Admin Operations Panel',
    outcome:
      'Engineered a comprehensive admin dashboard providing full operational control over technician verification, analytics, and platform health monitoring.',
    challenge:
      'Platform operators needed real-time visibility into service operations, technician performance, and financial transactions without direct database access.',
    solution:
      'Built a role-based admin panel with real-time analytics dashboards, automated verification workflows, transaction monitoring, and operational alerting — all behind granular permission controls.',
    metrics: [
      { label: 'Operational Visibility', value: 'Real-Time' },
      { label: 'Verification Automation', value: '85%' },
      { label: 'Role Granularity', value: '6 Levels' },
      { label: 'Dashboard Load Time', value: '<2s' },
    ],
    architectureHighlights: [
      'Role-Based Access',
      'Real-Time Analytics',
      'Automated Workflows',
      'Monitoring & Alerts',
      'Data Visualization',
    ],
    engineeringInsights: {
      architectureDecisions:
        'Implemented RBAC with hierarchical permissions — admin actions are audit-logged with before/after snapshots. Chart.js with WebSocket-fed data for live dashboard updates without page refreshes.',
      scalability:
        'Analytics queries run against read replicas to avoid impacting production workloads. Aggregation pipelines pre-compute daily/weekly metrics during off-peak hours.',
      performance:
        'Virtualized tables for rendering 10k+ rows without DOM bloat. Debounced search with server-side filtering. Lazy-loaded dashboard widgets based on viewport visibility.',
      challenges:
        'Balancing real-time data freshness with query performance required implementing a tiered caching strategy — live data for critical metrics, 5-min cache for analytics.',
      lessons:
        'Admin tools are often afterthoughts but they define operational efficiency. Investing in good admin UX reduces support tickets and enables non-technical team members to self-serve.',
    },
    links: {
      live: 'https://admin.techmateservices.in/',
      github: 'https://github.com/nithin138/Techlink_AdminWebApp',
    },
    gradient: 'from-cyan-600/20 via-sky-600/10 to-transparent',
    accentColor: '#06B6D4',
  },
  {
    id: 'bodegaa',
    category: 'Data Intelligence',
    title: 'Bodegaa — Fresh Grocery E-commerce',
    outcome:
      'Created a data-driven grocery platform with real-time inventory intelligence, quality assurance tracking, and personalized recommendation engine.',
    challenge:
      'Fresh grocery e-commerce faces unique challenges — perishable inventory, quality variance, delivery time sensitivity, and hyper-local demand patterns that generic platforms cannot handle.',
    solution:
      'Built a specialized platform with real-time inventory tracking tied to shelf-life data, Google Maps-powered delivery optimization, and a recommendation engine trained on purchase patterns and seasonal availability.',
    metrics: [
      { label: 'Inventory Accuracy', value: '98.5%' },
      { label: 'Delivery Optimization', value: '40% Faster' },
      { label: 'Recommendation CTR', value: '23%' },
      { label: 'Waste Reduction', value: '35%' },
    ],
    architectureHighlights: [
      'Recommendation Engine',
      'Geospatial Optimization',
      'Inventory Intelligence',
      'Demand Forecasting',
      'Quality Tracking',
    ],
    engineeringInsights: {
      architectureDecisions:
        'Chose a hybrid approach — relational DB for orders/transactions, document store for product catalogs with frequently changing attributes. Google Maps Distance Matrix API for delivery route optimization.',
      scalability:
        'Inventory updates via event streams ensure consistency across warehouse and storefront views. Recommendation model runs as a separate microservice with its own scaling policy.',
      performance:
        'Product search uses Elasticsearch with geo-filtered results. Image optimization pipeline generates multiple resolutions on upload. Cart operations are optimistic with background sync.',
      challenges:
        'Perishable inventory requires time-aware stock management — items approaching expiry get automatically discounted or removed. Handling delivery slot conflicts during peak hours needed a priority queue system.',
      lessons:
        'Domain-specific e-commerce platforms outperform generic solutions when the domain has unique constraints (perishability, freshness, locality). Data quality in inventory directly impacts customer trust.',
    },
    links: {},
    gradient: 'from-green-600/20 via-emerald-600/10 to-transparent',
    accentColor: '#22C55E',
  },
];
