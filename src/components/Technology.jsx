import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const TechCard = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(32, 32, 32, 0.7)",
  borderRadius: 12,
  padding: theme.spacing(2),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
}));

const IconContainer = styled(Box)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || "rgba(0, 0, 0, 0.2)",
  borderRadius: 8,
  width: 40,
  height: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(1),
  color: theme.palette.common.white,
  margin: 0,
}));

const Technology = ({ tech }) => {
  return (
    <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={tech.name}>
      <TechCard>
        <Grid container spacing={2} alignItems={"center"}>
          <IconContainer bgcolor={tech.color}>{tech.icon}</IconContainer>
          <Box>
            <Typography variant="h6" component="h3" fontWeight={600}>
              {tech.name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              sx={{ color: "#aaaaaa" }}
            >
              {tech.description}
            </Typography>
          </Box>
        </Grid>
      </TechCard>
    </Grid>
  );
};

export default Technology;
