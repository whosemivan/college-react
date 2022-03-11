import React from 'react';
import '../css/header.css';

const Header = () => {
    return (
        <header className='header'>
                <a className='header__logo' href="/">
                    <img src="" alt="Logo" />
                </a>
                <nav className='header__nav'>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <a className='header__link' href="/contacts">Contact</a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="/login">Log in</a>
                        </li>
                        <li className='header__item'>
                            <a className='header__link' href="/signup">Sign up</a>
                        </li>
                    </ul>
                </nav>
        </header>
    );
};

export default Header;