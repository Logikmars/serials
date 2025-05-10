import React, { useState } from 'react';
import './SliderSmall.scss';
import SliderSmallCategoriesSelector from './SliderSmallCategoriesSelector/SliderSmallCategoriesSelector';
import Slider from '../Slider/Slider';


interface Props {
    title?: string;
}

const elements = [
    {
        img: '/img/trends/0.webp',
        progress: 11,
        actionType: 'loveIt',
        releaseInSec: 1000,
        effect: 'heart'
    },
    {
        img: '/img/trends/1.webp',
        progress: 22,
        actionType: 'continue',
        releaseInSec: 1000,
    },
    {
        img: '/img/trends/2.webp',
        progress: 33,
        actionType: 'trailer',
    },
    {
        img: '/img/trends/0.webp',
        progress: 44,
        actionType: 'loveIt',
        effect: 'heart',
        releaseInSec: 1
    },
    {
        img: '/img/trends/1.webp',
        progress: 55,
        actionType: 'continue',
        effect: 'fire'
    },
    {
        img: '/img/trends/2.webp',
        actionType: 'trailer',
        progress: 66,
        effect: 'heart'
    },
]


const SliderSmall: React.FC<Props> = ({ title }) => {

    const [category, setcategory] = useState('');


    return (
        <div className='SliderSmall'>
            <div className='SliderSmall_header container'>
                <div className='SliderSmall_header_title' >
                    {title}
                </div>
                <div className='SliderSmall_header_filter' >
                    <SliderSmallCategoriesSelector
                        category={category}
                        setcategory={setcategory}
                    />
                </div>
            </div>

            <Slider content={elements} contentType='films' />

        </div>
    )
};
export default SliderSmall