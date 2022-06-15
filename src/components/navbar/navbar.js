import {
    Link,
    useLocation
} from "react-router-dom";
import React from 'react';
import ButtonToLogin from '../button-to-login';

import './navbar.scss';

const Navbar = () => {
    const location = useLocation();
    const classNames = 'noPressed';
    return (
        <div className="nav">
            <div className="nav-left">
                <Link
                    className={location.pathname === '/' ? `${classNames} pressed` : classNames}
                    to="/"
                >
                    <span>Листинг Товаров</span>
                </Link>
                <Link
                    className={location.pathname === '/details' ? `${classNames} pressed` : classNames}
                    to="/details"
                >
                    <span>Листинг Проперти</span>
                </Link>
            </div>
            <div className="nav-right">
                <ButtonToLogin />
            </div>
        </div>
    );
};
export default Navbar;
