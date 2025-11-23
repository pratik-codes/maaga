import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface StorySlide {
  title: string;
  content: string;
  image?: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface ClientSegment {
  title: string;
  description: string;
  icon: LucideIcon;
}