import React from 'react';
import Types from "../../services/types";
import {
    Link,
    useLocation
} from "react-router-dom";
import ButtonToLogin from '../button-to-login';

import './navbar.scss';

const { routingMap } = Types;

const Navbar = () => {
    const location = useLocation();
    const classNames = 'noPressed';
    return (
        <div className="nav">
            <div className="nav-left">
                <Link
                    className={location.pathname === routingMap.get('location').path ? `${classNames} pressed` : classNames}
                    to={routingMap.get('location').path}
                >
                    <span>Листинг Товаров</span>
                </Link>
                <Link
                    className={location.pathname === routingMap.get('details').path ? `${classNames} pressed` : classNames}
                    to={routingMap.get('details').path}
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
