import * as React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import darkTheme from "./theme-config";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Technologies from "./sections/Technologies";
import Footer from "./sections/Footer.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
          paddingTop: "20px",
        }}
      >
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Footer />
        </section>
      </Box>
    </ThemeProvider>
  );
}

export default App;
