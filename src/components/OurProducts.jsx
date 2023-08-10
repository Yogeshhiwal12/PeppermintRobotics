import React from "react";
import { Container, Typography, Button, Card, Grid } from "@mui/material";

function OurProducts() {
  return (
    <Container
      maxWidth="xl" // Set to "xl" for full width
      sx={{
        backgroundColor: (theme) => theme.palette.grey[300],
        padding: 4,
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 4,
        }}
      >
        Our Products
      </Typography>
      <Grid container spacing={3}>
        {/* First Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              textAlign: "center",
              padding: 3,
              borderRadius: 2,
              backgroundColor: (theme) => theme.palette.grey[300],
            }}
          >
            <img
              src="https://getpeppermint.co/wp-content/uploads/2023/07/new-45.webp" // Replace with actual image URL
              alt="Product 1"
              style={{
                width: "100%",
                marginBottom: 2,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              Product 1
            </Typography>
            <Typography>Description of Product 1.</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: (theme) => theme.palette.success.main,
                color: "common.white",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.success.main,
                },
              }}
            >
              Explore
            </Button>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              textAlign: "center",
              padding: 3,
              borderRadius: 2,
              backgroundColor: (theme) => theme.palette.grey[300], // Same background color as the container
            }}
          >
            <img
              src="https://getpeppermint.co/wp-content/uploads/2023/04/Untitled-design-59.png" // Replace with actual image URL
              alt="Product 2"
              style={{
                width: "100%",
                marginBottom: 2,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              Product 2
            </Typography>
            <Typography>Description of Product 2.</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: (theme) => theme.palette.success.main,
                color: "common.white",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.success.main,
                },
              }}
            >
              Explore
            </Button>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              textAlign: "center",
              padding: 3,
              borderRadius: 2,
              backgroundColor: (theme) => theme.palette.grey[300], // Same background color as the container
            }}
          >
            <img
              src="https://getpeppermint.co/wp-content/uploads/2023/07/SD-45-Gen2-With-Mopper-View-1-1024x700-1.webp" // Replace with actual image URL
              alt="Product 3"
              style={{
                width: "100%",
                marginBottom: 2,
              }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              Product 3
            </Typography>
            <Typography>Description of Product 3.</Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: (theme) => theme.palette.success.main,
                color: "common.white",
                marginTop: 2,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.success.main,
                },
              }}
            >
              Explore
            </Button>
          </Card>
        </Grid>

        {/* Add more cards here */}
      </Grid>
    </Container>
  );
}

export default OurProducts;
