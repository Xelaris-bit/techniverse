import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface ToolItem {
  name: string;
  category: 'Development' | 'AI/ML' | 'QA' | '3D & Media';
  icon?: string; 
}

export interface LeadershipProfile {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}