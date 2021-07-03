import React from "react";
import LogoReturnHome from "../components/LogoReturnHome";

import ProfileImage from "../components/ProfileImage";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <div>
      <div className={classes.header_row}>
        <LogoReturnHome />
        <header>
          <h1 className={classes.header}>I design & build digital produts</h1>
        </header>
      </div>
      <div class={classes.profile_image_container}>
        <ProfileImage />
      </div>
    </div>
  );
};

export default About;
