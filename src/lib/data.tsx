import {
  Facebook,
  Figma,
  Github,
  Instagram,
  Phone,
  Twitter,
  TwitterIcon,
} from "lucide-react";

import LogoJavascript from "@/../public/portfolio-dev/skill-section/icon-javascript.svg";
import LogoTypescript from "@/../public/portfolio-dev/skill-section/icon-typescript.svg";
import LogoReact from "@/../public/portfolio-dev/skill-section/icon-react.svg";
import LogoNextjs from "@/../public/portfolio-dev/skill-section/icon-nextjs.svg";
import LogoNodejs from "@/../public/portfolio-dev/skill-section/icon-nodejs.svg";
import LogoExpress from "@/../public/portfolio-dev/skill-section/icon-express.svg";
import LogoExpressLight from "@/../public/portfolio-dev/skill-section/icon-express-light.svg";
import LogoNest from "@/../public/portfolio-dev/skill-section/icon-nest.svg";
import LogoSocket from "@/../public/portfolio-dev/skill-section/icon-socket.svg";
import LogoSocketLight from "@/../public/portfolio-dev/skill-section/icon-socket-light.svg";
import LogoPostgreSQL from "@/../public/portfolio-dev/skill-section/icon-postgresql.svg";
import LogoMongoDB from "@/../public/portfolio-dev/skill-section/icon-mongodb.svg";
import LogoSass from "@/../public/portfolio-dev/skill-section/icon-sass.svg";
import LogoTailwindcss from "@/../public/portfolio-dev/skill-section/icon-tailwindcss.svg";
import LogoFigma from "@/../public/portfolio-dev/skill-section/icon-figma.svg";
import LogoCypress from "@/../public/portfolio-dev/skill-section/icon-cypress.svg";
import LogoCypressLight from "@/../public/portfolio-dev/skill-section/icon-cypress-light.svg";
import LogoStorybook from "@/../public/portfolio-dev/skill-section/icon-storybook.svg";
import LogoGit from "@/../public/portfolio-dev/skill-section/icon-git.svg";

import LogoUpwork from "@/../public/portfolio-dev/skill-section/logo-upwork.svg";
import LogoGreenApex from "@/../public/portfolio-dev/skill-section/logo-greenapex.svg";
import LogoGreenApexLight from "@/../public/portfolio-dev/skill-section/logo-greenapex-light.svg";
import LogoDotnpixel from "@/../public/portfolio-dev/skill-section/logo-dotnpixel.svg";
import LogoDotnpixelLight from "@/../public/portfolio-dev/skill-section/logo-dotnpixel-light.svg";

import ProjectFiskil from "@/../public/portfolio-dev/work-section/project-fiskil.png";
import ProjectWingie from "@/../public/portfolio-dev/work-section/project-wingie.png";
import ProjectPepehousing from "@/../public/portfolio-dev/work-section/project-pepehousing.png";

import AvatarDummy from "@/../public/portfolio-dev/testimonial-section/avatar-dummy.svg";
import AboutSectionImage from "@/../public/portfolio-dev/about-section/about_section_image.png";
import HeroSecionImage from "@/../public/portfolio-dev/hero-section/hero_section_image.png";
import HeroSecionImageMarketing from "@/../public/portfolio-marketing/hero-section/marketing_hero_image.png";

import HeroSectionImageLawyer from "@/../public/portfolio-lawyer/hero-section/hero_section_default_lawyer.svg";

import service_section_icon_1 from "@/../public/portfolio-lawyer/services-section/service_section_icon_1.svg";
import service_section_icon_2 from "@/../public/portfolio-lawyer/services-section/service_section_icon_2.svg";
import service_section_icon_3 from "@/../public/portfolio-lawyer/services-section/service_section_icon_3.svg";
import service_section_icon_4 from "@/../public/portfolio-lawyer/services-section/service_section_icon_4.svg";

import facebook_icon_lawyer from "@/../public/portfolio-lawyer/social-icon/social_icon_facebook.svg";
import dribble_icon_lawyer from "@/../public/portfolio-lawyer/social-icon/social_icon_dribble.svg";
import twitter_icon_lawyer from "@/../public/portfolio-lawyer/social-icon/social_icon_twitter.svg";
import youtube_icon_lawyer from "@/../public/portfolio-lawyer/social-icon/social_icon_youtube.svg";

