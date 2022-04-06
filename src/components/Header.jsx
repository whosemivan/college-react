import React from 'react';
import { useState } from 'react';
import '../css/header.css';
import { ThemeContext, themes } from '../context';

const Header = () => {
    const {theme, setTheme} = React.useContext(ThemeContext);

    return (
        <header className='header' style={{backgroundColor: theme.foreground}}>
            <a className='header__logo' href="/">
                <span className='header__logo-text' style={{color: theme.background}}>NFT aera</span>
            </a>
            <nav className='header__nav' style={{backgroundColor: theme.background, color: theme.foreground}}>
                <ul className='header__list'>
                    <li className='header__item'>
                        <button onClick={() => {
                            if (theme === themes.light) {
                                setTheme(themes.dark)
                            } else if (theme === themes.dark) {
                                setTheme(themes.light);
                            }
                        }} className='header__link header__btn' type='button'>Change theme</button>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="/contacts" style={{color: theme.foreground}}>Contact</a>
                    </li>
                    <li className='header__item'>
                        <a className='header__link' href="/login" style={{color: theme.foreground}}>Log in</a>
                    </li>
                    <li className='header__item' style={{backgroundColor: theme.foreground}}>
                        <a className='header__link' href="/signup" style={{color: theme.background}}>Sign up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;