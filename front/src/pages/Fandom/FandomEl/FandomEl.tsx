import React from 'react';
import './FandomEl.scss';
interface Props {
    el: {
        img: string;
        date: Date;
        title: string;
        description: string;
        name: string;
    }
}
const FandomEl: React.FC<Props> = ({ el }) => {
    return (
        <div className='FandomEl'   style={{
            backgroundImage: `url(${el.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className='FandomEl_bouncer'></div>
            <div className='FandomEl_title'>
                <div className='FandomEl_title_date'>
                    {el.date.toLocaleDateString()}
                </div>
                <div className='FandomEl_title_title'>
                    {el.title}
                </div>
                <div className='FandomEl_title_description'>
                    {el.description.length > 150
                    ? el.description.slice(0, 150) + '...'
                    : el.description}
                </div>
                <div className='FandomEl_title_user'>
                    <div className='FandomEl_title_user_img'>
                        <img src="/img/header/login.svg" alt="" />
                    </div>
                    {el.name}
                </div>
            </div>
        </div>
    )
};
export default FandomEl