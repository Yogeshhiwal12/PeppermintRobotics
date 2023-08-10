import React from "react";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurCustomers() {
  const images = [
    "https://getpeppermint.co/wp-content/uploads/2022/03/ACG-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/carvan-roadways-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/cipla-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/flipkar-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/geod-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/infosys-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/laurus-labs-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/JSS-GLogo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/vitesco-tech-logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/TVS.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/TM.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/Kal.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/Goldman.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/Mapro.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/BOSCH.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/1200px-Bhabha_Atomic_Research_Centre_Logo-2.png",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <Container>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ fontWeight: "bold", marginTop: "50px" }}
      >
        Customers
      </Typography>
      <div style={{ margin: "auto", maxWidth: 1000 }}>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "100%", height: "50" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default OurCustomers;
