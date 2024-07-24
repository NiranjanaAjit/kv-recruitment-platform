import React from "react";
import Cow from "../../assets/notFoundCow.jpg";
import "./NotFound.scss";
const NotFound = () => {
  return (
    <div className="full-page">
      <h2>OOPS ! <br/>Page not found .</h2>
      <img src={Cow} alt="not found 404 error" />
    </div>
  );
};

export default NotFound;
