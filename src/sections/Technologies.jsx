import { Box, Typography, Grid, Container } from "@mui/material";
import technologies from "../data/technologies.jsx";
import Technology from "../components/Technology.jsx";

const Technologies = () => {
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
          These are some of my main technologies.
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

export default Technologies;
