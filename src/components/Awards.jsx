import React from "react";
import { Container, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Awards() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3, // Number of images to show at once
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
        Awards and Recognitions
      </Typography>
      <div style={{ margin: "auto", maxWidth: 1000 }}>
        <Slider {...sliderSettings}>
          <div>
            <img
              src="https://getpeppermint.co/wp-content/uploads/2022/02/quallcomm-design-in-india.png"
              alt="Award 1"
              style={{ width: "60%" }}
            />
          </div>
          <div>
            <img
              src="https://getpeppermint.co/wp-content/uploads/2022/03/Logo6-3.png"
              alt="Award 2"
              style={{ width: "90%" }}
            />
          </div>
          <div>
            <img
              src="https://getpeppermint.co/wp-content/uploads/2022/03/Logo5-3.png"
              alt="Award 3"
              style={{ width: "90%" }}
            />
          </div>
          <div>
            <img
              src="https://getpeppermint.co/wp-content/uploads/2022/03/awrds1.png"
              alt="Award 3"
              style={{ width: "60%" }}
            />
          </div>

          {/* Add more divs with images as needed */}
        </Slider>
      </div>
    </Container>
  );
}

export default Awards;
