import React from 'react';
import avatar from '../images/avatar.png';
import {NavLink} from "react-router-dom";

function NavBar() {
    return (
        <div className="NavBar">
            <div className="profile">
                <img src={avatar} alt=""/>
            </div>
            <div className="nav">
                <ul className="nav-items">
                    <li className="navitem">
                        <NavLink to="/" exact>
                            Home
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 Lorem Ipsum
                    </p>
                </footer>
            </div>
            
        </div>
    )
}

export default NavBar
