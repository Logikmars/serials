import React, { useState } from 'react';
import './Header.scss';


const Header: React.FC = () => {

    const [activeTab, setactiveTab] = useState("Home");

    return (
    <div className='Header sizecontainer'>
        <div className='Header__leftcontainer'>
            <div className='Header__leftcontainer_logo'>
                <img src="/img/header/logo.png" alt="" />
                <h2 className='Header__leftcontainer_logo_title'>LookTwice</h2>
            </div>
            <div className='Header__leftcontainer_btns'>
                <p
                    className={`Header__leftcontainer_text ${
                    activeTab === 'Home' ? 'Header__leftcontainer_text_active' : ''
                    }`}
                >
                    Home
                </p>
                <p
                    className={`Header__leftcontainer_text ${
                    activeTab === 'Fandom' ? 'Header__leftcontainer_text_active' : ''
                    }`}
                >
                    Fandom
                </p>
            </div>
        </div>
        <div className='Header__rightcontainer'>
            <div className='Header__rightcontainer_icons'>
                <img src="/img/header/search.png" alt="" />
                <img src="/img/header/likes.png" alt="" />
                <img src="/img/header/clock.png" alt="" />
            </div>
            <div className='Header__rightcontainer_language'>
                <img src="/img/header/language.png" alt="" />
                English
            </div>
            <div className='Header__rightcontainer_signin'>
                Sign In
            </div>
            <div className='Header__rightcontainer_login'>
                <img src="/img/header/login.png" alt="" />
            </div>
        </div>
    </div>
    )
};
export default Header