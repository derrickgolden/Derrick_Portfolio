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
    docker,
    meta,
    pivot,
    threejs,
    mysql,
    bootstrap,
    karibu_chakula,
    lyriks,
    pharm_pos,
    worldwirepay,
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
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "APIs",
      icon: backend,
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
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Pivot Networks",
      icon: pivot,
      iconBg: "#383E56",
      date: "October 2023 - to date",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Building RESTful APIs for front-end team",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pharmacy POS",
      description:
        "Point of Sale platform for a pharmacy to effectively sell medicine and print receipt. Also, analyze sales and payment reports with graphs and tables, including warnings on out-of-stock medicine.",      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "yellow-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pharm_pos,
      source_code_link: "https://github.com/derrickgolden/pharmacy_pos_web",
      demo_link: "https://pharmapos.netlify.app/kjcc7BiGOqHZCw48zuEu82M0rHxImr1txrgkqqf"
    },
    {
      name: "Karibu Chakula",
      description:
        "Web application that enables users to plan for their meals with preparation instructions and number of calories. Future plan is to customize the web app with local cuisines with the right database." ,     tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: karibu_chakula,
      source_code_link: "https://github.com/derrickgolden/Karibu_Chakula",
      demo_link: "https://karibuchakula.netlify.app/"
    },
    {
      name: "World Wire Transfer",
      description:
      "Web application for transferring money internationally. The user will be able to send money using email to different currency wallets available in the platform that match the receiver wallet.",      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "yellow-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: worldwirepay,
      source_code_link: "https://github.com/derrickgolden/global_wire_pay",
      demo_link: "https://worldwirepay.com/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  