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
        <div className='Footer_wrapper'>
            <div className='Footer container gap_l'>
                <div className='Footer_logo fcc ffab fs_m gap_s'>
                    <img src="/img/logo.svg" alt="" />
                    LookTwice
                </div>
                <div className='Footer_items'>
                    {lineel.map((el, index) => (
                        <FooterLineItem title={el.title} firstel={el.firstel} secel={el.secel} thirdel={el.thirdel} key={index} />
                    ))}
                    <div className='Footer_items_subscribe gap_m'>
                        <h2 className='Footer_items_subscribe_title ffab fs_m'>
                            Subscribe to our newsletter
                        </h2>
                        <div className='Footer_items_subscribe_input gap_xs'>
                            <input type="text" placeholder='Enter your email here' className='Footer_items_subscribe_input_input ffar pa_m fs_xs brad_25' />
                            <div className='Footer_items_subscribe_input_btn ffar fs_s brad_25'>
                                Sign up
                            </div>
                        </div>
                    </div>
                </div>
                <div className='Footer_media fcc gap_xl'>
                    <img src="/img/media/youtube.svg" alt="" />
                    <img src="/img/media/tiktok.svg" alt="" />
                    <img src="/img/media/telegram.svg" alt="" />
                </div>
                <div className='Footer_copy fcc ffar fs_xs'>
                    © 2025 LookTwice. All rights reserved
                </div>
            </div>
        </div>
    )
};
export default Footer