import { Project } from '../types/project';

export const projects: Project[] = [
  // Full Stack Web Development Projects
  {
    id: '1',
    title: 'Rntout.com',
    description: 'A complete rental management web platform with property listings, user authentication, booking management, and responsive UI.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay API'],
    github: 'https://github.com', // replace with actual repo
    demo: 'https://rntout.com/', // replace with actual demo
    genre: 'Dev',
    featured: true,
    demoed: true
  },
  {
  id: '11',
  title: 'TechMate - User Application',
  description:
    'A smart service marketplace platform that connects users with verified technicians for repairs, installations, and IT services. The app includes real-time booking, service tracking, wallet payments, and personalized recommendations powered by AI-driven matching.',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Razorpay API', 'JWT Auth'],
  github: 'https://github.com/nithin138/Techmate_UserWebApp-22-01-25', // replace with actual repo
  demo: 'https://techmateservices.in/', // replace with actual demo
  genre: 'Dev',
  featured: true,
  demoed: true
},

{
  id: '12',
  title: 'TechMate - Admin Panel',
  description:
    'An advanced admin dashboard for managing technicians, user requests, service categories, and transactions. Features include analytics visualization, role-based access control, service approval workflows, and integrated payment monitoring for complete operational oversight.',
  tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'JWT Auth'],
  github: 'https://github.com/nithin138/Techlink_AdminWebApp', // replace with actual repo
  demo: 'https://admin.techmateservices.in/', // replace with actual demo
  genre: 'Dev',
  featured: true,
  demoed: true
},

  {
    id: '2',
    title: 'ReachHub Admin Panel',
    description: 'Admin dashboard for managing service and product provider listings, user accounts, and analytics for the ReachHub platform.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/nithin138/ReachHub-Admin', // replace with actual repo
    demo: 'https://demo.com', // replace with actual demo
    genre: 'Dev',
    demoed: true
  },
  {
    id: '3',
    title: 'ReachHub User Application',
    description: 'User-facing application for discovering and connecting with service and product providers, with search, filtering, and profile management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com', // replace with actual repo
    demo: 'https://demo.com', // replace with actual demo
    genre: 'Dev',
    demoed: true
  },

  // AI Projects
  {
    id: '4',
    title: 'AI-Powered Movie Recommendation System',
    description: 'Recommends movies based on user preferences using collaborative filtering and content-based machine learning algorithms.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Model building'],
    github: 'https://github.com/nithin138/ML-based-Movie-Recomendation-System',
    demo: 'https://demo.com',
    genre: 'AI'
  },
  {
    id: '5',
    title: 'Email/SMS Spam Detection',
    description: 'Machine learning model to classify and filter spam messages using natural language processing techniques.',
    tech: ['Python', 'scikit-learn', 'NLTK', 'Pandas', 'Flask'],
    github: 'https://github.com/nithin138/spam-detection', // replace with actual repo
    demo: 'https://demo.com',
    genre: 'AI'
  },
  {
    id: '6',
    title: 'Security Breach Detection Model',
    description: 'AI model to detect unusual activity patterns and potential security breaches in network traffic.',
    tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'Docker'],
    github: 'https://github.com/nithin138/IOT-integrated-ML-model-for-Security-breach-Detection', // replace with actual repo
    demo: 'https://demo.com',
    genre: 'AI'
  },

  // Data Science Projects
  {
    id: '7',
    title: 'Twitter Data Sentiment Analysis',
    description: 'Analyzes sentiment from Twitter data using NLP techniques and visualizes trends over time.',
    tech: ['Python', 'NLTK', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/nithin138/Twitter-data-Sentiment-Analysis', // replace with actual repo
    demo: 'https://demo.com',
    genre: 'DS'
  },
  {
    id: '8',
    title: 'Customer Segmentation Analysis',
    description: 'Performs customer segmentation using clustering algorithms to enable targeted marketing strategies.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/nithin138/customer-segmentation-analysis', // replace with actual repo
    demo: 'https://demo.com',
    genre: 'DS'
  },
  {
    id: '9',
    title: 'Hotel Booking Analytics',
    description: 'Exploratory data analysis and visualization of hotel booking patterns to identify business insights.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    github: 'https://github.com/nithin138/Hotel-Booking-Analytics', // replace with actual repo
    demo: 'https://demo.com',
    genre: 'DS'
  },
  {
    id: '10',
    title: 'Business Dashboards Collection',
    description: 'Multiple interactive dashboards addressing various business problems using Power BI and MS Excel.',
    tech: ['Power BI', 'MS Excel', 'DAX', 'Data Modeling'],
    github: 'https://github.com/nithin138/business-dashboard-collection', // replace with actual repo
    demo: 'https://demo.com',
    genre: 'DS'
  }
];
