import React from 'react';
import './SliderSmallElement.scss';
import SliderSmallBtn from './SliderSmallBtn/SliderSmallBtn';
import SliderSmallHeartDecor from './SliderSmallHeartDecor/SliderSmallHeartDecor';
import SliderSmallFireDecor from './SliderSmallFireDecor/SliderSmallFireDecor';
interface Props {
    el: {
        progress?: number;
        releaseInSec?: number;
        effect?: string;
        actionType?: string;
        img?: string;
    }
}
const SliderSmallElement: React.FC<Props> = ({ el }) => {

    return (
        <div className='SliderSmallElement'>

            <div className='SliderSmallElement_decor'>
                {el.effect === 'heart' && (<SliderSmallHeartDecor />)}

                {el.effect === 'fire' && (<SliderSmallFireDecor />)}
            </div>

            <div className='SliderSmallElement_effects free_img'></div>

            <div className='SliderSmallElement_img' style={{
                backgroundImage: `url(${el.img})`
            }}>
                {el.actionType && <div className='SliderSmallElement_btn'>
                    <SliderSmallBtn type={el.actionType} />

                </div>
                }
                {
                    el.progress && <div className='SliderSmallElement_progress'>
                        <div className='SliderSmallElement_progress_inner' style={{
                            width: `${Math.min(Math.max(20, Math.round(el.progress)), el.progress < 100 ? 90 : 100)}%`,
                            justifyContent: el.progress >= 100 ? `center` : 'right',
                            columnGap: el.progress >= 100 ? `10px` : '0px',
                        }}>
                            {el.progress >= 100 && <div className="SliderSmallElement_progress_heart free_img">
                                <img src="/img/icons/heartWhite.svg" alt="" />
                            </div>}
                            {el.progress}%
                            {
                                el.progress < 100 && <div className="SliderSmallElement_progress_img free_img">
                                    <img src="/img/icons/progressFire.svg" alt="" />
                                </div>
                            }
                            {el.progress >= 100 && <div className="SliderSmallElement_progress_heart SliderSmallElement_progress_heart_right free_img">
                                <img src="/img/icons/heartWhite2.svg" alt="" />
                            </div>}
                        </div>
                    </div>
                }
            </div>


        </div>
    )
};
export default SliderSmallElement