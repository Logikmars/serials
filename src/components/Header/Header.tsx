import React, { useState } from 'react';
import './Header.scss';


const Header: React.FC = () => {

    const [activeTab, setactiveTab] = useState("Home");

    return (
        <div className='Header container'>
            <div className='Header_left'>
                <div className='Header_left_logo'>
                    <img src="/img/logo.svg" alt="" />
                    <h2 className='Header_left_logo_title'>LookTwice</h2>
                </div>
                <div className='Header_left_btns'>
                    <p
                        className={`Header_left_text ${activeTab === 'Home' ? 'Header_left_text_active' : ''
                            }`}
                    >
                        Home
                    </p>
                    <p
                        className={`Header_left_text ${activeTab === 'Fandom' ? 'Header_left_text_active' : ''
                            }`}
                    >
                        Fandom
                    </p>
                </div>
            </div>
            <div className='Header_right'>
                <div className='Header_right_icons'>
                    <img src="/img/header/search.png" alt="" />
                    <img src="/img/header/likes.png" alt="" />
                    <img src="/img/header/clock.png" alt="" />
                </div>
                <div className='Header_right_language'>
                    <img src="/img/header/language.png" alt="" />
                    English
                </div>
                <div className='Header_right_signin'>
                    Sign In
                </div>
                <div className='Header_right_login'>
                    <img src="/img/header/login.png" alt="" />
                </div>
            </div>
        </div>
    )
};
export default Header