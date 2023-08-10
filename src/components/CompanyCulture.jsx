import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";

function CareerForm() {
  return (
    <Container style={{ height: 300 }}>
      <Typography variant="h4" align="center" gutterBottom marginTop="50px">
        We're Hiring!
      </Typography>
      <Typography variant="body1" align="center" gutterBottom marginTop="30px">
        Apply and grow your skill set to bring automation to the hands of
        leading industries. To work with us, fill out this small form and we
        will reach out to you.
      </Typography>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "cyan",
            color: "white",
            padding: "10px 20px",
            fontWeight: "bold",
            marginTop: "30px",
          }}
        >
          Career Form
        </Button>
      </Box>
    </Container>
  );
}

export default CareerForm;