import {
  AboutSectionProps,
  AchievementDetails,
  ContactSectionProps,
  ExperienceDetails,
  ExperienceSectionProps,
  HeroSectionProps,
  ProjectDetails,
  ServiceDetails,
  SkillSectionProps,
  TechDetails,
  TestimonialDetails,
  TestimonialSectionProps,
  WorkSectionProps,
} from "@/lib/types";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/cubi-dev",
  GITHUB_REPO: "https://github.com/shahsagarm/sagarshah.dev",
  TWITTER: "https://x.com/Cubiwork",
  FIGMA: "https://www.figma.com/@bi8",
  FIGMA_FILE:
    "https://www.figma.com/design/dlk7IimfQanJgTH4eLWoKV/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?node-id=0-1&t=VxkU5ObcagGSwRpC-1",
};
// Hero section data
export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/cubi-dev",
    displayName: "Github",
  },
  {
    icon: Twitter,
    url: "https://x.com/Cubiwork",
    displayName: "Twitter",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@bi8",
    displayName: "Figma",
  },
];

export const HERO_SECTION_DATA: HeroSectionProps = {
  imageProps: {
    imageUrl: HeroSecionImage,
  },
  informationProps: {
    userName: "UserName",
    description:
      "I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.",
    country: "Vietnam",
    city: "Ho Chi Minh",
    availableStatus: "Available for new projects",
    githubLink:
      SOCIAL_LINKS.find((link) => link.displayName === "Github")?.url || "",
    twitterLink:
      SOCIAL_LINKS.find((link) => link.displayName === "Twitter")?.url || "",
    figmaLink:
      SOCIAL_LINKS.find((link) => link.displayName === "Figma")?.url || "",
  },
};

// About section data
export const ABOUT_SECTION_DATA: AboutSectionProps = {
  imageProps: {
    imageUrl: AboutSectionImage,
  },
  titleProps: {
    title: "Curious about me? Here you have it:",
    setTitle: (title: string) => console.log(title),
  },
  informationProps: {
    infor:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    setInfor: (infor: string) => console.log(infor),
  },
};

// Skill section data
export const TECHNOLOGIES: TechDetails[] = [
  {
    id: "1",
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "2",
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    id: "3",
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    id: "4",
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    id: "5",
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    id: "6",
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    id: "7",
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    id: "8",
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    id: "9",
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    id: "10",
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    id: "11",
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    id: "12",
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    id: "13",
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    id: "14",
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    id: "15",
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    id: "16",
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const SKILLS_SECTION_DATA: SkillSectionProps = {
  titleProps: {
    title: "The skills, tools and technologies I am really good at:",
  },
  skillsProps: TECHNOLOGIES,
};

// Experience section data
export const EXPERIENCES: ExperienceDetails[] = [
  {
    id: "1",
    logo: LogoUpwork,
    logoAlt: "Upwork logo",
    position: "Independent Freelancer",
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      "Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.",
      "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
    ],
  },
  {
    id: "2",
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: "Greenapex logo",
    position: "Team Lead",
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      "Acted as team lead in different projects.",
      "Brainstormed new ideas & gathered requirements for internal projects.",
      "Designed architecture of different projects (frontend + backend).",
      "Worked on enterprise-level projects for a variety of clients.",
      "Handled sprint planning & task distribution.",
    ],
  },
  {
    id: "3",
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: "Dotnpixel logo",
    position: "Full Stack Developer",
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: ["Worked as a full stack developer (React / Laravel)."],
  },
];

export const EXPERIENCE_SECTION_DATA: ExperienceSectionProps = {
  titleProps: {
    title: "Here is a quick summary of my most recent experiences:",
  },
  experiencesProps: EXPERIENCES,
};

