import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary/Auxilliary";
import "./SideDrawer.css";

const sideDrawer = (props) => {
    //... condition is required so not direct return
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open) {
        attachedClasses=["SideDrawer", "Open"];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className = {attachedClasses.join(" ")}>
                <div className="Logo-Small">
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;