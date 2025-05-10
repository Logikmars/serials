import React, { useEffect, useState } from 'react';
import './SliderBig.scss';
import SliderBigElement from './SliderBigElement';
import { ISliderBigElement } from './ISliderBigElement';

interface Props {
    property?: string;

}

const elementsRAW: ISliderBigElement[] = [
    {
        src: '/img/largePreviews/0.webp',
        title: 'WWE THIS SUNDAY',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat veniam non, alias aperiam voluptas eos repellat ipsam eligendi illo laborum iste accusantium nostrum, inventore commodi magnam eius nesciunt placeat.'
    },

    {
        src: '/img/largePreviews/0.webp',
        title: 'WWE THIS SUNDAY',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat veniam non, alias aperiam voluptas eos repellat ipsam eligendi illo laborum iste accusantium nostrum, inventore commodi magnam eius nesciunt placeat.'
    },
    {
        src: '/img/largePreviews/0.webp',
        title: 'WWE THIS SUNDAY',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat veniam non, alias aperiam voluptas eos repellat ipsam eligendi illo laborum iste accusantium nostrum, inventore commodi magnam eius nesciunt placeat.'
    },
]

const elements = [elementsRAW[elementsRAW.length - 1], ...elementsRAW, elementsRAW[0]]

const SliderBig: React.FC<Props> = ({ property }) => {

    console.log(property);

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

    const [maxWidth, setMaxWidth] = useState(Math.min(1600, window.innerWidth));

    useEffect(() => {
        const handleResize = () => setMaxWidth(Math.min(1600, window.innerWidth));
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);




    return (
        <div className='SliderBig'>
            <div className='SliderBig_top'></div>
            <div className='SliderBig_elements  SliderElementHeight' style={{
                maxWidth: maxWidth,
                minWidth: maxWidth,
            }}>
                {elements.map((el, index) => {

                    return <div key={index} className='SliderBigElement_wrapper free_img' style={{
                        transform: `translate(${(index - currentSlide) * maxWidth}px, 0px)`,
                        transition: loop ? 'none' : 'transform 500ms, opacity 500ms',
                        opacity: Math.abs(index - currentSlide) > 0 ? 0 : 1
                    }}>
                        <SliderBigElement
                            element={el}
                        />
                    </div>
                })}
            </div>
            <div className='SliderBig_buttons container free_img'>
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