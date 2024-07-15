import { Figma, Github, Twitter } from "lucide-react";

import LogoJavascript from "../../public/skill-section/icon-javascript.svg";
import LogoTypescript from "../../public/skill-section/icon-typescript.svg";
import LogoReact from "../../public/skill-section/icon-react.svg";
import LogoNextjs from "../../public/skill-section/icon-nextjs.svg";
import LogoNodejs from "../../public/skill-section/icon-nodejs.svg";
import LogoExpress from "../../public/skill-section/icon-express.svg";
import LogoExpressLight from "../../public/skill-section/icon-express-light.svg";
import LogoNest from "../../public/skill-section/icon-nest.svg";
import LogoSocket from "../../public/skill-section/icon-socket.svg";
import LogoSocketLight from "../../public/skill-section/icon-socket-light.svg";
import LogoPostgreSQL from "../../public/skill-section/icon-postgresql.svg";
import LogoMongoDB from "../../public/skill-section/icon-mongodb.svg";
import LogoSass from "../../public/skill-section/icon-sass.svg";
import LogoTailwindcss from "../../public/skill-section/icon-tailwindcss.svg";
import LogoFigma from "../../public/skill-section/icon-figma.svg";
import LogoCypress from "../../public/skill-section/icon-cypress.svg";
import LogoCypressLight from "../../public/skill-section/icon-cypress-light.svg";
import LogoStorybook from "../../public/skill-section/icon-storybook.svg";
import LogoGit from "../../public/skill-section/icon-git.svg";

import LogoUpwork from "../../public/skill-section/logo-upwork.svg";
import LogoGreenApex from "../../public/skill-section/logo-greenapex.svg";
import LogoGreenApexLight from "../../public/skill-section/logo-greenapex-light.svg";
import LogoDotnpixel from "../../public/skill-section/logo-dotnpixel.svg";
import LogoDotnpixelLight from "../../public/skill-section/logo-dotnpixel-light.svg";
import LogoCubiSpace from "../../public/skill-section/logo_text_black.png";
import LogoCubiSpace_Dark from "../../public/skill-section/Logo_no_background.png";

import ProjectFiskil from "../../public/work-section/project-fiskil.png";
import ProjectWingie from "../../public/work-section/project-wingie.png";
import ProjectPepehousing from "../../public/work-section/project-pepehousing.png";
import ProjectPlaceHolder from "../../public/hero-section/Banner.png"


import AvatarDummy from "../../public/testimonial-section/avatar-dummy.svg";

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
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
  GITHUB_REPO: "https://github.com/cubi-dev?tab=repositories",
  TWITTER: "https://x.com/Cubiwork",
  FIGMA: "https://www.figma.com/@bi8",
  FIGMA_FILE:
    "https://www.figma.com/design/dlk7IimfQanJgTH4eLWoKV/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?node-id=0-1&t=VxkU5ObcagGSwRpC-1",
};

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/cubi-dev",
  },
  {
    icon: Twitter,
    url: "https://x.com/Cubiwork",
  },
  {
    icon: Figma,
    url: "https://www.figma.com/@bi8",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Nest.js",
    logo: LogoNest,
    url: "https://nestjs.com/",
  },
  {
    label: "Socket.io",
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: "https://socket.io/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Cypress",
    logo: LogoCypress,
    darkModeLogo: LogoCypressLight,
    url: "https://www.cypress.io/",
  },
  {
    label: "Storybook",
    logo: LogoStorybook,
    url: "https://storybook.js.org/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoCubiSpace,
    darkModeLogo: LogoCubiSpace_Dark,
    logoAlt: "Logo CubiSpace",
    position: "Position",
    startDate: new Date(2021, 10),
    currentlyWorkHere: true,
    summary: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    ],
  },
  {
    logo: LogoCubiSpace,
    darkModeLogo: LogoCubiSpace_Dark,
    logoAlt: "Logo CubiSpace",
    position: "Position",
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing ad dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simplhe 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown ",
    ],
  },
  {
    logo: LogoCubiSpace,
    darkModeLogo: LogoCubiSpace_Dark,
    logoAlt: "LogoCubiSpace",
    position: "Position",
    startDate: new Date(2015, 11),
    endDate: new Date(2017, 4),
    summary: ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://github.com/cubi-dev",
    previewImage: ProjectPlaceHolder,
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
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://github.com/cubi-dev",
    previewImage: ProjectPlaceHolder,
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
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://github.com/cubi-dev",
    previewImage: ProjectPlaceHolder,
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

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: "Krisztian Gyuris",
    personAvatar: AvatarDummy,
    title: "Founder - inboxgenie.io",
    testimonial:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
  },
  {
    personName: "Eugen Esanu",
    personAvatar: AvatarDummy,
    title: "Founder - shosho.design",
    testimonial:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    personName: "Joe Matkin",
    personAvatar: AvatarDummy,
    title: "Freelancer",
    testimonial:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
  },
];
