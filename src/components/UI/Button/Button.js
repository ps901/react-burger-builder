import React from "react";
import "./Button.css";

const button = (props) => (
    <button onClick={props.clicked} className={["button", props.buttonType].join(" ")}>{props.children}</button>
);

export default button;