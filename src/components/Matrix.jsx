import React from "react";
import {
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";

function HowToApply() {
  return (
    <Box sx={{ backgroundColor: "black", padding: 3 }}>
      <Container>
        <Typography align="center" color="cyan">
          Matrix
        </Typography>
        <Typography variant="h4" align="center" color="white" gutterBottom>
          The Numbers Represent TRUST
        </Typography>
        <Box display="flex" marginTop={4} justifyContent="center">
          <Card
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "black",
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" color="white" b>
                38
              </Typography>
              <Typography variant="body1" align="center" color="white">
                Number of Clients
              </Typography>
            </CardContent>
          </Card>
          <Card
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "black",
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" color="white">
                13
              </Typography>
              <Typography variant="body1" align="center" color="white">
                Number of Cities
              </Typography>
            </CardContent>
          </Card>
          <Card
            style={{
              width: "300px",
              height: "200px",
              backgroundColor: "black",
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" color="white">
                4
              </Typography>
              <Typography variant="body1" align="center" color="white">
                Number of Countries
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

export default HowToApply;
