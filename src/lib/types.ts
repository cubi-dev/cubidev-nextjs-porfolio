import type { StaticImageData } from "next/image";

// _____________________________________________________________HEADER_SECTION___________________________________________________________
// Type for Logo-Header component
export type LogoText = string;
// _____________________________________________________________END_HEADER_SECTION___________________________________________________________

// _____________________________________________________________HERO_SECTION___________________________________________________________
// Type for DialogEditHeroInformation component
export type DialogEditHeroImageProps = {
  imageUrl: string | StaticImageData;
};

// Type for DialogEditHeroInformation component
export type DialogEditHeroInformationProps = {
  userName: string;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
  description: string;
  setDescription?: React.Dispatch<React.SetStateAction<string>>;
  country: string;
  setCountry?: React.Dispatch<React.SetStateAction<string>>;
  city: string;
  setCity?: React.Dispatch<React.SetStateAction<string>>;
  availableStatus: string;
  setAvailableStatus?: React.Dispatch<React.SetStateAction<string>>;
  githubLink: string;
  setGithubLink?: React.Dispatch<React.SetStateAction<string>>;
  twitterLink: string;
  setTwitterLink?: React.Dispatch<React.SetStateAction<string>>;
  figmaLink: string;
  setFigmaLink?: React.Dispatch<React.SetStateAction<string>>;
};

// Type for HeroSection component
export type HeroSectionProps = {
  imageProps: DialogEditHeroImageProps;
  informationProps: DialogEditHeroInformationProps;
};
// _____________________________________________________________END_HERO_SECTION___________________________________________________________

// _____________________________________________________________ABOUT_SECTION___________________________________________________________
// Type for DialogEditAboutImage component
export type DialogEditAboutImageProps = {
  imageUrl: string | StaticImageData;
};

// Type for DialogEditAboutTitle component
export type DialogEditAboutTitleProps = {
  title: string;
  setTitle?: (title: string) => void;
};

// Type for DialogEditAboutInformation component
export type DialogEditAboutInformationProps = {
  infor: string;
  setInfor?: (infor: string) => void;
};

// Type for AboutSection component
export type AboutSectionProps = {
  imageProps: DialogEditAboutImageProps;
  titleProps: DialogEditAboutTitleProps;
  informationProps: DialogEditAboutInformationProps;
};

// Type for Content component
export type ContentProps = {
  titleProps: DialogEditAboutTitleProps;
  informationProps: DialogEditAboutInformationProps;
};

// _____________________________________________________________END_ABOUT_SECTION___________________________________________________________

// ______________________________________________________________SKILLS_SECTION___________________________________________________________

export type DialogEditSkillTitleProps = {
  title: string;
  setTitle?: (title: string) => void;
};

export type SkillSectionProps = {
  titleProps: DialogEditSkillTitleProps;
  skillsProps: TechDetails[];
};

export type TechDetails = {
  id: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

// ______________________________________________________________END_SKILL_SECTION___________________________________________________________

// ______________________________________________________________EXPERIENCE_SECTION___________________________________________________________

export type DialogEditExperienceTitleProps = {
  title: string;
  setTitle?: (title: string) => void;
};

export type ExperienceDetails = {
  id: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
};

export type ExperienceSectionProps = {
  titleProps: DialogEditExperienceTitleProps;
  experiencesProps: ExperienceDetails[];
};

// ______________________________________________________________END_EXPERIENCE_SECTION___________________________________________________________

// ______________________________________________________________WORK_SECTION___________________________________________________________

export type DialogEditWorkTitleProps = {
  title: string;
  setTitle?: (title: string) => void;
};

export type ProjectDetails = {
  id: string;
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type WorkSectionProps = {
  titleProps: DialogEditWorkTitleProps;
  projectsProps: ProjectDetails[];
};

// ______________________________________________________________END_WORK_SECTION___________________________________________________________

export type DialogEditTestimonialTitleProps = {
  title: string;
  setTitle?: (title: string) => void;
};

export type TestimonialDetails = {
  id: string;
  personName: string;
  personAvatar?: string | StaticImageData;
  testimonial: string;
  title: string;
};

export type TestimonialSectionProps = {
  titleProps: DialogEditTestimonialTitleProps;
  testimonialsProps: TestimonialDetails[];
};

// ______________________________________________________________CONTACT_SECTION___________________________________________________________

export type DialogEditContactTitleProps = {
  title: string;
  setTitle?: (title: string) => void;
};

export type DialogEditContactDetailProps = {
  email: string;
  setEmail?: (email: string) => void;
  phoneNumber: string;
  setPhoneNumber?: (phoneNumber: string) => void;
};

export type ContactSectionProps = {
  titleProps: DialogEditContactTitleProps;
  contactProps: DialogEditContactDetailProps;
};
// _____________________________________________________________HEADER_SECTION___________________________________________________________
// Type for Logo-Header component
export type FooterName = string;