// Work section data
export const PROJECTS: ProjectDetails[] = [
  {
    id: "1",
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    previewImage: ProjectWingie,
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    id: "2",
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    previewImage: ProjectFiskil,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    id: "3",
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    previewImage: ProjectPepehousing,
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];

export const WORK_SECTION_DATA: WorkSectionProps = {
  titleProps: {
    title: "Some of the noteworthy projects I have built:",
  },
  projectsProps: PROJECTS,
};

// Testimonial section data
export const TESTIMONIALS: TestimonialDetails[] = [
  {
    id: "1",
    personName: "Krisztian Gyuris",
    personAvatar: AvatarDummy,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    id: "2",
    personName: "Eugen Esanu",
    personAvatar: AvatarDummy,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    id: "3",
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];

export const TESTIMONIAL_SECTION_DATA: TestimonialSectionProps = {
  titleProps: {
    title: "Nice things people have said about me:",
  },
  testimonialsProps: TESTIMONIALS,
};

// Contact section data
export const CONTACT_SECTION_DATA: ContactSectionProps = {
  titleProps: {
    title:
      "What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.",
  },
  contactProps: {
    email: "email@gmail.com",
    phoneNumber: "+84 0901391234",
  },
};

//______________________________________________________MARKETING DATA_______________________________________________________________________

// Navigation links for marketing portfolio
export const NAV_LINKS_MARKETING = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "Service",
    href: "#service",
  },
];

// Social link data for marketing portfolio
export const SOCIAL_LINKS_MARKETING = [
  {
    icon: Facebook,
    url: "https://www.facebook.com/",
    displayName: "Facebook",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/",
    displayName: "Instagram",
  },
  {
    icon: Phone,
    url: "0912341234",
    displayName: "Phone",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/",
    displayName: "Twitter",
  },
];

// Hero section data for marketing portfolio
export const HERO_SECTION_DATA_MARKETING: HeroSectionProps = {
  imageProps: {
    imageUrl: HeroSecionImageMarketing,
  },
  informationProps: {
    userName: "Andrew",
    description:
      "Introducing King Andrew, a seasoned Business Consultant, Internet Marketer, and Digital Marketer. With unparalleled expertise, Andrew unveils an exclusive and undisclosed method to unlock substantial online earnings, providing you with insights and strategies that have remained unknown to many. Discover the untapped potential to generate weekly income directly deposited into your bank account with this transformative business model.",
    facebookLink:
      SOCIAL_LINKS_MARKETING.find((link) => link.displayName === "Facebook")
        ?.url || "",
    instagramLink:
      SOCIAL_LINKS_MARKETING.find((link) => link.displayName === "Instagram")
        ?.url || "",
    phoneLink:
      SOCIAL_LINKS_MARKETING.find((link) => link.displayName === "Phone")
        ?.url || "",
    twitterLink:
      SOCIAL_LINKS_MARKETING.find((link) => link.displayName === "Twitter")
        ?.url || "",
  },
};

// Experience section data for marketing portfolio
export const SERVICES_DATA_MARKETING: ServiceDetails[] = [
  {
    id: "1",
    title: "Web Development",
    description:
      "It is a long established fact that reader will be distracted by the content of the layout of the page.",
    link: "https://www.google.com",
  },
  {
    id: "2",
    title: "Mobile Development",
    description:
      "Creating mobile applications that are fast, responsive, and visually appealing.",
    link: "https://www.google.com",
  },
  {
    id: "3",
    title: "UI/UX Design",
    description:
      "Designing user interfaces and experiences that are intuitive and engaging.",
    link: "https://www.google.com",
  },
  {
    id: "4",
    title: "Web Development",
    description:
      "It is a long established fact that reader will be distracted by the content of the layout of the page.",
    link: "https://www.google.com",
  },
  {
    id: "5",
    title: "Mobile Development",
    description:
      "Creating mobile applications that are fast, responsive, and visually appealing.",
    link: "https://www.google.com",
  },
  {
    id: "6",
    title: "UI/UX Design",
    description:
      "Designing user interfaces and experiences that are intuitive and engaging.",
    link: "https://www.google.com",
  },
];

// Contact section data for marketing portfolio
export const CONTACT_SECTION_DATA_MARKETING: ContactSectionProps = {
  titleProps: {
    title:
      "If you are intrigued by my groundbreaking marketing strategies and eager to delve deeper into their potential, don't hesitate to reach out. Let's ignite the spark and embark on a transformative journey together. Contact me now to set the wheels in motion.",
  },
  contactProps: {
    email: "king_andrew@gmail.com",
  },
};

