import React from "react";
import classes from "./WelcomeImage.module.css";
import meImage from "../assets/me-blackandwhite.png";

const WelcomeImage = (props) => {
  return (
    <div>
      <img className={classes.welcomeImage} src={meImage} alt="" />
    </div>
  );
};

export default WelcomeImage;
