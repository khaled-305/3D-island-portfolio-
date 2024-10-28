import { meta, shopify, starbucks, tesla, code } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Lead, Senior Software Developer",
    company_name: "Tenece Professional Services",
    icon: code,
    iconBg: "#accbe1",
    date: "2020 - PRESENT",
    points: [
      "Select and apply the correct technologies, strategies, and algorithms to effectively solve problems.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Mentor, guide and support other team members.",
      "Suggested improvements in existing code base to make a better software experience for users.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Full-Stack Software Engineer",
    company_name: "Verified Creators",
    icon: code,
    iconBg: "#fbc3bc",
    date: "2018 - 2020",
    points: [
      "Analyse underperforming components in system to improve their performance.",
      "Implement new features to existing codebase.",
      "Prompt technical support.",
      "Contributed to the estimation and scoping of projects.",
      "Mentor junior developers.",
      "Developed all-around responsive interfaces, not neglecting older browsers and smaller screen-sizes.",
      "Participate in code review sessions to ensure code quality and best practices.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "VirtuallyPros",
    icon: code,
    iconBg: "#b7e4c7",
    date: "2017 - 2018",
    points: [
      "Maintained, and Implemented new features to active projects.",
      "Collaborate with team members and stakeholders such as Project Managers, QA, Product designers, to deliver features that solve customers problems effectively and efficiently.",
      "Played the role of Team Lead in Project development.",
      "Supervised and mentored junior developers.",
      "Participated in code review sessions to ensure code quality across codebase.",
    ],
  },
  {
    title: "Freelance Software Engineer",
    company_name: "Freelance",
    icon: code,
    iconBg: "#a2d2ff",
    date: "2016 - 2017",
    points: [
      "As a freelance software engineer, I have extensive experience working with multiple programming languages and frameworks such as JavaScript, Python, React.js, Node.js, Express.js, React Native, Django, Flask, wordpress, AWS, Google Cloud, etc. I have worked with various clients to design and develop custom software solutions that meet their unique business needs.",
      "My responsibilities as a freelance software engineer include analyzing client requirements, developing software designs, writing code, and testing software functionality. I have worked on projects ranging from small-scale web applications to complex enterprise-level software systems.",
      "As a freelance software engineer, I managed teams consisting of other developers using agile methodologies to manage project timelines and work collaboratively with other team members.",
      "One of my major projects involved developing a cloud-based application for an e-commerce startup. I worked closely with the client to design and develop a prototype application using JavaScript (React.js, Node.js, Next.js, React Native) and python, ensuring that it met all of their requirements while remaining scalable and easy to maintain.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/khaled-305?tab=repositories",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/chikeziem-nwadinobi-43b871151/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Morden iPhone landing page",
    description:
      "Developed a super cool iphone landing page using; GSAP animations, Three.js, 3D effects, Next.js, Typescript, TailwindCSS.",
    link: "https://iphone-15-website-sand.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "YouTube Clone",
    description:
      "Developed a YouTube clone web app using React.js, and using data from YouTube v3 API. With a responsive video section, custom categories, youtube channel pages, video page and video player, advanced filtering for related channels and videos.",
    link: "https://adorable-licorice-000394.netlify.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Food Devlivery App",
    description:
      "A full-stack food delivery web app. In this web app, user's can view different categories of food and drinks, add items to cart, update quantity of items in cart, authenticate using google auth.",
    link: "https://astonishing-profiterole-37547b.netlify.app/",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Uber Clone - full-stack mobile app",
    description:
      "Built with React Native for handling the user interface, Google Maps for rendering maps with directions, stripe for handling payments, serverless Postgres for managing databases, and styled with TailwindCSS.",
    link: "https://github.com/khaled-305/React-Native-Uber-Clone",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-time Crypto Order Book",
    description:
      "Developed a crypto order book using react.js, typescript, redux and web socket. It displays the current price of Bitcoin and etherium, and the buy and sale changes in real time. It has options to change feed from 'BTC' to 'ETC'. You can also group or spread the result as you wish.",
    link: "https://clinquant-hamster-ad6502.netlify.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Hospital Management System",
    description:
      "A full-stack hospital management application that streamlines patient registration, appointment scheduling, and medical records, with SMS notifications.",
    link: "https://github.com/khaled-305/Hospital-Management-System-",
  },
];
