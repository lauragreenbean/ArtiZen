import React from "react";

class Header extends React.Component {
    render() {
        return (
        <div>
            <nav id="nav">
                        <ul>
                            <li><NavLink to="/" class="active">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                        </ul>
                            
                    </nav>
        </div>
        );
    }
}

export default Header;

