import {Link} from "react-router-dom";
import React from "react";

import './navbar.scss'
import ButtonToLogin from "../button-to-login";

const Navbar = () => {
    let url = window.location;
    let classNames = 'noPressed'
    return (
        <div className='nav'>
            <div className='nav-left'>
                <Link className={url.pathname === '/' ? classNames + ' pressed' : classNames}
                      to='/'>
                    <span>Листинг Товаров</span>
                </Link>
                <Link className={url.pathname === '/details' ? classNames + ' pressed' : classNames}
                      to='/details'>
                    <span>Листинг Проперти</span>
                </Link>
            </div>
            <div className='nav-right'>
                <ButtonToLogin/>
            </div>
        </div>
    )
}
export default Navbar
