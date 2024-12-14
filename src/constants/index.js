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
    git,
    figma,
    docker,
    shopify,
    threejs,
    ecc,
    interswitch,
    stanbic,
    turningways,
    whossy,
    temidire,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "React Developer",
      icon: creator,
    },
    {
      title: "Shopify Developer",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "shopify liquid",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "KONFAMPAY (ECC)",
      icon: ecc,
      iconBg: "#ffffff",
      date: "Dec 2022 - Feb 2023",
      points: [
        "Fixed UI bugs and implemented new features for the web application using react with typescript.",
        "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
        "Participating in code reviews with other developers.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    // {
    //   title: "Frontend Developer",
    //   company_name: "AFRIKTV",
    //   icon: afriktv,
    //   iconBg: "#E6DEDD",
    //   date: "Mar 2023 - July 2023",
    //   points: [
    //     "Developed several mobile-responsive pages and UI components of the frontend application using Javascript, HeadlessUI, React.js, Tailwind CSS and Material UI. ",
    //     "Worked closely with a remote team of 3 engineers and 1 designer to meet the project requirements and desired functionality.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //   ],
    // },
    {
      title: "Implementation Engineer",
      company_name: "INTERSWITCH - intern",
      icon: interswitch,
      iconBg: "#383E56",
      date: "Aug 2023 - Oct 2023",
      points: [
        "Performed root cause analysis for application and service issues, achieving a 95% resolution rate for escalated cases within agreed SLAs, reducing downtime by 30%.",
        "Designed and implemented innovative testing approaches in test environments, ensuring 100% accuracy and stability before deploying updates to production systems.",
        "Documented application and service changes with precision, improving knowledge transfer and reducing troubleshooting time for future implementations by 20%.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Stanbic IBTC - Intern",
      icon: stanbic,
      iconBg: "#ffffff",
      date: "Mar 2024 - Aug 2024",
      points: [
        "Diagnosed and resolved performance bottlenecks across mobile applications, reducing average load time by 25% and improving user retention by 15%.",
        "Conducted rigorous testing and debugging sessions, ensuring 98% app stability across diverse device platforms.",
        "Acquired proficiency in writing clean, maintainable code by adhering to industry best practices, leading to a 30% decrease in reported codebase issues.",
      ],
    },
    {
      title: "Shopify Developer",
      company_name: "MyShopDevs",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Present",
      points: [
        "Developing and maintaining Shopify e-commerce stores, including custom themes and third-party app integrations.",
        "Customizing Shopify themes using Liquid, HTML, CSS, and JavaScript to meet client specifications",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Working with Dire was very nice. I was impressed by his problem-solving skills and attention to detail",
      name: "Joshua Adeyemo",
      designation: "Software Engineer",
      company: "Stanbic",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about the success of a completed project like Dire does.",
      name: "Opemipo Disu",
      designation: "Developer",
      company: "AfrikTV",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "He demonstrated exceptional creativity, a strong commitment to ensuring the project's success.",
      name: "Davies",
      designation: "Backend Engineer",
      company: "Migranium",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Digital Church",
      description:
        "Web-based application designed to connect users with churches. Users can view church services, events, and sermons, and make donations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "chart.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: turningways,
      source_code_link: "https://github.com/turning-ways/TurningWaysDigitalChurch",
      site_link: "https://www.turningways.com/",
    },
    {
      name: "Whossy",
      description:
        "A modern dating web application designed to connect like-minded individuals based on shared interests, values, and other compatibility factors.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: whossy,
      source_code_link: "https://github.com/Transcend-Agency/whossy-web-app",
      site_link: "https://whossy-web-app-staging.vercel.app/",
    },
    {
      name: "Temidire",
      description:
        "A web-based design showcasing my expertise in web design and web application development. The site is built using React, Tailwind CSS, and three.js.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: temidire,
      source_code_link: "https://github.com/Temi-Dire/Portfolio",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
