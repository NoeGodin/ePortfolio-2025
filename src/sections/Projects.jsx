import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Stack,
  Pagination,
  useMediaQuery,
} from "@mui/material";
import Project from "../components/Project";
import projects from "../data/projects";
import TabsContainer from "../components/TabsContainer";
import TabButton from "../components/TabButton";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [page, setPage] = useState(1);
  const projectsPerPage = 4;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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

        <TabsContainer
          elevation={0}
          sx={{
            margin: { xs: "0 auto", md: 0 },
            width: { xs: "fit-content" },
          }}
        >
          <Stack
            direction="row"
            spacing={isMobile ? 1 : 2}
            sx={{
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TabButton
              active={activeTab === "personal" ? 1 : 0}
              onClick={() => handleTabChange("personal")}
              startIcon={<PersonIcon />}
            >
              Personal
            </TabButton>
            <TabButton
              active={activeTab === "academic" ? 1 : 0}
              onClick={() => handleTabChange("academic")}
              startIcon={<SchoolIcon />}
            >
              Academic
            </TabButton>
            <TabButton
              active={activeTab === "professional" ? 1 : 0}
              onClick={() => handleTabChange("professional")}
              startIcon={<WorkIcon />}
            >
              Professional
            </TabButton>
          </Stack>
        </TabsContainer>
      </Box>

      <Grid container spacing={4}>
        {currentProjects.map((project) => (
          <Project project={project} key={project.title} />
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
            size={isMobile ? "small" : "medium"}
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
