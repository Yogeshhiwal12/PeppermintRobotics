import React from "react";
import { motion } from "framer-motion";
import { Button, Container, Typography, Box } from "@mui/material";

function Hero() {
  return (
    <>
      <img
        src="https://getpeppermint.co/wp-content/uploads/2023/07/Peppermint-Homepage-Desktop-Banner-1.png"
        alt="Robotics Image"
        style={{ width: "100%", height: "100%", display: "block" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              backgroundColor: "black",
              width: "150px",
              position: "absolute",
              marginTop: {
                xs: "-660px",
                sm: "0px",
              },
              marginLeft: {
                xs: "-80px",
              },
            }}
          >
            Explore
          </Button>
        </motion.div>
      </Box>
    </>
  );
}

export default Hero;
