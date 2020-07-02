import React from "react";
import "./DrawerToggle.css";

const drawToggle = (props) => (
    <div onClick={props.clicked} className={"DrawerToggle"}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default drawToggle;