import React from 'react';
import './SliderSmallElement.scss';
import SliderSmallBtn from './SliderSmallBtn/SliderSmallBtn';
interface Props {
    el: {
        progress?: number;
        releaseInSec?: number;
        effect?: string;
        actionType?: string;
        img?: string;
        loveIt?: boolean;
        continue?: boolean;
        trailer?: boolean;
    }
}
const SliderSmallElement: React.FC<Props> = ({ el }) => {

    const getButtonData = () => {
        if (el.loveIt) return { key: 'loveIt', title: 'You love it' };
        if (el.continue) return { key: 'continue', title: 'Continue watching!' };
        if (el.trailer) return { key: 'trailer', title: 'Trailer watching' };
        return { key: 'default', title: 'Default' };
    };

    const { key, title } = getButtonData();

    return (
        <div className='SliderSmallElement'>

            <div className='SliderSmallElement_effects free_img'></div>

            <div className='SliderSmallElement_img' style={{
                backgroundImage: `url(${el.img})`
            }}>
                <div className='SliderSmallElement_btn'>
                    {/* lox */}
                    <SliderSmallBtn title={title} type={key}/>
                </div>
                {
                    el.progress && <div className='SliderSmallElement_progress'>
                        <div className='SliderSmallElement_progress_inner' style={{
                            width: `${Math.min(Math.max(20, Math.round(el.progress)), el.progress < 100 ? 90 : 100)}%`,
                            justifyContent: el.progress >= 100 ? `center` : 'right',
                            columnGap: el.progress >= 100 ? `10px` : '0px',
                        }}>
                            {el.progress >= 100 && <div className="SliderSmallElement_progress_heart free_img">
                                <img src="/img/heartWhite.svg" alt="" />
                            </div>}
                            {el.progress}%
                            {
                                el.progress < 100 && <div className="SliderSmallElement_progress_img free_img">
                                    <img src="/img/progressFire.svg" alt="" />
                                </div>
                            }
                            {el.progress >= 100 && <div className="SliderSmallElement_progress_heart SliderSmallElement_progress_heart_right free_img">
                                <img src="/img/heartWhite2.svg" alt="" />
                            </div>}
                        </div>
                    </div>
                }
            </div>


        </div>
    )
};
export default SliderSmallElement