import {
    FaBuilding,
    FaCommentDots,
    FaCss3Alt,
    FaHandHoldingHeart,
    FaHtml5,
    FaNodeJs,
    FaReact,
  } from "react-icons/fa6";
  import { IoLogoJavascript } from "react-icons/io5";
  import {
    SiAuth0,
    SiExpress,
    SiFirebase,
    SiJsonwebtokens,
    SiNestjs,
    SiNextdotjs,
    SiPostgresql,
    SiDocker
  } from "react-icons/si";
  import { SiMongodb } from "react-icons/si";
  import { SiTypescript } from "react-icons/si";
  
  export const LINKS = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
  ];
  
  export const MINIMAP_LINKS = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
    {
      label: "Socials",
      href: "#socials",
    },
  ];
  
  
  
  export const TECHNICAL_SKILLS = [
    {
      name: "HTML",
      icon: FaHtml5,
    },
    {
      name: "CSS",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      name: "React",
      icon: FaReact,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
    },
    {
      name: "Express.js",
      icon: SiExpress,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
    },
    {
      name: "PostgresSql",
      icon: SiPostgresql,
    },
    {
      name: "Docker",
      icon: SiDocker,
    },
    {
      name: "Next-Auth",
      icon: SiAuth0,
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
    },
  ];
  
  export const SOFT_SKILLS = [
    {
      name: "Has it all",
      icon: FaCommentDots,
    },
  ];
  
  export const LANGUAGE_SKILLS = ["English", "Hindi", "Bengali"];
  
  export const SOCIALS = [
    {
      name: "Twitter",
      href:"https://x.com/Swapnanil04",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/swapnanil-majumdar/",
    },
    {
      name: "Github",
      href: "https://github.com/Swapnanil44",
    },
  ];
  
  export const PROJECTS = [
    {
      coverImage: "/project1.png",
      title: "CaseCrafter",
      slug: "CaseCrafter",
      description: "Design customized phonecase From casecrafter.",
      techStack: ["NextJS", "React","TypeScript", "TailwindCSS", "ShadcnUI", "PostgresSql", "Prisma","Stripe"],
      href: "https://casecrafter-beta.vercel.app/",
    },
    {
      coverImage: "/project2.png",
      title: "AI Image SaaS App",
      slug: "AI Image SaaS App",
      description: "A Real Time Saas app with AI Image processing features",
      techStack: [
        "NextJS",
        "React",
        "TypeScript",
        "TailwindCSS",
        "ShadcnUI",
        "MongoDB",
        "Cloudinary",
        "Stripe"
      ],
      href: "https://imaginify-version-two.vercel.app/",
    }
  ];
  