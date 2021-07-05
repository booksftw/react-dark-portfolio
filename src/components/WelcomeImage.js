import React from "react";
import classes from "./WelcomeImage.module.css";
import meImage from "../assets/me-blackandwhite.png";
import meSvg from "../assets/me_svg.svg";

import Particles from "react-particles-js";

const WelcomeImage = (props) => {
  return (
    <div>
      <Particles
        height="100vh"
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.5,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "bubble",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <img className={classes.welcomeImage} src={meImage} alt="" />
    </div>
  );
};

export default WelcomeImage;

// https://images.theconversation.com/files/243439/original/file-20181101-83635-1xcrr39.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop
