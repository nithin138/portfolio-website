export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  outcome: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  architectureHighlights: string[];
  engineeringInsights: {
    architectureDecisions: string;
    scalability: string;
    performance: string;
    challenges: string;
    lessons: string;
  };
  links: {
    live?: string;
    github?: string;
  };
  gradient: string;
  accentColor: string;
}

// Keep legacy type for backward compat if needed elsewhere
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  genre: 'AI' | 'DS' | 'Dev';
  featured?: boolean;
  demoed?: boolean;
  image?: string;
}

export type ProjectGenre = 'All' | 'AI' | 'DS' | 'Dev';
