import React from 'react';
import './SliderSmall.scss';
import SliderSmallElement from './SliderSmallElement';


interface Props {
    title?: string;
}

const elements = [

    {
        img: '/img/trends/0.webp',
        progress: 50,
        actionType: 'loveIt',
        effect: 'heart'
    },
    {
        img: '/img/trends/1.webp',
        actionType: 'continue',
        effect: 'fire'
    },
    {
        img: '/img/trends/2.webp',
        actionType: 'trailer',
        effect: 'heart'
    },

]


const SliderSmall: React.FC<Props> = ({ title }) => {
    return (
        <div className='SliderSmall'>
            <div className='SliderSmall_header'>
                <div className='SliderSmall_header_title'>
                    {title}
                </div>
                <div className='SliderSmall_header_filter'>
                    {/*  */}
                </div>
            </div>
            <div className='SliderSmall_slider'>
                {/* <div className='SliderSmall_'></div> */}
                {
                    elements.map((el, index) => {
                        return <SliderSmallElement key={`SliderSmallElement_${index}`} el={el} />
                    })
                }
            </div>
        </div>
    )
};
export default SliderSmall