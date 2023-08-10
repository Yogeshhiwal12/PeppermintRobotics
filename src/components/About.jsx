import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function About() {
  const [text, setText] = useState("");
  const [forward, setForward] = useState(true);

  const textOptions = ["About Peppermint Robotics", "Automation and Robotics"]; // Add more text options as needed

  useEffect(() => {
    let currentIndex = 0;
    let interval;

    const animateText = () => {
      const currentText = textOptions[currentIndex];
      setText(currentText.substring(0, text.length + (forward ? 1 : -1)));

      if (
        (forward && text.length === currentText.length) ||
        (!forward && text.length === 0)
      ) {
        clearInterval(interval);
        setTimeout(() => setForward(!forward), 1000); // Reverse direction after 1 second
      }
    };

    interval = setInterval(animateText, 100); // Adjust speed as needed

    return () => {
      clearInterval(interval);
    };
  }, [text, forward]);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        py: 6,
      }}
    >
      {/* Top Part */}
      <Typography
        gutterBottom
        height="100px"
        sx={{
          fontFamily: "F37 Ginger Pro Extra",
          fontWeight: "bold",
          fontSize: {
            sm: "2.5rem",
            xs: "1.9rem",
          },
          textAlign: "center",
        }}
      >
        {text}
      </Typography>

      {/* Middle Part */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          px: 4,
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: { xs: "100%", md: "50%" },
            mb: { xs: 4, md: 0 },
          }}
        >
          <img
            src="https://getpeppermint.co/wp-content/uploads/2023/07/SD45-Gen2-Render-Front-Perspective-LH-1536x1051.webp"
            alt="About Peppermint Robotics"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
        <Box
          sx={{ flex: 1, maxWidth: { xs: "100%", md: "50%" }, pl: { md: 4 } }}
        >
          <Typography variant="body1" paragraph>
            Peppermint Service Robots are uniquely positioned to be the first
            full-stack Service Robotics Company in the world. Supported by SINE
            IIT-Bombay & Qualcomm, we manufacture Housekeeping Robots and
            Material Handling Robots tuned into your specific industry needs.
            Our full-stack platform, along with Mint OS, and modular assembly
            delivers the most efficient autonomous solutions for our clients.
          </Typography>
          <Link to="scroll-to-button" smooth={true} duration={500} offset={-50}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button
                variant="contained"
                size="large"
                style={{ backgroundColor: "cyan" }}
              >
                Yes, I want peppermint
              </Button>
            </motion.div>
          </Link>
        </Box>
      </Box>

      {/* Bottom Part */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        {/* Your bottom content here */}
      </Box>
    </Container>
  );
}

export default About;
