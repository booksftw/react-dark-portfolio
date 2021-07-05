import React from "react";
import styles from "./WorkList.module.css";
import rousseauImage from "../assets/rousseau_welcome_page.png";

const WorkList = () => {
  return (
    <ul>
      <li>
        <a href="https://www.rousseauchain.com">RousseauChain</a>
        <p>
          Wholesale App for retail stores to order with visual catalog.
          <br />
          <br />A visual catalog integration and a quick order form with heavy
          php and javascript involved. For retail customers only, if you would
          like a tour of this app please contact me
        </p>
        <img src={rousseauImage} alt="Image of Rousseau Application" />
        <p>
          #Wordpress, #Php, #HTML , #CSS, #Javascript, #API, #3rd party
          integration, #Mysql
        </p>
      </li>

      <li>
        <a href="https://github.com/booksftw/Reddit-Theatre">Reddit Theatre</a>
        <p>
          View reddit in a whole new way
          <br />
          <br />
          Calls reddit's api to get the images and displays it in a fashionable
          new way. You can use keyboard to scroll through the images or mouse.
        </p>

        <p>#React #Javascript #HTML #CSS #Firebase #Express #Node</p>
      </li>

      <li>
        <a href="https://github.com/booksftw/creative-realtime-board">
          Creative Realtime Board
        </a>
        <p>
          Join lobbys with your friends in an interactive whiteboard app. This
          is my final project for lighthouse labs.
          <br />
          <br />
        </p>
        <p>#Angular #Typescript #Javascript #HTML #CSS #Firebase</p>
      </li>
    </ul>
  );
};

export default WorkList;
