import React, { useEffect, useState } from 'react';
import './Genre.scss';
import GenreFilters from './GenreFilters/GenreFilters';
import Film from '../../components/Film/Film';
import filmStore from '../../stores/filmStore';
// import SliderSmallElement from '../../components/SliderSmall/SliderSmallElement';
const Genre: React.FC = () => {

    // const elements = [
    //     {
    //         img: '/img/trends/0.webp',
    //     },
    //     {
    //         img: '/img/trends/1.webp',
    //     },
    //     {
    //         img: '/img/trends/2.webp',
    //     },
    //     {
    //         img: '/img/trends/0.webp',
    //     },
    //     {
    //         img: '/img/trends/1.webp',
    //     },
    //     {
    //         img: '/img/trends/2.webp',
    //     },
    //     {
    //         img: '/img/trends/2.webp',
    //     },
    //     {
    //         img: '/img/trends/2.webp',
    //     },
    //     {
    //         img: '/img/trends/2.webp',
    //     },
    //     {
    //         img: '/img/trends/2.webp',
    //     },
    //     {
    //         img: '/img/trends/2.webp',
    //     },

    // ]

    const [films, setFilms] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const data = await filmStore.getAllFilms();
        setFilms(data);
        };
        fetchData();
    }, []);

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
                    films.map((el, index) => (
                        <Film el={el} key={`Genre_SliderSmallElement_${index}`} />
                    ))
                }
            </div>
        </div>
    )
};
export default Genre