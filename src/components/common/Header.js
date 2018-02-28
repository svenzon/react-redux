import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <nav>
            <NavLink to="/" activeClassName="selected">Home</NavLink>
            {" | "}
            <NavLink to="/courses" activeClassName="selected">Courses</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="selected">About</NavLink>
        </nav>
    );
};

export default Header;