import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function Footer() {
  return (
    <Box
      sx={{ backgroundColor: "rgba(0, 0, 0, 0.8)", padding: 4, color: "white" }}
    >
      <Container>
        <Typography variant="h4" gutterBottom align="center" fontWeight="bold">
          Contact Us
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: {
              sm: "row",
              xs: "column",
            },
          }}
          marginTop={4}
        >
          {/* Left Part: Contact Form */}
          <Box sx={{ flex: 1, marginRight: 4 }}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <form>
              <TextField
                fullWidth
                variant="outlined"
                label="Your Name"
                margin="normal"
                InputProps={{
                  style: { backgroundColor: "white", borderRadius: "4px" },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Your E-mail"
                margin="normal"
                InputProps={{
                  style: { backgroundColor: "white", borderRadius: "4px" },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone no"
                margin="normal"
                InputProps={{
                  style: { backgroundColor: "white", borderRadius: "4px" },
                }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Your message"
                margin="normal"
                multiline
                rows={4}
                InputProps={{
                  style: { backgroundColor: "white", borderRadius: "4px" },
                }}
              />
              <Button variant="contained" style={{ backgroundColor: "cyan" }}>
                Send Message
              </Button>
            </form>
          </Box>

          {/* Right Part: Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography variant="body1">Aubotz Labs Pvt Ltd</Typography>
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              Address
            </Typography>
            <Typography variant="body1">
              Headquarters & Engineering Centre:-
              <br />
              Survey No 116/3/1, Pashan Village Opp. ShubhTej Mangal Karyalay,
              <br />
              Near Balaji Chowk, Pashan, PUNE 411021 (INDIA)
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              Business Enquiries
            </Typography>
            <Typography variant="body1">
              For Business Enquiries – info@getpeppermint.co
              <br />
              For Career at Peppermint – hr@getpeppermint.co
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
              Phone Number
            </Typography>
            <Typography variant="body1">
              <PhoneIcon /> +91 89567 10044
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
