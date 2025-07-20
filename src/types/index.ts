// Project types
export interface ProjectTag {
  id: number;
  name: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: ProjectTag[];
}

// Experience types
export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

// Review types
export interface Review {
  img: string;
  name: string;
  username: string;
  body: string;
}

// Social media types
export interface Social {
  name: string;
  url: string;
  icon: string;
}

// Timeline types
export interface TimelineItem {
  title: string;
  date: string;
  contents: string[];
}

// Card types
export interface CardProps {
  style?: React.CSSProperties;
  text?: string;
  image?: string;
  containerRef: React.RefObject<HTMLDivElement>;
}

// FlipWords types
export interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

// Project component types
export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: ProjectTag[];
  setPreview: (project: Project | null) => void;
}

// ProjectDetails types
export interface ProjectDetailsProps {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: ProjectTag[];
  href: string;
  closeModal: () => void;
}

// Timeline types
export interface TimelineProps {
  data: TimelineItem[];
}

// Marquee types
export interface MarqueeProps {
  className?: string;
  children: React.ReactNode;
}

// OrbitingCircles types
export interface OrbitingCirclesProps {
  className: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

// Globe types
export interface GlobeProps {
  className?: string;
  config?: any;
}

// Icon types
export interface IconProps {
  src: string;
}

// ReviewCard types
export interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

// Form types
export interface FormData {
  name: string;
  email: string;
  message: string;
}

// Alert types
export interface AlertProps {
  type: 'success' | 'error';
  message: string;
}
