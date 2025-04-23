import React from 'react';
import './SmallMovieItem.scss';

interface Props {
    src: string;
    title: string;
    description: string;
}

const SmallMovieItem: React.FC<Props> = ({src, title, description}) => {
    return (
        <div className='SmallMovieItem'>
            <img src={src} />
            <div className='SmallMovieItem__overlay'>
                <h3 className='SmallMovieItem__overlay__title'>{title}</h3>
                <p className='SmallMovieItem__overlay__description'>{description}</p>
            </div>
        </div>
    )
};
export default SmallMovieItem