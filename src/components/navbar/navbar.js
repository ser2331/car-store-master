import {Link} from "react-router-dom";
import React from "react";

import './navbar.scss'

const Navbar = () => {
    let url = window.location;
    let classNames = 'noPressed'
    return (
        <div className='nav'>
            <Link className={url.pathname === '/cars' ? classNames + ' pressed' : classNames}
                  to='/cars'>
                <span>Листинг Товаров</span>
            </Link>
            <Link className={url.pathname === '/details' ? classNames + ' pressed' : classNames}
                  to='/details'>
                <span>Листинг Проперти</span>
            </Link>
        </div>
    )
}
export default Navbar
