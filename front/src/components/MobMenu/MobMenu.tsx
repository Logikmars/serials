import React, { useState } from 'react';
import './MobMenu.scss';
import { Link } from 'react-router-dom'

const MobMenu: React.FC = () => {
    const items = [
        { img: "/img/icons/homeBlue.svg", title: "Home", to: '/'},
        { img: "/img/icons/fandomBlue.svg", title: "Fandom", to: 'fandom'},
        { img: "/img/icons/likesBlue.svg", title: "Likes", to: 'liked'},
        { img: "/img/icons/clockBlue.svg", title: "History", to: 'history'},
        { img: "/img/icons/profileBlue.svg", title: "Profile", to: 'profile'},
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="MobMenu gap_xs">
            {items.map((el, index) => (
                <Link
                    className={`MobMenu_navHome fcc gap_xxxs ${activeTab === index ? 'MobMenu_navHome_active' : ''}`}
                    key={index}
                    onClick={() => setActiveTab(index)}
                    to={el.to}
                >
                    <img src={el.img} alt={el.title} />
                    <div className="MobMenu_navHome_title fcc ffar fs_xs">
                        {el.title}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MobMenu;
