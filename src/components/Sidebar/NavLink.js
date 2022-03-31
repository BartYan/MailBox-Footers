import React from 'react';
import { Link } from 'react-router-dom';

function NavLink({ to, label }) {
    return <Link to={to} className="nav__link">{label}</Link>;
}

export default NavLink;