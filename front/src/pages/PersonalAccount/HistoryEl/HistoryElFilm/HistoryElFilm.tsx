import React from 'react';
import './HistoryElFilm.scss';
import SliderSmallElement from '../../../../components/Film/Film';
// import Close from '../../../../components/Close/Close';
import ShareDots from '../../../../components/ShareDots/ShareDots';

interface Props {
el: {
        _id: string;
        name: string;
        img?: string;
        progress?: number;
        title?: string;
        percent: number;
        releaseIn?: number;
        tags?: string[] | string;
        actionType?: string;
        additionalStatus?: string;
        mediaFilePath?: string;
        filmImage?: string;
    }
}

const HistoryElFilm: React.FC<Props> = ({ el }) => {

    const newEl = {
    _id: el._id,
    name: el.name,
    img: el.filmImage,
    progress: el.progress,
    releaseIn: el.releaseIn,
    tags: el.tags,
    actionType: el.actionType,
    additionalStatus: el.additionalStatus,
    mediaFilePath: el.mediaFilePath,
    filmImage: el.filmImage
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