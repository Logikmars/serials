import React, { useState } from 'react';
import './SliderSmall.scss';
import SliderSmallElement from './SliderSmallElement';


interface Props {
    title?: string;
}

const elements = [
    {
        img: '/img/trends/0.webp',
        progress: 20,
        actionType: 'loveIt',
    },
    {
        img: '/img/trends/1.webp',
        actionType: 'continue',
    },
    {
        img: '/img/trends/2.webp',
        actionType: 'trailer',
    },
    {
        img: '/img/trends/0.webp',
        progress: 50,
        actionType: 'loveIt',
    },
    {
        img: '/img/trends/1.webp',
        actionType: 'continue',
    },
    {
        img: '/img/trends/2.webp',
        actionType: 'trailer',
    },
]


const SliderSmall: React.FC<Props> = ({ title }) => {

    const [currentSlide, setcurrentSlide] = useState(0);

    const elementsPerSlide = 2


    return (
        <div className='SliderSmall'>
            <div className='SliderSmall_header container'>
                <div className='SliderSmall_header_title'>
                    {title}
                </div>
                <div className='SliderSmall_header_filter'>
                    {/*  */}
                </div>
            </div>
            <div className='SliderSmall_slider'>
                {
                    elements.map((el, index) => {
                        return <div className='SliderSmall_slider_element free_img'>
                            <SliderSmallElement key={`SliderSmallElement_${index}`} el={el} />
                        </div>
                    })
                }
            </div>
        </div>
    )
};
export default SliderSmall