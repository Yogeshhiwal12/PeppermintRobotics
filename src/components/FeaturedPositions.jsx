import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  border: "none",
  boxShadow: "0",
  textAlign: "center",
  "&:hover": {
    transform: "scale(1.02)", // Hover scale effect
    transition: "transform 0.2s ease-in-out", // Transition duration and easing
  },
}));

function FeaturedPositions() {
  const positions = [
    {
      image:
        "https://getpeppermint.co/wp-content/uploads/2022/01/better-cleaning-img-150x150.png",
      title: "Better and Safer Cleaning",
      description:
        "The robot comes with dynamic pressure for different types of floor which cleans with 99.99% harmful bacteria removal and also neutralizes oil on the floor.",
    },
    {
      image:
        "https://getpeppermint.co/wp-content/uploads/2022/01/efficient-150x150.png",
      title: "Efficient and Economical",
      description:
        "Deploying this robot saves up to 66% of the manpower. Our robots consume 50% less electricity and 50% less water compared to traditional machines.",
    },
    {
      image:
        "https://getpeppermint.co/wp-content/uploads/2022/01/Accountable-and-Sustainable-150x150.png",
      title: "Accountable and Sustainable",
      description:
        "Due to real-time reports and analytics, the team can see real-time error codes for immediate service. There is 100% safe disposal of water. There is also a 50% lesser fresh water and electricity consumption",
    },
    {
      image:
        "https://getpeppermint.co/wp-content/uploads/2022/01/upgrade-150x150.png",
      title: "Upgrade and Customer Support",
      description:
        "We are continuously upgrading our robots to ensure our peak performance and we make sure that your robot does not miss out on any of the upgrades. We provide 24 x 7 support with preventive maintenance.",
    },
    // Add more positions here
  ];

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginTop: "50px",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
      >
        Why Peppermint Robotics
      </Typography>
      <Grid container spacing={3}>
        {positions.map((position, index) => (
          <Grid item key={index} xs={12} md={6} lg={3}>
            <div style={{ textAlign: "center" }}>
              <img
                src={position.image}
                alt={position.title}
                style={{
                  width: "50%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {position.title}
                </Typography>
                <Typography>{position.description}</Typography>
              </CardContent>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturedPositions;
