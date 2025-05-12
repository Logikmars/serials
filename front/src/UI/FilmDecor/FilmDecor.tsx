import React from 'react';
import './FilmDecor.scss';
interface Props {
    type: string;
}
const FilmDecor: React.FC<Props> = ({ type }) => {
    return (
        <div className='FilmDecor'>
            <div className={`FilmDecor_1 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
            <div className={`FilmDecor_2 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
            <div className={`FilmDecor_3 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
            <div className={`FilmDecor_4 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
            <div className={`FilmDecor_5 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
            <div className={`FilmDecor_6 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
            <div className={`FilmDecor_7 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
            <div className={`FilmDecor_8 FilmDecor_${type} free_img`}>
                <img src={`/img/icons/${type}.svg`} alt="" />
            </div>
        </div>
    )
};
export default FilmDecor