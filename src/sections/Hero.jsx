import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
  Avatar,
} from "@mui/material";
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

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  border: "4px solid rgba(91, 122, 252, 0.3)",
  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  marginBottom: theme.spacing(4),
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.3)",
  },
}));

const handleContact = () => {
  window.location.href = "mailto:noegodin2@gmail.com";
};

const handleDownloadCV = () => {
  const cvPath = "CV-NoeGodin.pdf";

  const link = document.createElement("a");
  link.href = cvPath;
  link.download = "CV_Noe_Godin.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
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

        <StyledAvatar alt="Noé Godin" src="profile-photo.jpg" />

        <Typography
          variant="body1"
          sx={{
            maxWidth: "700px",
            mb: 2,
            color: "#aaaaaa",
          }}
        >
          Hi. I'm Noé Godin
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

export default Hero;
