import React, { useState } from 'react';

import Menu from './Menu';
import NavLink from './NavLink';

function Sidebar() {
    const [burgerOpen, setBurgerOpen] = useState("false");
    const burgerToggle = (e) => {
            e.preventDefault();
            setBurgerOpen(!burgerOpen);
    };

    return (
        <div>
            <div id="nav-icon3" className={burgerOpen ? "" : "open"} onClick={burgerToggle}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Menu burgerOpen={burgerOpen}>
                <NavLink to="/hello" label="Hello" />
                <NavLink to="/standard" label="Podstrona" />
                <NavLink to="/company" label="Firma" />
            </Menu>
        </div>
    );
}

export default Sidebar;