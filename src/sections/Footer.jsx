import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { PiGitlabLogoLight } from "react-icons/pi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home" },
    { name: "Technologies" },
    { name: "Projects" },
    { name: "Contact" },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#111111",
        opacity: 0.6,
        color: "#ffffff",
        py: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 500, mb: 1 }}
          >
            Thank you for visiting!
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#aaaaaa",
              maxWidth: "600px",
              mx: "auto",
              fontSize: "0.85rem",
            }}
          >
            You can find all my different media here.
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          sx={{ mb: 3 }}
        >
          <IconButton
            size="small"
            sx={{
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() =>
              (window.location.href = "https://gitlab.com/NoeGodin")
            }
          >
            <PiGitlabLogoLight size={24} />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() =>
              (window.location.href = "www.linkedin.com/in/noégodin")
            }
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            sx={{
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
            onClick={() =>
              (window.location.href = "mailto:noegodin2@gmail.com")
            }
          >
            <EmailIcon fontSize="small" />
          </IconButton>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            pt: 2,
            fontSize: "0.8rem",
          }}
        >
          <Typography variant="body2" sx={{ color: "#aaaaaa" }}>
            Copyright {currentYear} |{" "}
            <Link href="/" color="inherit" underline="hover">
              Noé Godin
            </Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            {links.map((link) => (
              <Link
                key={link.name}
                href={`#${link.name.toLowerCase()}`}
                color="inherit"
                underline="hover"
                sx={{ fontSize: "0.8rem" }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
