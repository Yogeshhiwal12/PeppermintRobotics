import React from "react";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SupportedBy() {
  const images = [
    "https://getpeppermint.co/wp-content/uploads/2022/02/Peppermint-VC-Logo.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/spt-img1.png",
    "https://getpeppermint.co/wp-content/uploads/2022/02/IAN_Peppermint-removebg-preview.png",
    "https://getpeppermint.co/wp-content/uploads/2022/03/spt-img1.png",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
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
        Supported by
      </Typography>
      <div style={{ margin: "auto", maxWidth: 1000 }}>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ width: "60%", height: "50" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}

export default SupportedBy;
