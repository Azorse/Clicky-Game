import React from "react";
import "./Image.css";

const Image = props => (
  <img
    src={props.src}
    alt="character"
    key={props.id}
    onClick={props.isSelected(props.id)}
  />
);

export default Image;
