import React from "react";
import {Link} from "react-router-dom";

function Marquee(props) {
  const message = props.text;
  return (
    <marquee>{message}</marquee>
  );
}

export default Marquee;
