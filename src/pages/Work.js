import React from "react";
import LogoReturnHome from "../components/LogoReturnHome";
import styles from "./Work.module.css";
import WorkList from "../components/WorkList";

const Work = () => {
  return (
    <div>
      <div className={styles.header_row}>
        <LogoReturnHome />
        <header>
          {/* <h4 className={styles.header}>A few past Projects</h4> */}
        </header>
      </div>
      <div className={styles.work_list}>
        <WorkList />
      </div>
    </div>
  );
};

export default Work;
