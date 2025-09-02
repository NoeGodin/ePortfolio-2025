import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  IconButton,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LaunchIcon from "@mui/icons-material/Launch";
import Button from "@mui/material/Button";
import { FaGithub } from "react-icons/fa";

const ProjectCard = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(32, 32, 32, 0.7)",
  borderRadius: 12,
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
}));

const ProjectImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 200,
  borderRadius: 8,
  marginBottom: theme.spacing(2),
  overflow: "hidden",
  position: "relative",
  backgroundColor: "rgba(0, 0, 0, 0.2)", // Fallback color
}));

const IconContainer = styled(Box)(() => ({
  position: "absolute",
  top: 10,
  left: 10,
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: 8,
  color: "#ffffff",
}));

const DateChip = styled(Chip)(() => ({
  backgroundColor: "rgba(91, 122, 252, 0.1)",
  color: "#5b7afc",
  borderRadius: 4,
  fontSize: "0.75rem",
  fontWeight: 500,
  height: 24,
}));

const Project = ({ project }) => {
  if (!project) return null;

  return (
    <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} key={project.name}>
      <ProjectCard elevation={0}>
        <ProjectImage
          sx={{
            backgroundImage: project.image ? `url(${project.image})` : "none",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          {project.icon && <IconContainer>{project.icon}</IconContainer>}
        </ProjectImage>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 1,
          }}
        >
          <Typography variant="h5" component="h3" fontWeight={600}>
            {project.title}
          </Typography>

          {project.date && <DateChip label={project.date} size="small" />}
        </Box>

        <Typography
          variant="body2"
          sx={{ color: "#aaaaaa", mb: 2, flexGrow: 1 }}
        >
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            {project.technologies &&
              project.technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    backgroundColor: "rgba(91, 122, 252, 0.1)",
                    color: "#aaaaaa",
                    borderRadius: 1,
                  }}
                />
              ))}
          </Stack>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {project.link && (
              <Button
                variant="outlined"
                size="small"
                endIcon={<LaunchIcon fontSize="small" />}
                onClick={() => window.open(project.link, "_blank")}
                sx={{
                  borderColor: "rgba(91, 122, 252, 0.5)",
                  color: "#5b7afc",
                  borderRadius: 1,
                  textTransform: "none",
                  px: 2,
                  "&:hover": {
                    borderColor: "#5b7afc",
                    backgroundColor: "rgba(91, 122, 252, 0.1)",
                  },
                }}
              >
                See More
              </Button>
            )}

            {project.github && (
              <IconButton
                size="small"
                sx={{
                  color: "#aaaaaa",
                  "&:hover": { color: "#ffffff" },
                  ml: 1,
                }}
                onClick={() => window.open(project.github, "_blank")}
              >
                <FaGithub />
              </IconButton>
            )}
          </Box>
        </Box>
      </ProjectCard>
    </Grid>
  );
};

export default Project;
