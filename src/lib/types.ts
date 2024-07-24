import type { StaticImageData } from 'next/image';

export type TechDetails = {
  id: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  id: string,
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ProjectDetails = {
  id: string;
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type TestimonialDetails = {
  id: string;
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};
