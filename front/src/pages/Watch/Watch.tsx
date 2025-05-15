import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Watch.scss';
import filmStore from '../../stores/filmStore'; // или через api

const Watch: React.FC = () => {
    const { id } = useParams(); // получаем id из URL
    const [film, setFilm] = useState<any>(null);

    useEffect(() => {
        const fetchFilm = async () => {
            if (!id) return;
            const data = await filmStore.getFilmById(id);
            setFilm(data);
        };
        fetchFilm();
    }, [id]);

    if (!film) return <div>Загрузка...</div>;

    return (
        <div className='Watch'>
            <h1>{film.name}</h1>
            <video
                src={`${import.meta.env.VITE_API_URL}${film.mediaFilePath}`}
                controls
            />
            <p>{film.description}</p>
        </div>
    );
};

export default Watch;
