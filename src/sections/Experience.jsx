import React, { useState } from "react";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import Timeline from "../components/Timeline";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { academicData, professionalData } from "../data/experiences.jsx";
import TabsContainer from "../components/TabsContainer";
import TabButton from "../components/TabButton";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("academic");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
          My experience
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#aaaaaa",
            maxWidth: "700px",
          }}
        >
          Discover my academic and professional background
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            position: { md: "sticky" },
            top: { md: 80 },
            mb: { xs: 6, md: 0 },
          }}
        >
          <TabsContainer
            elevation={0}
            sx={{
              margin: { xs: "0 auto", md: 0 },
              width: { xs: "fit-content", md: "100%" },
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
            >
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

        <Grid item xs={12} md={8}>
          <Box
            sx={{
              maxWidth: { xs: "800px", md: "100%" },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Timeline
              items={activeTab === "academic" ? academicData : professionalData}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experience;
