import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Stack,
  Button,
  Paper,
  Pagination,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Project from "../components/Project";
import projects from "../data/projects"; // Import projects data

const TabsContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "rgba(32, 32, 32, 0.7)",
  borderRadius: 12,
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(5),
  width: "fit-content",
  margin: "0 auto",
}));

const TabButton = styled(Button)(({ theme, active }) => ({
  borderRadius: 8,
  textTransform: "none",
  padding: "10px 20px",
  fontWeight: 500,
  minWidth: 120,
  transition: "all 0.2s ease",
  ...(active
    ? {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        color: theme.palette.common.white,
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }
    : {
        backgroundColor: "transparent",
        color: "#aaaaaa",
        border: "1px solid rgba(170, 170, 170, 0.2)",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        },
      }),
}));

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [page, setPage] = useState(1);
  const projectsPerPage = 4;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const activeProjects = projects[activeTab] || [];
  const totalPages = Math.ceil(activeProjects.length / projectsPerPage);
  const startIndex = (page - 1) * projectsPerPage;
  const currentProjects = activeProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          My Projects
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#aaaaaa",
            maxWidth: "700px",
            mb: 4,
            mx: "auto",
          }}
        >
          A collection of my work across various domains
        </Typography>

        <TabsContainer elevation={0}>
          <Stack direction="row" spacing={2}>
            <TabButton
              active={activeTab === "personal" ? 1 : 0}
              onClick={() => handleTabChange("personal")}
            >
              Personal
            </TabButton>
            <TabButton
              active={activeTab === "education" ? 1 : 0}
              onClick={() => handleTabChange("education")}
            >
              Education
            </TabButton>
            <TabButton
              active={activeTab === "professional" ? 1 : 0}
              onClick={() => handleTabChange("professional")}
            >
              Professional
            </TabButton>
          </Stack>
        </TabsContainer>
      </Box>

      <Grid container spacing={4}>
        {currentProjects.map((project) => (
          <Project project={project} />
        ))}
      </Grid>

      {/* Pagination - only show if there's more than one page */}
      {totalPages > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "#aaaaaa",
              },
              "& .Mui-selected": {
                backgroundColor: "rgba(91, 122, 252, 0.2) !important",
                color: "#ffffff",
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default Projects;
