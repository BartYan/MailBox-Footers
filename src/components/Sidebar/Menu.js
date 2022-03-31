import React from "react";

function Menu({ children, burgerOpen }) {
    return (
        <nav className={burgerOpen ? "nav" : "nav nav__expand"}>
            { children }
        </nav>
    );
}

export default Menu;