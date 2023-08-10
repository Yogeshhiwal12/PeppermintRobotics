import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { yellow } from "@mui/material/colors";

function EmployeeTestimonials() {
  return (
    <Container
      maxWidth="xl"
      style={{ marginTop: "100px", backgroundColor: "black" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            sm: "row",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            marginLeft: 2,
            position: { sm: "absolute", xs: "static" },
            marginLeft: {
              sm: 100,
              xs: 0,
            },
            width: {
              sm: 400,
              xs: "auto",
            },
            marginTop: "-50px",
          }}
        >
          <Card
            style={{
              height: 500,
              borderRadius: "20px",
              borderBottomRightRadius: "2px",
              borderBottomLeftRadius: "2px",
              backgroundColor: "yellow",
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                gutterBottom
                style={{ marginTop: "80px" }}
              >
                Testimonials
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                fugit. Autem accusantium fugit optio suscipit itaque at adipisci
                cumque obcaecati non. Sint, quam! Nobis, repellat.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        {/* Left Part: Employee Testimonials */}
        <Box
          sx={{
            flex: 0.5,
            marginRight: 0,
            display: "flex",
            flexDirection: {
              sm: "row",
              xs: "column",
            },
            gap: 2,
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <StarIcon style={{ color: "yellow" }} />{" "}
                <StarIcon style={{ color: "yellow" }} />{" "}
                <StarIcon style={{ color: "yellow" }} /> {/* Display 4 stars */}
              </Typography>
              <Typography variant="body1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
              <Box display="flex" alignItems="center" marginTop={2}>
                <Avatar
                  sx={{ marginRight: 2 }}
                  src="image-url"
                  alt="Employee"
                />
                <Typography variant="subtitle1">Jane Smith</Typography>
              </Box>
            </CardContent>
          </Card>
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                <StarIcon style={{ color: "yellow" }} />{" "}
                <StarIcon style={{ color: "yellow" }} />{" "}
                <StarIcon style={{ color: "yellow" }} />{" "}
                <StarIcon style={{ color: "yellow" }} /> {/* Display 4 stars */}
              </Typography>
              <Typography variant="body1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </Typography>
              <Box display="flex" alignItems="center" marginTop={2}>
                <Avatar
                  sx={{ marginRight: 2 }}
                  src="image-url"
                  alt="Employee"
                />
                <Typography variant="subtitle1">Jane Smith</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Right Part: Testimonial Heading */}
      </Box>
    </Container>
  );
}

export default EmployeeTestimonials;
