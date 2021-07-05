import React from "react";

import styles from "./AboutPost.module.css";

const AboutPost = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ color: "white" }}>About Me</h1>
      <p className={styles.textLarge}>
        Hi, I'm Nick Zachary. I'm your go to guy for JavaScript problems that
        need to be solved.
      </p>
      <p className={styles.textBody}>
        I started coding in my teens making games using Corona SDK. Dancing
        between digital marketing and coding, I decide to pursue software
        development as a career. <br />
        <br />I have experience with Graphic design and multiple Adobe products.
        A serious hobby of mine for a while was Blogging and everything involved
        to market it <br />
        <br />
        My heart burns to work in JavaScript. I'm a full stack developer with
        experience in C# and node, but I'm leaning on going towards specializing
        in frontend engineering.
        <br /> <br />I started a YouTube channel going over algorithms and other
        software development tutorials. Thank you for checking my profile out!
      </p>
      <a
        href="https://resume.creddle.io/resume/6qd2rps47cc"
        className={styles.resumeLink}
      >
        Here's a link to my resume
      </a>
    </div>
  );
};

export default AboutPost;
