import React from "react";
import { Link } from "react-router-dom";

import classes from "./WelcomeText.module.css";

class WelcomeText extends React.Component {
  defaultWelcomeTextOneText = "Hello.";
  altWelcomeTextOne = "About";

  defaultWelcomeTextTwoText = "I am";
  altWelcomeTextTwo = "Work";

  defaultWelcomeTextThreeText = "Nick";
  altWelcomeTextThree = "Contact";

  constructor(props) {
    super(props);
    this.state = {
      welcomeTextOne: this.defaultWelcomeTextOneText,
      welcomeTextTwo: this.defaultWelcomeTextTwoText,
      welcomeTextThree: this.defaultWelcomeTextThreeText,
      isShowingWelcome: true,
    };
  }

  welcomeOneMouseOverHandler = () => {
    this.setState({ welcomeTextOne: this.altWelcomeTextOne });
  };

  welcomeOneMouseLeaveHandler = () => {
    this.setState({ welcomeTextOne: this.defaultWelcomeTextOneText });
  };

  welcomeTwoMouseOverHandler = () => {
    this.setState({ welcomeTextTwo: this.altWelcomeTextTwo });
  };

  welcomeTwoMouseLeaveHandler = () => {
    this.setState({ welcomeTextTwo: this.defaultWelcomeTextTwoText });
  };

  welcomeThreeMouseOverHandler = () => {
    this.setState({ welcomeTextThree: this.altWelcomeTextThree });
  };

  welcomeThreeMouseLeaveHandler = () => {
    this.setState({ welcomeTextThree: this.defaultWelcomeTextThreeText });
  };

  handleWindowClickHandler = () => {
    // This line of code is responsible for switching it two alt descriptions on return from route
    this.setState({ isShowingWelcome: !this.state.isShowingWelcome });
  };

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClickHandler);
    console.log("component did mount");
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClickHandler);
    this.setState({ welcomeTextOne: "yo" });
  }

  render() {
    return (
      <div>
        <h1 className={classes.welcomeText}>
          <Link className={classes.welcomeTextOne} to="/about">
            <span
              onMouseOver={this.welcomeOneMouseOverHandler}
              onMouseLeave={this.welcomeOneMouseLeaveHandler}
            >
              {this.state.isShowingWelcome
                ? this.state.welcomeTextOne
                : this.altWelcomeTextOne}
            </span>
          </Link>

          <Link className={classes.welcomeTextTwo} to="/work">
            <span
              onMouseOver={this.welcomeTwoMouseOverHandler}
              onMouseLeave={this.welcomeTwoMouseLeaveHandler}
            >
              {this.state.isShowingWelcome
                ? this.state.welcomeTextTwo
                : this.altWelcomeTextTwo}
            </span>
          </Link>

          <Link className={classes.welcomeTextThree} to="/contact">
            <span
              onMouseOver={this.welcomeThreeMouseOverHandler}
              onMouseLeave={this.welcomeThreeMouseLeaveHandler}
            >
              {this.state.isShowingWelcome
                ? this.state.welcomeTextThree
                : this.altWelcomeTextThree}
            </span>
          </Link>
        </h1>
      </div>
    );
  }
}

export default WelcomeText;
