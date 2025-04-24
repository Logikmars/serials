import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

    // Функция для переключения состояния меню
    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen((prev) => !prev);
    };

    return (
        <div className='Header container'>
            <div className='Header_left'>
                <div className='Header_left_logo'>
                    <img src="/img/logo.svg" alt="" />
                    <h2 className='Header_left_logo_title'>LookTwice</h2>
                </div>
                <div className='Header_left_btns'>
                    <p
                        className={`Header_left_text ${activeTab === 'Home' ? 'Header_left_text_active' : ''}`}
                        onClick={() => setActiveTab('Home')}
                    >
                        Home
                    </p>
                    <p
                        className={`Header_left_text ${activeTab === 'Fandom' ? 'Header_left_text_active' : ''}`}
                        onClick={() => setActiveTab('Fandom')}
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
                
                <div className='Header_right_language' onClick={toggleLanguageMenu}>
                    <img src="/img/header/language.png" alt="" />
                    English
                    <img src="/img/icons/arrow.svg" alt="" className='Header_right_language_arrow'/>
                    <ul className={`Header_right_language_dropdown ${isLanguageMenuOpen ? 'Header_right_language_dropdown_show' : ''}`}>
                        <li>English</li>
                        <li>Arabic</li>
                        <li>Tatar</li>
                        <li>German</li>
                    </ul>
                </div>

                <div className='Header_right_signin'>
                    Sign In
                </div>
                <div className='Header_right_login'>
                    <img src="/img/header/login.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
