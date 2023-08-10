import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";

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

const navigationMenus = [
  { label: "Home", link: "#" },
  { label: "About Us", link: "#" },
  { label: "Solutions", link: "#" },
  { label: "Products", link: "#" },
  { label: "Resources", link: "#" },
  { label: "Contact Us", link: "#" },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar
      position={isSticky ? "fixed" : "absolute"}
      color="transparent"
      elevation={0}
      sx={{
        transition: "position 0.3s",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            sm: "flex",
          },
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://getpeppermint.co/wp-content/uploads/2017/05/Untitled-design-86-1.png"
            alt="Peppermint Robotics Logo"
            style={{ width: 150 }}
          />
        </motion.div>
        <Typography
          variant="h6"
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {navigationMenus.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + 0.2 * index }}
            >
              <Link
                href={menu.link}
                color="textPrimary"
                underline="none"
                sx={{
                  cursor: "pointer",
                  mx: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.1rem",
                  fontSize: "0.8rem",
                  color: "white",
                  display: {
                    xs: "none",
                    sm: "flex",
                  },
                }}
              >
                {menu.label}
              </Link>
            </motion.div>
          ))}
        </Typography>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: {
                xs: "flex",
                sm: "none",
              },
            }}
          >
            <FaBars />
          </IconButton>
          {socialMediaIcons.map((item, index) => (
            <IconButton
              key={index}
              href={item.link}
              target="_blank"
              sx={{
                color: "white",
              }}
            >
              {item.icon}
            </IconButton>
          ))}
        </motion.div>
      </Toolbar>

      {/* Responsive Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          {navigationMenus.map((menu, index) => (
            <ListItem
              key={index}
              button
              component="a"
              href={menu.link}
              onClick={handleDrawerToggle}
            >
              <ListItemText
                primary={menu.label}
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.1rem",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
