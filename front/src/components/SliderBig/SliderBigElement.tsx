import React, { useEffect, useState } from 'react';
import './SliderBigElement.scss';
import { ISliderBigElement } from './ISliderBigElement';
interface Props {
    element: ISliderBigElement;

}
const SliderBigElement: React.FC<Props> = ({
    element,
}) => {

    const [maxWidth, setMaxWidth] = useState(Math.min(1600, window.innerWidth));

    useEffect(() => {
        const handleResize = () => setMaxWidth(Math.min(1600, window.innerWidth));
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (


        <div className='SliderBigElement SliderElementHeight' style={{
            backgroundImage: `url(${element.src})`,
            maxWidth: maxWidth,
            minWidth: maxWidth,

        }}>



            <div className='SliderBigElement_top'>

                <div className='SliderBigElement_fade_vertical_wrapper free_img'>
                    <div className='SliderBigElement_fade_vertical free_img'>
                        <div className='SliderBigElement_fade_vertical_inner SliderElementHeight'></div>
                    </div>

                    <div className='SliderBigElement_fade_vertical SliderBigElement_fade_vertical_invert free_img'>
                        <div className='SliderBigElement_fade_vertical_inner SliderElementHeight'></div>
                    </div>
                </div>


                <div className='SliderBigElement_fade_horizontal free_img'>
                    <div className='SliderBigElement_fade_horizontal_inner'></div>
                </div>

            </div>
            <div className='SliderBigElement_bot'>
                <div className='SliderBigElement_content container'>
                    <div className='SliderBigElement_header'>
                        {element.title}
                    </div>
                    <div className='SliderBigElement_desc'>
                        {element.description}
                    </div>
                    <div className='SliderBigElement_buttons'>
                        <div className='SliderBigElement_buttons_watch'>
                            <img src="/img/icons/play.svg" alt="" />
                            Watch
                        </div>
                    </div>
                </div>
                <div className='SliderBigElement_fade_horizontal SliderBigElement_fade_horizontal_invert free_img'>
                    <div className='SliderBigElement_fade_horizontal_inner'></div>
                </div>
            </div>
        </div>
    )
};
export default SliderBigElement