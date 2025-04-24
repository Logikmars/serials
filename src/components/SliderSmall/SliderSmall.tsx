import React, { useState } from 'react';
import './SliderSmall.scss';
import SliderSmallElement from './SliderSmallElement';


interface Props {
    title?: string;
}

const elements = [
    {
        img: '/img/trends/0.webp',
        progress: 10,
        actionType: 'loveIt',
        releaseInSec: 1000,
        effect: 'heart'
    },
    {
        img: '/img/trends/1.webp',
        progress: 25,
        actionType: 'continue',
        releaseInSec: 100000,
    },
    {
        img: '/img/trends/2.webp',
        progress: 40,
        actionType: 'trailer',
    },
    {
        img: '/img/trends/0.webp',
        progress: 55,
        actionType: 'loveIt',
        effect: 'heart',
        releaseInSec: 1
    },
    {
        img: '/img/trends/1.webp',
        progress: 70,
        actionType: 'continue',
        effect: 'fire'
    },
    {
        img: '/img/trends/2.webp',
        actionType: 'trailer',
        progress: 80,
        effect: 'heart'
    },
    {
        img: '/img/trends/1.webp',
        progress: 90,
        actionType: 'continue',
        effect: 'fire'
    },
    {
        img: '/img/trends/2.webp',
        actionType: 'trailer',
        progress: 100,
        effect: 'heart'
    },
]


const SliderSmall: React.FC<Props> = ({ title }) => {

    const [currentSlide, setcurrentSlide] = useState(0);

    const elementsPerSlide = 2

    return (
        <div className='SliderSmall'>
            <div className='SliderSmall_header container'>
                <div className='SliderSmall_header_title' onClick={() => { setcurrentSlide(prev => prev + 1) }}>
                    {title}
                </div>
                <div className='SliderSmall_header_filter' onClick={() => { setcurrentSlide(prev => prev - 1) }}>
                    {currentSlide}
                </div>
            </div>
            <div className='SliderSmall_slider'>
                {
                    elements.map((el, index) => {
                        return <div className='SliderSmall_slider_element free_img' style={{
                            transform: `translate(${-(currentSlide - 1.5 - index + 3) * 250}px, 0px)`,
                            opacity: currentSlide + 4 - index > 0
                                ? currentSlide - 1 - index < 0
                                    ? 1
                                    : 0
                                : 0
                        }}>
                            <SliderSmallElement key={`SliderSmallElement_${index}`} el={el} />
                        </div>
                    })
                }
            </div>
        </div>
    )
};
export default SliderSmall