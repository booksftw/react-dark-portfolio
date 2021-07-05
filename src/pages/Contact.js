import React from "react";

import LogoReturnHome from "../components/LogoReturnHome";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.header_row}>
      <LogoReturnHome />
      <header>
        <h1 className={styles.header}>Let's make something great together!</h1>;
      </header>
      <div className={styles.contact_container}>
        <h3>Contact</h3>
        <p>
          I'm seeking out opportunities to learn and grow, and help you make an
          impact! I want to bring my design experience to the table and help you
          build beautiful user interfaces in React or Angular. <br />
          <br />
          I look forward to hearing from you and helping you acheive your dreams
          by building building well engineered beautiful apps that changes the
          world.
          <br />
          <br />
          Feel free to contact me through any platform below:
          <br />
          <br />
          <span>nicholas.zachary@outlook.com</span>
          <span>
            <a href="https://www.youtube.com/channel/UCtzQTLivB84hXDR22gQWQJA">
              YouTube
            </a>
          </span>
          <span>
            <a href="https://resume.creddle.io/resume/6qd2rps47cc">Resume</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
