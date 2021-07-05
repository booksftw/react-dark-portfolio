import React from "react";
import LogoReturnHome from "../components/LogoReturnHome";

import ProfileImage from "../components/ProfileImage";
import AboutPost from "../components/AboutPost";
import styles from "./About.module.css";

const About = (props) => {
  return (
    <div>
      <div className={styles.header_row}>
        <LogoReturnHome />
        <header>
          <h1 className={styles.header}>I design & build digital produts</h1>
        </header>
      </div>
      <div className={styles.profile_image_container}>
        <ProfileImage />
      </div>

      <div id={styles.about_container}>
        <AboutPost />
      </div>
    </div>
  );
};

export default About;
