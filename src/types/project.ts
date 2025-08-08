export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  genre: 'AI' | 'DS' | 'Dev';
  featured?: boolean;
}

export type ProjectGenre = 'All' | 'AI' | 'DS' | 'Dev';