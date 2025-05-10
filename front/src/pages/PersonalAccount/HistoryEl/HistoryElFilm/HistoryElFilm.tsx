import React from 'react';
import './HistoryElFilm.scss';
import SliderSmallElement from '../../../../components/SliderSmall/SliderSmallElement';
// import Close from '../../../../components/Close/Close';
import ShareDots from '../../../../components/ShareDots/ShareDots';
import ContineuwathcingBtn from '../../../../components/ContineuwathcingBtn/ContineuwathcingBtn';

interface Props {
    el: {
        img?: string;
        progress?: number;
        title?: string;
        percent: number;
    }
}

const HistoryElFilm: React.FC<Props> = ({ el }) => {

    const newEl = {
        img: el.img,
        progress: el.progress
    };

    return (
        <div className='HistoryElFilm'>
            <div className='HistoryElFilm_film'>
                <SliderSmallElement el={newEl} />
            </div>
            <div className='HistoryElFilm_info'>
                <div className='HistoryElFilm_info_top'>
                    <div className='HistoryElFilm_info_top_top'>
                        {el.title}
                        <div className='HistoryElFilm_info_top_top_nav'>
                            <ShareDots />
                        </div>
                    </div>
                    <div className='HistoryElFilm_info_top_bottom'>
                        {el.percent}%
                    </div>
                </div>
                <div className='HistoryElFilm_info_bottom'>
                    <ContineuwathcingBtn />
                </div>
            </div>
        </div>
    )
};

export default HistoryElFilm;