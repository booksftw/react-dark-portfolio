import React from "react";

import styles from "./AboutPost.module.css";

const AboutPost = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>About POst</h1>
      <p className={styles.textLarge}>
        Hi, I'm Nick Zachary. I'm your go to guy for JavaScript problems that
        need to be solved.
      </p>
      <p className={styles.textBody}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        earum, ipsa ullam voluptatum suscipit inventore nam iste alias omnis
        obcaecati, repellendus eveniet blanditiis aliquid fugiat vitae
        voluptates quidem rerum harum? <br /> <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus,
        quos deleniti amet, unde placeat recusandae harum, quaerat voluptate
        eius nesciunt ratione dolorem corporis eveniet eaque quisquam hic porro
        optio. Incidunt. voluptates quidem rerum harum? <br /> <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus,
        quos deleniti amet, unde placeat recusandae harum, quaerat voluptate
        eius nesciunt ratione dolorem corporis eveniet eaque quisquam hic porro
        optio. Incidunt.
      </p>
      <a href="#" className={styles.resumeLink}>
        Here's a link to my resume
      </a>
    </div>
  );
};

export default AboutPost;
