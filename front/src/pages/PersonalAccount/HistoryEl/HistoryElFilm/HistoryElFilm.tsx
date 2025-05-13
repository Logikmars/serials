import React from 'react';
import './HistoryElFilm.scss';
import SliderSmallElement from '../../../../components/Film/Film';
// import Close from '../../../../components/Close/Close';
import ShareDots from '../../../../components/ShareDots/ShareDots';

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
        <div className='HistoryElFilm gap_l'>
            <div className='HistoryElFilm_film'>
                <SliderSmallElement el={newEl} />
            </div>
            <div className='HistoryElFilm_info'>
                <div className='HistoryElFilm_info_top ffab fs_m fs_lw'>
                    <div className='HistoryElFilm_info_top_top'>
                        {el.title}
                        <div className='HistoryElFilm_info_top_top_nav'>
                            <ShareDots />
                        </div>
                    </div>
                    <div className='HistoryElFilm_info_top_bottom fs_s fs_lw'>
                        {el.percent}%
                    </div>
                </div>
                <div className='HistoryElFilm_info_bottom'>
                    {/* <ContineuwathcingBtn /> */}
                    ШО ГДЕ
                </div>
            </div>
        </div>
    )
};

export default HistoryElFilm;