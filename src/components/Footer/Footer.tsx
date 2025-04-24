import React from 'react';
import './Footer.scss';
import FooterLineItem from './FooterLineItem/FooterLineItem';
const Footer: React.FC = () => {

    const lineel = [
        {
            title: "About",
            firstel: "Contact us",
            secel: "Terms of Servise",
            thirdel: "Privace Policy"
        },
        {
            title: "Support",
            firstel: "Feedback",
            secel: "Media & Public Relations",
            thirdel: ""
        },
        {
            title: "More Info",
            firstel: "Privacy & Terms",
            secel: "Website Terms & Conditions",
            thirdel: ""
        },
    ]

    return (
        <div className='Footer sizecontainer'>
            <div className='Footer_logo'>
                <img src="/img/header/logo.png" alt="" />
                LookTwice
            </div>
            <div className='Footer_items'>
                {lineel.map((el, index) => (
                    <FooterLineItem title={el.title} firstel={el.firstel} secel={el.secel} thirdel={el.thirdel} key={index}/>
                ))}
                <div className='Footer_items_subscribe'>
                    <h2 className='Footer_items_subscribe_title'>
                        Subscribe to our newsletter
                    </h2>
                    <div className='Footer_items_subscribe_input'>
                        <input type="text" placeholder='Enter your email here' className='Footer_items_subscribe_input_input'/>
                        <div className='Footer_items_subscribe_input_btn'>
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
            <div className='Footer_media'>
                <img src="/img/youtube.svg" alt="" />
                <img src="/img/tiktok.svg" alt="" />
                <img src="/img/telegram.svg" alt="" />
            </div>
            <div className='Footer_copy'>
                © 2025 LookTwice. All rights reserved
            </div>
        </div>
    )
};
export default Footer