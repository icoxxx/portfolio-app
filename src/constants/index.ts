import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    gerena,
    advance,
    eternity,
    gerenaApp,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Gerena.bg | Freelance",
      icon: gerena,
      iconBg: "#383E56",
      date: "Sept 2023 - Now",
      points: [
        "Developing and maintaining Frontend of the app using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, backend devs, and media publishers to create high-quality online media platform.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer Intern (Bootcamp)",
      company_name: "Advance Academy",
      icon: advance,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Dec 2023",
      points: [
        "Developing web application (group project) using React.js, Node.js, Figma, Jira, Git.",
        "Collaborating with other group members to create the bootcamp project.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Business Owner",
      company_name: "Eternity 94 Ltd",
      icon: eternity,
      iconBg: "#383E56",
      date: "Sept 2019 - Now",
      points: [
        "Budget planning and strategic management, according to 'revenue-expenditure' stats.",
        "Advertising campaigns and managing social media profiles.",
        "Event managament in various of venues with capacity up to 500 pax",
        "Selection and training of employees. Organizing and managing the overall activities of the bar.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Gerena.bg",
      description:
        "Web-based sports media platform that allows admins to create and edit content. Implemented search function for users, google ads, social media share buttons.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "cms",
          color: "pink-text-gradient",
        },
      ],
      image: gerenaApp,
      source_code_link: "https://github.com/icoxxx/gerena2",
    },
    {
      name: "Portfolio",
      description:
        "Custom portfolio web application with 3D-motion graphics, intro, mailing function, custom animations and many more. Typescript used for extra type-safety.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/icoxxx/portfolio-app",
    },
  ];
  
  export { services, technologies, experiences, projects };