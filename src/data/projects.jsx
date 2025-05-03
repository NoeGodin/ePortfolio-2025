import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandFirebase } from "react-icons/tb";
import { BsFiletypeCss } from "react-icons/bs";

const projects = {
  personal: [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "My personal portfolio website built with React and Material UI to showcase my projects and skills.",
      image: "/projects/200x300.jpg",
      technologies: ["React", "Material UI", "JavaScript"],
      icon: <FaReact size={24} />,
      link: "https://portfolio.noegodin.com",
      gitlab: "https://gitlab.com/noegodin/portfolio",
    },
    {
      id: 2,
      title: "Weather Application",
      description:
        "A real-time weather application that provides detailed forecasts and weather information.",
      image: "/projects/300x300.jpg",
      technologies: ["React", "TypeScript", "Weather API"],
      icon: <SiTypescript size={24} />,
      link: "https://weather.noegodin.com",
    },
    {
      id: 3,
      title: "Task Manager",
      description:
        "A productivity tool for managing daily tasks with categories and priority settings.",
      image: "/projects/832x624.jpg",
      technologies: ["React", "Redux", "Firebase"],
      icon: <TbBrandFirebase size={24} />,
      link: "https://taskmanager.noegodin.com",
      gitlab: "https://gitlab.com/noegodin/taskmanager",
    },
    {
      id: 4,
      title: "Music Player",
      description:
        "A custom music player with playlist functionality and audio visualization features.",
      image: "/projects/960x640.jpg",
      technologies: ["React", "Web Audio API", "CSS"],
      icon: <SiJavascript size={24} />,
      gitlab: "https://gitlab.com/noegodin/music-player",
    },
    {
      id: 5,
      title: "Recipe Finder",
      description:
        "An application to search for recipes based on available ingredients and dietary preferences.",
      image: "/projects/1024x640.jpg",
      technologies: ["React", "API Integration", "Material UI"],
      icon: <FaReact size={24} />,
      link: "https://recipes.noegodin.com",
    },
  ],
  education: [
    {
      id: 6,
      title: "University Course Platform",
      description:
        "A collaborative platform developed for my university to manage course materials and assignments.",
      image: "/projects/1280x720.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      icon: <FaNodeJs size={24} />,
      link: "https://university-platform.noegodin.com",
    },
    {
      id: 7,
      title: "Research Visualization Tool",
      description:
        "Data visualization tool created for a research project on renewable energy consumption.",
      image: "/projects/1920x1080.jpg",
      technologies: ["D3.js", "JavaScript", "CSV Data"],
      icon: <SiJavascript size={24} />,
      link: "https://energy-viz.noegodin.com",
      gitlab: "https://gitlab.com/noegodin/energy-visualization",
    },
    {
      id: 8,
      title: "Algorithm Visualizer",
      description:
        "Educational tool that visualizes sorting algorithms for computer science studies.",
      image: "/projects/200x300.jpg",
      technologies: ["React", "JavaScript", "CSS Animations"],
      icon: <SiJavascript size={24} />,
      link: "https://algo-viz.noegodin.com",
      gitlab: "https://gitlab.com/noegodin/algorithm-visualizer",
    },
    {
      id: 9,
      title: "Scientific Calculator",
      description:
        "Advanced calculator application with scientific functions and formula history.",
      image: "/projects/300x300.jpg",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      icon: <BsFiletypeCss size={24} />,
      gitlab: "https://gitlab.com/noegodin/sci-calculator",
    },
  ],
  professional: [
    {
      id: 10,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution built for a client with product management and payment processing.",
      image: "/projects/832x624.jpg",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      icon: <SiMongodb size={24} />,
      link: "https://client-ecommerce.noegodin.com",
    },
    {
      id: 11,
      title: "Healthcare Dashboard",
      description:
        "Administrative dashboard for healthcare providers to manage patient data and appointments.",
      image: "/projects/960x640.jpg",
      technologies: ["TypeScript", "React", "Azure", "SQL"],
      icon: <SiTypescript size={24} />,
      link: "https://healthcare-dashboard.noegodin.com",
    },
    {
      id: 12,
      title: "Marketing Analytics Tool",
      description:
        "Data analytics platform for marketing teams to track campaign performance and ROI.",
      image: "/projects/1024x640.jpg",
      technologies: ["React", "D3.js", "REST API", "Java Backend"],
      icon: <DiJava size={24} />,
      link: "https://marketing-analytics.noegodin.com",
      gitlab: "https://gitlab.com/noegodin/marketing-analytics",
    },
    {
      id: 13,
      title: "CRM System",
      description:
        "Customer relationship management system with lead tracking and sales pipeline features.",
      image: "/projects/1280x720.jpg",
      technologies: ["React", "Node.js", "PostgreSQL"],
      icon: <FaDatabase size={24} />,
    },
  ],
};

export default projects;
