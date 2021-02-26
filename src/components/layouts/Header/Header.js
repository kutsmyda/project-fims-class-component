import React from 'react';

import styles from './Header.module.css'
const Header = ()=>{

        return (
            <div>
                <nav className="grey darken-3">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">React Movies</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="!#">GitHub</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );

}

export default Header;
