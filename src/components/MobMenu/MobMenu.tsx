import React, { useState } from 'react';
import './MobMenu.scss';
import { Link } from 'react-router-dom'

const MobMenu: React.FC = () => {
    const items = [
        { img: "/img/icons/home.svg", title: "Home", to: '/'},
        { img: "/img/icons/fandom.svg", title: "Fandom", to: 'fandom'},
        { img: "/img/icons/likes.svg", title: "Likes", to: 'liked'},
        { img: "/img/icons/clock.svg", title: "History", to: 'history'},
        { img: "/img/icons/profile.svg", title: "Profile", to: 'profile'},
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="MobMenu">
            {items.map((el, index) => (
                <Link
                    className={`MobMenu_navHome ${activeTab === index ? 'MobMenu_navHome_active' : ''}`}
                    key={index}
                    onClick={() => setActiveTab(index)}
                    to={el.to}
                >
                    <img src={el.img} alt={el.title} />
                    <div className="MobMenu_navHome_title">
                        {el.title}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MobMenu;
