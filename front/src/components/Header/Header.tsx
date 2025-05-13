import React, { useState } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom'
import SignInBtn from '../SignInBtn/SignInBtn';
import DownloadAppBtn from '../DownloadAppBtn/DownloadAppBtn';

const Header: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [language, setlanguage] = useState('English');

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen((prev) => !prev);
    };

    const navEl = [
        {
            title: 'Home',
            src: '/'
        },
        {
            title: 'Fandom',
            src: '/fandom'
        },
        {
            title: 'Genre',
            src: '/genre/drama'
        }
    ]

    const navIcons = [
        {
            src: '/img/icons/heartWhiteNoFill.svg',
            to: '/personalaccount',
            section: 'liked'
        },
        {
            src: '/img/icons/time.svg',
            to: '/personalaccount',
            section: 'history'
        },
        {
            src: '/img/icons/search.svg',
            to: '/genre/drama',
            section: 'main'
        }
    ];


    return (
        <div className='Header container'>
            <div className='Header_left gap_l fcc'>
                <Link to="/" className='Header_left_logo gap_s fcc'>
                    <img src="/img/logo.svg" alt="" />
                    <h2 className='Header_left_logo_title fs_m ffab'>LookTwice</h2>
                </Link>
                <div className='Header_left_btns fcc gap_l'>
                    {
                    navEl.map((el, index) => (
                        <Link
                        key={index}
                        to={el.src}
                        className={`Header_left_text fs_s ffar ${activeTab === el.title ? 'Header_left_text_active' : ''}`}
                        onClick={() => setActiveTab(el.title)}
                        >
                        {el.title}
                        </Link>
                    ))
                    }
                </div>
            </div>

            <div className='Header_right gap_l'>
                <div className='Header_right_icons fcc gap_m'>
                    {
                        navIcons.map((el, index) => (
                            <Link
                            key={index}
                            to={el.to}
                            state={{ section: el.section }}
                            >
                            <img src={el.src}/>
                            </Link>
                        ))
                    }

                </div>
                
                <div className='Header_right_language fs_s fcc gap_xxxs' onClick={toggleLanguageMenu}>
                    <img src="/img/icons/language.svg" alt="" />
                    {language}
                    <img src="/img/icons/arrow.svg" alt="" className='Header_right_language_arrow'/>
                    <ul className={`Header_right_language_dropdown ${isLanguageMenuOpen ? 'Header_right_language_dropdown_show' : ''}`}>
                        {
                            ['English', 'Arabic', 'Tatar', 'German'].map((el, index) => (
                                <li onClick={() => setlanguage(el)} key={`Header_right_language_${index}`} className='pa_l fs_s ffar'>{el}</li>
                            ))
                        }
                    </ul>
                </div>
                <DownloadAppBtn />
                <SignInBtn />
                <Link to="/personalaccount" className='Header_right_login pa_logo fcc brad_50'>
                    <img src="/img/header/login.svg" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
