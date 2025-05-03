import React from "react";
import { Box, Typography, Card, CardContent, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

const TimelinePoint = styled(Box)(() => ({
  width: 16,
  height: 16,
  borderRadius: "50%",
  backgroundColor: "#5b7afc",
  border: "3px solid rgba(91, 122, 252, 0.3)",
  boxShadow: "0 0 0 3px rgba(91, 122, 252, 0.1)",
  position: "absolute",
  left: 1,
  top: "10%",
  transform: "translateX(-50%)",
  zIndex: 2,
}));

const TimelineLine = styled(Box)(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  bottom: 0,
  width: 2,
  backgroundColor: "rgba(91, 122, 252, 0.3)",
  zIndex: 1,
}));

const TimelineItem = styled(Box)(() => ({
  position: "relative",
  paddingLeft: 40,
  paddingBottom: 40,
  "&:last-child": {
    paddingBottom: 0,
  },
}));

const TimelineCard = styled(Card)(() => ({
  backgroundColor: "rgba(32, 32, 32, 0.7)",
  borderRadius: 12,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
}));

const Timeline = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Box sx={{ position: "relative" }}>
      <TimelineLine />

      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelinePoint />

          <TimelineCard elevation={0}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: 600 }}
                >
                  {item.title}
                </Typography>
                <Chip
                  label={item.date}
                  size="small"
                  sx={{
                    bgcolor: "rgba(91, 122, 252, 0.1)",
                    color: "#aaaaaa",
                    fontWeight: 500,
                  }}
                />
              </Box>

              <Typography variant="subtitle1" sx={{ mb: 1, color: "#5b7afc" }}>
                {item.organization}
              </Typography>

              <Typography variant="body2" sx={{ color: "#aaaaaa", mb: 2 }}>
                {item.description}
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {item.skills &&
                  item.skills.map((skill, idx) => (
                    <Chip
                      key={idx}
                      label={skill}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(91, 122, 252, 0.1)",
                        color: "#aaaaaa",
                        borderRadius: 1,
                      }}
                    />
                  ))}
              </Box>
            </CardContent>
          </TimelineCard>
        </TimelineItem>
      ))}
    </Box>
  );
};

export default Timeline;
