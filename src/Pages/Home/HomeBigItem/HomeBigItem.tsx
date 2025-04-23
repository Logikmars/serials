import React from 'react';
import './HomeBigItem.scss';
import TrandingNowBig from '../../../components/TrandingNowBig/TrandingNowBig';
import Player from '../../../components/Player/Player';

interface Props {
    src: string;
    title: string;
    description: string;
}

const HomeBigItem: React.FC<Props> = ({ src, title, description }) => {
    return (
        <div className='HomeBigItem'>
            <div className='HomeBigItem__bg free_img'>
                <img src={src} className='HomeBigItem__image' />
            </div>
            <div className='HomeBigItem__container'>
                <div className='HomeBigItem__tranding'>
                    <TrandingNowBig />
                </div>
                <div className='HomeBigItem__container_nullitem'>
                    {/* контейнер для позиционирования */}
                </div>
                <div className='HomeBigItem__text'>
                    <h2 className='HomeBigItem__text_title'>{title}</h2>
                    <p className='HomeBigItem__text_description'>{description}</p>
                </div>
                <div className='HomeBigItem__player'>
                    <Player />
                </div>
            </div>
        </div>
    );
};

export default HomeBigItem;
