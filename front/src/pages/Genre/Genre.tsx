import React from 'react';
import './Genre.scss';
import GenreFilters from './GenreFilters/GenreFilters';
import SliderSmallElement from '../../components/SliderSmall/SliderSmallElement';
const Genre: React.FC = () => {

    const elements = [
    {
        img: '/img/trends/0.webp',
    },
    {
        img: '/img/trends/1.webp',
    },
    {
        img: '/img/trends/2.webp',
    },
    {
        img: '/img/trends/0.webp',
    },
    {
        img: '/img/trends/1.webp',
    },
    {
        img: '/img/trends/2.webp',
    },
        {
        img: '/img/trends/2.webp',
    },
        {
        img: '/img/trends/2.webp',
    },
        {
        img: '/img/trends/2.webp',
    },
        {
        img: '/img/trends/2.webp',
    },
        {
        img: '/img/trends/2.webp',
    },

]

    return (
        <div className='Genre container'>
            <div className='Genre_header'>
                <div className='Genre_header_title'>
                    Filters
                </div>
                <GenreFilters />
            </div>
            <div className='Genre_list'>
                {
                    elements.map((el, index) => (
                        <SliderSmallElement el={el} key={`Genre_SliderSmallElement_${index}`}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Genre