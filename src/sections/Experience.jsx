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

      <Box
        sx={{
          mb: 4,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <TabsContainer
          elevation={0}
          sx={{
            margin: { xs: "0 auto", md: 0 },
            width: { xs: "fit-content", md: "fit-content" },
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

      <Box
        sx={{
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        <Timeline
          items={activeTab === "academic" ? academicData : professionalData}
        />
      </Box>
    </Container>
  );
};

export default Experience;
