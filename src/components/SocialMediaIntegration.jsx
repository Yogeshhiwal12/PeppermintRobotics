import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
function Footer() {
  const socialMediaIcons = [
    { icon: <AiOutlineTwitter />, link: "https://twitter.com/pepperobotics" },
    {
      icon: <AiFillLinkedin />,
      link: "https://www.linkedin.com/company/getpeppermint/",
    },
    {
      icon: <AiFillYoutube />,
      link: "https://www.youtube.com/user/pepperobotics",
    },
    { icon: <AiOutlineMail />, link: "mailto:contact@pepperobotics.com" },
  ];
  return (
    <Box sx={{ backgroundColor: "black", padding: 4, color: "white" }}>
      <Container>
        <footer>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                sm: "row",
                xs: "column",
              },
            }}
            justifyContent="space-between"
          >
            {/* Left Part: Contact Information */}

            <Box sx={{ flex: 1 }}>
              <img
                src="https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png"
                alt="Peppermint Robotics Logo"
                style={{ width: 300, height: 100, marginTop: "50px" }}
              />
              <Typography variant="body1" gutterBottom marginTop="100px">
                Aubotz Labs Pvt Ltd
              </Typography>
              <Typography variant="body2" gutterBottom>
                CIN: U29100MH2019PTC324975
              </Typography>
              <Typography variant="body2" gutterBottom>
                Survey No 116, 3/1, opp. ShubhTej Mangal Karyalay, near Balaji
                Chowk, Jai Bhavani Nagar, Pashan, Pune, Maharashtra 411021
              </Typography>
              <Typography variant="body2" gutterBottom>
                info@getpeppermint.co
              </Typography>
              <Typography variant="body2" gutterBottom>
                +91 89567 10044
              </Typography>
            </Box>

            {/* Middle Part: Empty Spacer */}
            <Box sx={{ flex: 1 }}>
              <List>
                <ListItem>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="FAQs" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Case Studies" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Products" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Blog" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Careers" />
                </ListItem>
              </List>
            </Box>

            {/* Right Part: Quick Links */}
            <Box sx={{ flex: 1 }}>
              <List>
                <ListItem>
                  <ListItemText primary="Recent Posts" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Elevating Efficiency: Evolution of Material Handling with AMRs" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Autonomous Mobile Robots: The Future of Efficient Material Handling" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Robotic Floor Scrubbers – The Future of Autonomous Cleaning at Airports" />
                </ListItem>
              </List>
            </Box>
          </Box>
        </footer>
        <hr />
        <Box
          display="flex
        "
          justifyContent="space-between"
        >
          <Typography>getpeppermint © 2023. All rights reserved.</Typography>
          <Box>
            {socialMediaIcons.map((item, index) => (
              <IconButton
                key={index}
                href={item.link}
                target="_blank"
                sx={{
                  color: "white",
                  justifyContent: "flex-end",
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
