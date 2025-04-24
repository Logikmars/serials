import React, { useState } from 'react';
import './SliderBig.scss';
import SliderBigElement from './SliderBigElement';
import { ISliderBigElement } from './ISliderBigElement';

interface Props {
    property?: string;

}

const elementsRAW: ISliderBigElement[] = [
    {
        src: '/img/largePreviews/0.webp',
        title: 'The Empire Strikes Back',
        description: 'In the heart of Cloud City, destiny clashes with legacy. As Luke faces Darth Vader in a duel of light and shadow, secrets are revealed and paths are changed forever. One choice. One truth. The galaxy will never be the same.'
    },
    {
        src: '/img/largePreviews/1.png',
        title: 'The Empire Strikes Back',
        description: 'In the heart of Cloud City, destiny clashes with legacy. As Luke faces Darth Vader in a duel of light and shadow, secrets are revealed and paths are changed forever. One choice. One truth. The galaxy will never be the same.'
    },
]

const elements = [elementsRAW[elementsRAW.length - 1], ...elementsRAW, elementsRAW[0]]

const SliderBig: React.FC<Props> = ({ property }) => {

    const [currentSlide, setcurrentSlide] = useState(1);

    const [loop, setloop] = useState(false);
    const [wantToLoop, setwantToLoop] = useState(false);


    const handleNext = () => {
        if (!wantToLoop) {
            const prev = currentSlide;
            if (prev + 1 > elements.length - 2) {
                setwantToLoop(true)
                setTimeout(() => {
                    setloop(true)
                }, 600);
                setTimeout(() => {
                    setcurrentSlide(1)
                }, 650);
                setTimeout(() => {
                    setloop(false)
                    setwantToLoop(false)
                }, 700);
            }
            setcurrentSlide(prev => prev + 1)
        }
    }
    const handlePrev = () => {
        if (!wantToLoop) {
            const prev = currentSlide;
            if (prev - 1 < 1) {
                setwantToLoop(true)
                setTimeout(() => {
                    setloop(true)
                }, 600);
                setTimeout(() => {
                    setcurrentSlide(elements.length - 2)
                }, 650);
                setTimeout(() => {
                    setloop(false)
                    setwantToLoop(false)
                }, 700);
            }
            setcurrentSlide(prev => prev - 1)
        }
    }



    return (
        <div className='SliderBig'>
            <div className='SliderBig_top'></div>
            <div className='SliderBig_elements SliderElementWidth SliderElementHeight'>
                {elements.map((el, index) => {
                    return <SliderBigElement
                        key={index}
                        index={index}
                        element={el}
                        currentSlide={currentSlide}
                        loop={loop}
                    />
                })}
            </div>
            <div className='SliderBig_buttons SliderElementWidth free_img'>
                <div className='SliderBig_button SliderBig_button_left' onClick={handlePrev}>
                    <img src="/img/icons/arrow.svg" alt="" />
                </div>
                <div className='SliderBig_button SliderBig_button_right' onClick={handleNext}>
                    <img src="/img/icons/arrow.svg" alt="" />
                </div>
            </div>

        </div>
    )
};
export default SliderBig