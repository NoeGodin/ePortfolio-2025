import { Box, Typography, Grid, Container } from "@mui/material";

import FigmaIcon from "@mui/icons-material/Brush";
import TypeScriptIcon from "@mui/icons-material/Code";
import { FaReact } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import Technology from "../components/Technology.jsx";
import { ImGit } from "react-icons/im";
import { FaJava } from "react-icons/fa";

const TechnologiesSection = () => {
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

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: "left" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          Current technologies
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#aaaaaa",
            maxWidth: "700px",
          }}
        >
          I'm proficient in a range of modern technologies that empower me to
          build highly functional solutions. These are some of my main
          technologies.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {technologies.map((tech) => (
          <Technology tech={tech} />
        ))}
      </Grid>
    </Container>
  );
};

export default TechnologiesSection;
