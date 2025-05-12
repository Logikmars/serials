import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom'
import DropDown from '../../UI/DropDown/DropDown';
import languageStore from '../../stores/languageStore';
import Button from '../../UI/Button/Button';


const languages = [
    'English',
    'Arabic',
    'Tatar',
    'German',
]


const Header: React.FC = () => {

    return (
        <div className='Header container'>
            <div className='Header_left'>
                <Link to="/" className='Header_left_logo'>
                    <img src="/img/logo.svg" alt="" />
                    <div className='Header_left_logo_title'>LookTwice</div>
                </Link>
                <div className='Header_left_btns'>
                    <NavLink
                        to="/"
                        className={`Header_left_text`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/fandom"
                        className={`Header_left_text`}
                    >
                        Fandom
                    </NavLink>
                </div>
            </div>

            <div className='Header_right'>
                <div className='Header_right_icons'>
                    <img src="/img/header/search.png" alt="" />
                    <img src="/img/header/likes.png" alt="" />
                    <img src="/img/header/clock.png" alt="" />
                </div>

                <DropDown
                    list={languages}
                    selected={languageStore.language}
                    select={languageStore.setLanguage}
                />

                <Button color='pink' text='Download App' />
                <Button color='blue' text='Sign In' />

                <Link to="/personalaccount" className='Header_right_login'>
                    <img src="/img/header/login.svg" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
