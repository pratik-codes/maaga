import { FileText, Calculator, Building2, PieChart, Globe, Clock, ShieldCheck, Users, Briefcase, Layers, Linkedin, Instagram, Youtube, Music } from "lucide-react";
import { ServiceItem, StorySlide, ValueProp, ClientSegment } from "./types";
import data from "./data.json";

// Icon mapping helper
const iconMap: { [key: string]: any } = {
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

export const NAV_LINKS = data.navLinks;

export const SOCIAL_LINKS = data.socialLinks.map((link: any) => ({
  ...link,
  icon: iconMap[link.icon]
}));

export const SERVICES: ServiceItem[] = data.services.map((service: any) => ({
  ...service,
  icon: iconMap[service.icon]
}));

export const STORY_SLIDES: StorySlide[] = data.storySlides;

export const VALUE_ADDITIONS: ValueProp[] = data.valueAdditions.map((value: any) => ({
  ...value,
  icon: iconMap[value.icon]
}));

export const CLIENT_SEGMENTS: ClientSegment[] = data.clientSegments.map((segment: any) => ({
  ...segment,
  icon: iconMap[segment.icon]
}));

export const TESTIMONIALS = data.testimonials;

export const TEAM_MEMBERS = data.team;
export const COMPANY_INFO = data.companyInfo;
export const VALUE_PROPOSITION = data.valueProposition;
export const SERVICES_SECTION = data.servicesSection;
export const ABOUT_SECTION = data.about;
export const TEAM_SECTION = data.teamSection;
export const HERO = data.hero;
export const CONTACT = data.contact;
export const STORY_SECTION = data.storySection;
export const TESTIMONIALS_SECTION = data.testimonialsSection;
export const FOOTER = data.footer;
export const NAVBAR = data.navbar;
