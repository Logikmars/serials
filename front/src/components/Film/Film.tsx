import React from 'react';
import './Film.scss';
import FilmDecor from '../../UI/FilmDecor/FilmDecor';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router-dom';

interface Props {
    el: {
        progress?: number;
        releaseInSec?: number;
        effect?: string;
        actionType?: string;
        img?: string;
    }
}
const Film: React.FC<Props> = ({ el }) => {



    return (
        <div className='Film'>

            <div className='Film_decor'>
                {el.effect && <FilmDecor type={el.effect} />}
            </div>
            <div className='Film_line_top'>
                {typeof el.releaseInSec === 'number' && el.releaseInSec > 0 && (
                    <div className='Film_line_decor free_img'>
                        <div className='Film_line_decor_top free_img'>
                            <img src="/img/icons/releaseInFront.svg" alt="" />
                        </div>
                        <div className='Film_line_decor_text free_img'>
                            <div className='Film_line_decor_text_title'>
                                <span>RELEASE IN</span>
                                <span>{formatReleaseTime(el.releaseInSec)}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='Film_line_bot'>
                {typeof el.releaseInSec === 'number' && el.releaseInSec > 0 && (
                    <div className='Film_line_decor free_img'>
                        <div className='Film_line_decor_back free_img'>
                            <img src="/img/icons/releaseInBack.svg" alt="" />
                        </div>
                    </div>
                )}
            </div>

            <div className='Film_effects free_img'></div>

            <div className='Film_img' style={{
                backgroundImage: `url(${el.img})`
            }}>
                {el.actionType && <div className='Film_btn'>
                    <Button
                        text={{
                            'trailer': "Trailer watching",
                            'lovessIt': "Love It",
                            'continue': "Continue watching!"
                        }[el.actionType]}
                        size='s'
                        color={{
                            'trailer': "blue",
                            'loveIt': "pink",
                            'continue': "gradient"
                        }[el.actionType]}
                    />
                </div>
                }
                {
                    el.progress && <div className='Film_progress'>
                        <div className='Film_progress_inner' style={{
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
                    <div className='Film_img_hover_center'>
                        <Link to="/film/default" className='Film_img_hover_center_play'>
                            <img src="/img/icons/play.svg" alt="" />
                        </Link>
                    </div>
                    <div className='Film_img_hover_right'>
                        <img src="/img/icons/heart.svg" alt="" className='Film_img_hover_right_heart' />
                        <img src="/img/icons/shareArrow.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Film;


const formatReleaseTime = (minutes?: number): string => {
    if (typeof minutes !== 'number' || minutes <= 0) return '';

    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;

    if (minutes < 60) {
        return `${minutes} mins`;
    } else if (hours < 24) {
        return `${hours} hour ${remainingMinutes > 0 ? `${remainingMinutes} mins` : ''}`;
    } else {
        // Если дней больше 0, добавляем оставшиеся часы и минуты
        return `${days} day${remainingHours > 0 || remainingMinutes > 0 ? ' ' + remainingHours + ' hour' : ''} ${remainingMinutes > 0 ? `${remainingMinutes} min` : ''}`;
    }
};