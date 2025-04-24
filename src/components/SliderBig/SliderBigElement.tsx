import React from 'react';
import './SliderBigElement.scss';
import { ISliderBigElement } from './ISliderBigElement';
interface Props {
    element: ISliderBigElement;
    index: number;
    currentSlide: number;
    loop: boolean;
}
const SliderBigElement: React.FC<Props> = ({
    element,
    index,
    currentSlide,
    loop
}) => {
    return (
        <div className='SliderBigElement_wrapper free_img' style={{
            transform: `translate(${(index - currentSlide) * 1600}px, 0px)`,
            transition: loop ? 'none' : 'transform 500ms'
        }}>

            <div className='SliderBigElement SliderElementWidth SliderElementHeight' style={{
                backgroundImage: `url(${element.src})`
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
        </div>
    )
};
export default SliderBigElement