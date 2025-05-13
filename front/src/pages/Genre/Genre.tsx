import React from 'react';
import './Genre.scss';
import GenreFilters from './GenreFilters/GenreFilters';
import Film from '../../components/Film/Film';
// import SliderSmallElement from '../../components/SliderSmall/SliderSmallElement';
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
        <div className='Genre container gap_xl'>
            <div className='Genre_header gap_s'>
                <div className='Genre_header_title ffab fs_m'>
                    Filters
                </div>
                <GenreFilters />
            </div>
            <div className='Genre_list gap_xl'>
                {
                    elements.map((el, index) => (
                        <Film el={el} key={`Genre_SliderSmallElement_${index}`} />
                    ))
                }
            </div>
        </div>
    )
};
export default Genre