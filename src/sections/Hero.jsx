import { Box, Typography, Button, Container, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import { styled } from "@mui/material/styles";

const BlueText = styled("span")(() => ({
  color: "#5b7afc",
  fontWeight: 600,
}));

const ActionButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: 8,
  textTransform: "none",
  padding: "10px 20px",
  fontWeight: 500,
  ...(variant === "contained"
    ? {
        backgroundColor: "#1f1f1f",
        color: theme.palette.common.white,
        "&:hover": {
          backgroundColor: "#333333",
        },
      }
    : {
        borderColor: "#333333",
        color: theme.palette.common.white,
      }),
}));

const handleContact = () => {
  window.location.href = "mailto:noegodin2@gmail.com";
};

const handleDownloadCV = () => {
  const cvPath = "public/hi.txt";

  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "CV_Noe_Godin.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const HeroSection = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 8,
          minHeight: "10vh",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            lineHeight: 1.2,
          }}
        >
          Full-Stack <BlueText>Developer & Software</BlueText> Engineer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "700px",
            mb: 2,
            color: "#aaaaaa",
          }}
        >
          Hi. I'm Noé Godin, I create intuitive and highly functional
          applications.
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mb: 3,
            letterSpacing: 2,
            fontWeight: 500,
            fontSize: "0.75rem",
          }}
        >
          BASED IN FRANCE 🇫🇷
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 6 }}>
          <ActionButton
            variant="contained"
            endIcon={<EmailIcon />}
            onClick={handleContact}
          >
            Contact me
          </ActionButton>

          <ActionButton
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleDownloadCV}
          >
            Download CV
          </ActionButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default HeroSection;
