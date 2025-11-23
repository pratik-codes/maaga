import { FileText, Calculator, Building2, PieChart, Globe, Clock, ShieldCheck, Users, Briefcase, Layers, Linkedin, Instagram, Youtube, Music } from "lucide-react";
import { ServiceItem, StorySlide, ValueProp, ClientSegment } from "./types";

// Icon mapping helper
export const iconMap: { [key: string]: any } = {
  FileText,
  Calculator,
  Building2,
  PieChart,
  Globe,
  Clock,
  ShieldCheck,
  Users,
  Briefcase,
  Layers,
  Linkedin,
  Instagram,
  Youtube,
  Music
};

// Helper functions to transform data with icons
export const transformSocialLinks = (socialLinks: any[]) => 
  socialLinks?.map((link: any) => ({
    ...link,
    icon: iconMap[link.icon]
  })) || [];

export const transformServices = (services: any[]): ServiceItem[] => 
  services?.map((service: any) => ({
    ...service,
    icon: iconMap[service.icon]
  })) || [];

export const transformValueAdditions = (valueAdditions: any[]): ValueProp[] => 
  valueAdditions?.map((value: any) => ({
    ...value,
    icon: iconMap[value.icon]
  })) || [];

export const transformClientSegments = (clientSegments: any[]): ClientSegment[] => 
  clientSegments?.map((segment: any) => ({
    ...segment,
    icon: iconMap[segment.icon]
  })) || [];
