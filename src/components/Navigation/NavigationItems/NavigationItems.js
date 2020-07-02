import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import "./NavigationItems.css";
const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">CheckOut</NavigationItem>
        {/* by def active  = true */}
    </ul>
)

export default navigationItems;