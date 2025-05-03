import { FaJava, FaReact, FaDocker, FaPython } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { ImGit } from "react-icons/im";
import { SiCplusplus, SiTypescript } from "react-icons/si";

const technologies = [
  {
    name: "React",
    description: "JavaScript component library",
    icon: <FaReact size={24} />,
    color: "rgba(97, 218, 251, 0.8)",
  },
  {
    name: "Java",
    description: "Enterprise-grade language",
    icon: <FaJava size={24} />,
    color: "rgba(234, 45, 46, 0.8)",
  },
  {
    name: "TypeScript",
    description: "Typed JavaScript superset",
    icon: <SiTypescript size={24} />,
    color: "rgba(49, 120, 198, 0.8)",
  },
  {
    name: "C++",
    description: "High-performance language",
    icon: <SiCplusplus size={24} />,
    color: "rgba(101, 154, 210, 0.8)",
  },
  {
    name: "Python",
    description: "Versatile scripting language",
    icon: <FaPython size={24} />,
    color: "rgba(255, 219, 79, 0.8)",
  },
  {
    name: "Azure",
    description: "Microsoft cloud platform",
    icon: <VscAzure size={24} />,
    color: "rgba(8, 100, 180, 0.8)",
  },
  {
    name: "Docker",
    description: "Container service provider",
    icon: <FaDocker size={24} />,
    color: "rgba(36, 150, 237, 0.8)",
  },
  {
    name: "Git",
    description: "Distributed version control",
    icon: <ImGit size={24} />,
    color: "rgba(242, 80, 55, 0.8)",
  },
];

export default technologies;
