import React, { useEffect, useState } from 'react';
import './Film.scss';
import FilmDecor from '../../UI/FilmDecor/FilmDecor';
import Button from '../../UI/Button/Button';
import { Link, useLocation } from 'react-router-dom';

interface Props {
    el: {
        _id: string;
        name: string;
        progress?: number;
        releaseIn?: number;
        tags?: string[] | string;
        actionType?: string;
        img?: string;
        additionalStatus?: string;
        mediaFilePath?: string;
        filmImage?: string;
        previewUrl?: string;
    }
}

// Для использования изображения/видео с бека нужно ставить не относительный путь
// Пример для превью: http://localhost:5000${el.previewUrl})
const Film: React.FC<Props> = ({ el }) => {

    const location = useLocation();

    // useEffect(() => {
    //     console.log('Preview URL:', el.previewUrl);
    //     console.log('Preview effect:', el.tags);
    //     console.log('Additional statis: ', el.additionalStatus);
    // }, [])

    const isGenrePage = location.pathname.includes('/genre');

    const statuses = el.additionalStatus?.split(' ') || [];

    const actionTypes = ['trailer', 'lovessIt', 'continue'] as const;

    type ActionType = typeof actionTypes[number];

    // Разбиваем строку на массив тегов, если это строка, или используем массив как есть
    const tagArray = Array.isArray(el.tags) ? el.tags : el.tags?.split(' ') || [];

    // Ищем первый тег, подходящий под допустимые actionType
    const currentAction = tagArray.find(tag => actionTypes.includes(tag as ActionType));

    const isValidAction = !!currentAction;

    const releasedInSec = el.releaseIn !== undefined
        ? Math.floor((el.releaseIn - Date.now()) / 1000)
        : undefined;

    return (
        <div className='Film'>

            <div className='Film_decor'>
                {!isGenrePage && (
                    <div className='Film_decor'>
                        {statuses.includes('hot') && <FilmDecor type={'fire'} />}
                        {statuses.includes('liked') && <FilmDecor type={'heart'} />}
                        {statuses.includes('released') && <FilmDecor type={'check'} />}
                    </div>
                )}
            </div>
            {
                !isGenrePage && (
                    <>
                        <div className='Film_line_top fcc'>
                            {releasedInSec !== undefined && releasedInSec > 0 && (
                                <div className='Film_line_decor free_img'>
                                    <div className='Film_line_decor_top free_img'>
                                        <img src="/img/icons/releaseInFront.svg" alt="" />
                                    </div>
                                    <div className='Film_line_decor_text free_img'>
                                        <div className='Film_line_decor_text_title fcc'>
                                            <span className='ffab fs_s'>RELEASE IN</span>
                                            <span>{formatReleaseTime(releasedInSec)}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='Film_line_bot fcc'>
                            {releasedInSec !== undefined && releasedInSec > 0 && (
                                <div className='Film_line_decor free_img'>
                                    <div className='Film_line_decor_back free_img'>
                                        <img src="/img/icons/releaseInBack.svg" alt="" />
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )}

            <div className='Film_effects free_img'></div>
            <div className='Film_ambient free_img'>
                <div className='Film_ambient_inner brad_15' style={{
                    backgroundImage: `url(${el.previewUrl})`
                }} />
            </div>
            <div className='Film_img brad_15' style={{
                backgroundImage: `url(${el.previewUrl})`
            }}>
                {!isGenrePage && isValidAction && currentAction && (
                    <div className='Film_btn fcc'>
                        <Button
                            text={{
                                trailer: "Trailer watching",
                                lovessIt: "Love It",
                                continue: "Continue watching!"
                            }[currentAction as ActionType]}
                            size='s'
                            color={{
                                trailer: "blue",
                                lovessIt: "pink",
                                continue: "gradient"
                            }[currentAction as ActionType]}
                        />
                    </div>
                )}
                {
                    el.progress && <div className='Film_progress'>
                        <div className='Film_progress_inner fs_w fs_xs fcc' style={{
                            width: `${Math.min(Math.max(20, Math.round(el.progress)), el.progress < 100 ? 90 : 100)}%`,
                            justifyContent: el.progress >= 100 ? `center` : 'right',
                            columnGap: el.progress >= 100 ? `10px` : '0px',
                        }}>
                            {el.progress >= 100 && <div className="Film_progress_heart free_img">
                                <img src="/img/icons/heartWhite.svg" alt="" />
                            </div>}
                            {el.progress}%
                            {
                                el.progress < 100 && <div className="Film_progress_img free_img">
                                    <img src="/img/icons/progressFire.svg" alt="" />
                                </div>
                            }
                            {el.progress >= 100 && <div className="Film_progress_heart Film_progress_heart_right free_img">
                                <img src="/img/icons/heartWhite2.svg" alt="" />
                            </div>}
                        </div>
                    </div>
                }
                <div className='Film_img_hover'>
                    <div className='Film_img_hover_leftBouncer'></div>
                    <div className='Film_img_hover_center fcc'>
                        <Link to={`/watch/${el._id}`} className='Film_img_hover_center_play fcc brad_50'>
                            <img src="/img/icons/play.svg" alt="" />
                        </Link>
                    </div>
                    <div className='Film_img_hover_right fcc gap_xs'>
                        <img src="/img/icons/heart.svg" alt="" className='Film_img_hover_right_heart' />
                        <img src="/img/icons/shareArrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Film;


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
