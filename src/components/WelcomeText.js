import React, { useEffect, useState } from "react";
import classes from "./WelcomeText.module.css";

const WelcomeText = (props) => {
  const defaultWelcomeTextOneText = "Hello.";
  const altWelcomeTextOne = "About";

  const defaultWelcomeTextTwoText = "I am";
  const altWelcomeTextTwo = "Work";

  const defaultWelcomeTextThreeText = "Nick";
  const altWelcomeTextThree = "Contact";

  const [welcomeTextOne, setWelcomeTextOne] = useState(
    defaultWelcomeTextOneText
  );

  const [welcomeTextTwo, setWelcomeTextTwo] = useState(
    defaultWelcomeTextTwoText
  );

  const [welcomeTextThree, setWelcomeTextThree] = useState(
    defaultWelcomeTextThreeText
  );

  const [isShowingWelcome, setIsShowingWelcome] = useState(true);

  const welcomeOneMouseOverHandler = () => {
    setWelcomeTextOne(altWelcomeTextOne);
  };

  const welcomeOneMouseLeaveHandler = () => {
    setWelcomeTextOne(defaultWelcomeTextOneText);
  };

  const welcomeTwoMouseOverHandler = () => {
    setWelcomeTextTwo(altWelcomeTextTwo);
  };

  const welcomeTwoMouseLeaveHandler = () => {
    setWelcomeTextTwo(defaultWelcomeTextTwoText);
  };

  const welcomeThreeMouseOverHandler = () => {
    setWelcomeTextThree(altWelcomeTextThree);
  };

  const welcomeThreeMouseLeaveHandler = () => {
    setWelcomeTextThree(defaultWelcomeTextThreeText);
  };

  const handleWindowClickHandler = () => {
    setIsShowingWelcome((isShowingWelcome) => {
      // This comment is a bug fix to make this work for some reason;
      return !isShowingWelcome;
    });
  };

  useEffect(() => {
    console.log("effect");
    window.addEventListener("click", handleWindowClickHandler);
  }, []);

  return (
    <div>
      <h1 className={classes.welcomeText}>
        <span
          className={classes.welcomeTextOne}
          onMouseOver={welcomeOneMouseOverHandler}
          onMouseLeave={welcomeOneMouseLeaveHandler}
        >
          {isShowingWelcome ? welcomeTextOne : altWelcomeTextOne}
        </span>
        <span
          onMouseOver={welcomeTwoMouseOverHandler}
          onMouseLeave={welcomeTwoMouseLeaveHandler}
          className={classes.welcomeTextTwo}
        >
          {isShowingWelcome ? welcomeTextTwo : altWelcomeTextTwo}
        </span>
        <span
          onMouseOver={welcomeThreeMouseOverHandler}
          onMouseLeave={welcomeThreeMouseLeaveHandler}
          className={classes.welcomeTextThree}
        >
          {isShowingWelcome ? welcomeTextThree : altWelcomeTextThree}
        </span>
      </h1>
    </div>
  );
};

export default WelcomeText;
