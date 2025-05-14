import React, { useEffect, useState } from 'react';
import './Genre.scss';
import GenreFilters from './GenreFilters/GenreFilters';
import Film from '../../components/Film/Film';
import filmStore from '../../stores/filmStore';
const Genre: React.FC = () => {

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