// Experience section data for marketing portfolio
export const EXPERIENCES_MARKETING: ExperienceDetails[] = [
  {
    id: "1",
    logo: LogoUpwork,
    logoAlt: "Upwork logo",
    position: "Independent Freelancer",
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    ],
  },
  {
    id: "2",
    logo: LogoGreenApex,
    darkModeLogo: LogoGreenApexLight,
    logoAlt: "Greenapex logo",
    position: "Team Lead Marketing Team",
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    id: "3",
    logo: LogoDotnpixel,
    darkModeLogo: LogoDotnpixelLight,
    logoAlt: "Dotnpixel logo",
    position: "Marketing Agency",
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ],
  },
];

export const EXPERIENCE_SECTION_DATA_MARKETING: ExperienceSectionProps = {
  titleProps: {
    title: "Here is a quick summary of my most recent experiences:",
  },
  experiencesProps: EXPERIENCES_MARKETING,
};

//______________________________________________________LAWYER_DATA_______________________________________________________________________

// Navigation links for lawyer portfolio
export const NAV_LINKS_LAWYER = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Service",
    href: "#service",
  },
  {
    label: "Achievement",
    href: "#achievement",
  },
  {
    label: "Testimonial",
    href: "#testimonial",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

// Experience section data for lawyer portfolio
export const SERVICES_DATA_LAWYER: ServiceDetails[] = [
  {
    id: "1",
    title: "Enviromental Law",
    description:
      "Environmental legal issues might occur since the planned business activities are designed",
    icon: service_section_icon_1,
  },
  {
    id: "2",
    title: "Corporate and Commercial",
    description:
      "Creating mobile applications that are fast, responsive, and visually appealing.",
    icon: service_section_icon_2,
  },
  {
    id: "3",
    title: "Information and Technology",
    description:
      "Designing user interfaces and experiences that are intuitive and engaging.",
    icon: service_section_icon_3,
  },
  {
    id: "4",
    title: "Other Services",
    description:
      "It is a long established fact that reader will be distracted by the content of the layout of the page.",
    icon: service_section_icon_4,
  },
];

// Testimonial section data for lawyer portfolio
export const TESTIMONIALS_LAWYER: TestimonialDetails[] = [
  {
    id: "1",
    personName: "Anya Tailor Joy",
    personAvatar: AvatarDummy,
    title: "CEO, SF Industires",
    testimonial:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.",
  },
  {
    id: "2",
    personName: "Sri Alam",
    personAvatar: AvatarDummy,
    title: "CEO, Membagongkan GROUP",
    testimonial:
      "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations.",
  },
];

// Social link data for marketing portfolio
export const SOCIAL_LINKS_LAWYER = [
  {
    icon: facebook_icon_lawyer,
    url: "https://www.instagram.com/",
    displayName: "Instagram",
  },
  {
    icon: dribble_icon_lawyer,
    url: "https://dribbble.com/",
    displayName: "Dibble",
  },
  {
    icon: twitter_icon_lawyer,
    url: "https://twitter.com/",
    displayName: "Twitter",
  },
  {
    icon: youtube_icon_lawyer,
    url: "https://youtube.com/",
    displayName: "Youtube",
  },
];

// Hero section data for lawyer portfolio
export const HERO_SECTION_DATA_LAWYER: HeroSectionProps = {
  imageProps: {
    imageUrl: HeroSectionImageLawyer,
  },
  informationProps: {
    userName: "Tiara Andini",
    major: "Lawyer",
    message: "Your Solution Legal Consultancy",
    availableStatus: "Stay connected to the upcoming & Recent jobs",
    description:
      "We are here to help you take care of your legality with the best service especially for you.",
    emailLink: "email@gmail.com",
  },
};

// Achievement section data for lawyer portfolio
export const ACHIEVEMENTS_DATA_LAWYER: AchievementDetails = {
  id: "1",
  message: "My achievement in the journey depicted in numbers",
  clients: "30",
  businessLegalities: "300+",
  yearOfJourney: "8",
};

// Contact section data for marketing portfolio
export const CONTACT_SECTION_DATA_LAWYER: ContactSectionProps = {
  titleProps: {
    title:
      "Request for a personalized budget for your legal problem. We will send you a coupe options in 24 hours. You can have free consult , if a our first customer",
  },
  contactProps: {
    email: "yourEmail@gmail.com",
  },
};
