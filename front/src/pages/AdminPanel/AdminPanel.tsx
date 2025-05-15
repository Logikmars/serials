import React, { useEffect, useState } from 'react';
import './AdminPanel.scss';
import AddFilm from '../AddFilm/AddFilm';
import filmStore from '../../stores/filmStore';

interface Film {
    id: string;
    name: string;
    description: string;
    tags: string;
    filmEpisodes: number;
    filmEpisodesFree: number;
    releaseIn: number;
    additionalStatus: string;
    mediaFilePath: string;
    filmImage: string;
}

const AdminPanel: React.FC = () => {

    const [openAdd, setopenAdd] = useState(false);
    const [openEdit, setopenEdit] = useState(false);
    const [films, setFilms] = useState<Film[]>([]);
    const [editingFilm, setEditingFilm] = useState<Film | null>(null);

    const handlerOpenAddFilm = () => {
        setopenAdd(prev => !prev)
    }

    const handlerOpenEditFilm = () => {
        setopenEdit(prev => !prev)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await filmStore.getAllFilms();
            const filmsWithId = data.map((film: any) => ({
                ...film,
                id: film._id,
            }));
            setFilms(filmsWithId);
        };
        fetchData();
    }, []);

    const handleDeleteFilm = async (filmId: string) => {
        console.log('Start delete front', filmId);

        await filmStore.deleteFilm(filmId);
        const data = await filmStore.getAllFilms();
        const filmsWithId = data.map((film: any) => ({
            ...film,
            id: film._id,
        }));
        setFilms(filmsWithId);
        setEditingFilm(null);
    };

    return (
        <div className='AdminPanel fcc container gap_m'>
            <div className='AdminPanel_addfilm fcc fs_s ffab' onClick={handlerOpenAddFilm}>Click to open menu with add film</div>
            {
                openAdd && <AddFilm
                    onSave={() => {
                        filmStore.getAllFilms().then((data: any[]) => {
                            const filmsWithId = data.map(film => ({
                                ...film,
                                id: film._id,
                            }));
                            setFilms(filmsWithId);
                        });

                        // filmStore.getAllFilms().then(setFilms); // обновляем список фильмов после добавления
                    }} />
            }
            <div className='AdminPanel_editFilm fcc' onClick={handlerOpenEditFilm}>Click to open menu for film editing</div>
            {
                openEdit &&
                <div className='AdminPanel_editFilm_list fcc gap_l'>
                    {
                        films.map((el, index) => {
                            const releasedInSec = el.releaseIn !== undefined
                                ? Math.floor((el.releaseIn - Date.now()) / 1000)
                                : undefined;

                            return (
                                <div className='AdminPanel_editFilm_list_el pa_l brad_15' key={`AdminPanel_editFilm_list_el_${index}`} onClick={() => setEditingFilm(el)}>
                                    <div className='AdminPanel_editFilm_list_el_item AdminPanel_editFilm_list_el_item_small'>{el.name}</div>
                                    <div className='AdminPanel_editFilm_list_el_item AdminPanel_editFilm_list_el_item_small'>{el.description}</div>
                                    <div className='AdminPanel_editFilm_list_el_item'>{el.tags}</div>
                                    <div className='AdminPanel_editFilm_list_el_item AdminPanel_editFilm_list_el_item_small'>{el.filmEpisodes}</div>
                                    <div className='AdminPanel_editFilm_list_el_item AdminPanel_editFilm_list_el_item_small'>{el.filmEpisodesFree}</div>
                                    <div className='AdminPanel_editFilm_list_el_item'>{formatReleaseTime(releasedInSec)}</div>
                                    <div className='AdminPanel_editFilm_list_el_item'>{el.additionalStatus}</div>
                                    <div className='AdminPanel_editFilm_list_el_item'>
                                        <video src={`http://localhost:5000${el.mediaFilePath}`} controls />
                                    </div>
                                    <div className='AdminPanel_editFilm_list_el_item'>
                                        <img src={`http://localhost:5000${el.filmImage}`} alt="" />
                                    </div>
                                </div>
                            );
                        })
                    }
                    {editingFilm && (
                        <div className='AdminPanel_mm fcc'>
                            <AddFilm
                                filmToEdit={editingFilm}
                                onClose={() => setEditingFilm(null)}
                                onSave={() => {
                                    filmStore.getAllFilms().then((data: any[]) => {
                                        const filmsWithId = data.map(film => ({
                                            ...film,
                                            id: film._id,
                                        }));
                                        setFilms(filmsWithId);
                                    });

                                    // filmStore.getAllFilms().then(setFilms); // обновляем список фильмов после редактирования
                                }}
                                onDelete={() => handleDeleteFilm(editingFilm.id)}
                            />
                        </div>
                    )}
                </div>
            }
        </div>
    )
};

export default AdminPanel;

const formatReleaseTime = (sec?: number): string => {
    if (typeof sec !== 'number' || sec <= 0) return '';

    const seconds = sec % 60;
    const totalMinutes = Math.floor(sec / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60) % 24;
    const days = Math.floor(totalMinutes / 60 / 24);

    if (sec < 60) {
        return `${sec} sec`;
    } else if (sec < 3600) {
        return `${totalMinutes} min${seconds > 0 ? ` ${seconds} sec` : ''}`;
    } else if (sec < 86400) {
        return `${hours} hour${minutes > 0 ? ` ${minutes} min` : ''}${seconds > 0 ? ` ${seconds} sec` : ''}`;
    } else {
        return `${days} day${hours > 0 ? ` ${hours} hour` : ''}${minutes > 0 ? ` ${minutes} min` : ''}${seconds > 0 ? ` ${seconds} sec` : ''}`;
    }
};
