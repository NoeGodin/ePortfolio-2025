import FigmaIcon from "@mui/icons-material/Brush";
import TypeScriptIcon from "@mui/icons-material/Code";
import { FaJava, FaReact } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { ImGit } from "react-icons/im";

const technologies = [
  {
    name: "Figma",
    description: "Design Tool",
    icon: <FigmaIcon />,
    color: "rgba(31, 117, 87, 0.2)",
  },
  {
    name: "TypeScript",
    description: "JavaScript but better",
    icon: <TypeScriptIcon />,
    color: "rgba(49, 120, 198, 0.2)",
  },
  {
    name: "React",
    description: "JavaScript Library",
    icon: <FaReact size={24} />,
    color: "rgba(97, 218, 251, 0.8)",
  },
  {
    name: "Azure",
    description: "Cloud service provider",
    icon: <VscAzure size={24} />,
    color: "rgba(8, 100, 180, 0.8)",
  },
  {
    name: "Java",
    description: "Programming language",
    icon: <FaJava size={24} />,
    color: "rgba(234, 45, 46, 0.8)",
  },
  {
    name: "Git",
    description: "Version control",
    icon: <ImGit size={24} />,
    color: "rgba(242, 80, 55, 0.8)",
  },
];

export default technologies;
