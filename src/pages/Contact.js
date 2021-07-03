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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo numquam
          blanditiis, quia quasi atque cupiditate dolores accusantium! Adipisci
          enim, recusandae exercitationem tempore laudantium quae maiores nobis
          aut molestiae optio quam. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo numquam
          blanditiis, quia quasi atque cupiditate dolores accusantium! Adipisci
          enim, recusandae exercitationem tempore laudantium quae maiores nobis
          aut molestiae optio quam. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo numquam
          blanditiis, quia quasi atque cupiditate dolores accusantium! Adipisci
          enim, recusandae exercitationem tempore laudantium quae maiores nobis
          aut molestiae optio quam. <br />
          <br />
          Feel free to contact me through any platform below:
          <br />
          <br />
          <span>nick@email.com</span>
          <span>nick@email.com</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
