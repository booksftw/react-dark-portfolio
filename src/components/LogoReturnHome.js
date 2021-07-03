import React from "react";
import { Link } from "react-router-dom";

import classes from "./LogoReturnHome.module.css";

const LogoReturnHome = () => {
  return (
    <Link to="/">
      <h1 id={classes.logo} style={{ color: "white" }}>
        Nick.
      </h1>
    </Link>
  );
};

export default LogoReturnHome;
