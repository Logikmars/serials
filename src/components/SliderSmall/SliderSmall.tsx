import React, { useEffect, useState } from 'react';
import './SliderSmall.scss';
import SliderSmallElement from './SliderSmallElement';
import SliderSmallCategoriesSelector from './SliderSmallCategoriesSelector/SliderSmallCategoriesSelector';
import Arrow from '../Arrow/Arrow';


interface Props {
    title?: string;
}

const elementsRAW = [
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
    {
        img: '/img/trends/1.webp',
        // progress: 77,
        // actionType: 'continue',
        // effect: 'fire'
    },
    {
        img: '/img/trends/2.webp',
        // actionType: 'trailer',
        // progress: 88,
        // effect: 'heart'
    },
]


const SliderSmall: React.FC<Props> = ({ title }) => {

    const elementsPerSlide = 1
    const [elementsPerScreen, setelementsPerScreen] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 99999) setelementsPerScreen(4)
            if (window.innerWidth < 1300) setelementsPerScreen(3)
            if (window.innerWidth < 950) setelementsPerScreen(2)
            if (window.innerWidth < 650) setelementsPerScreen(1)
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [currentSlide, setcurrentSlide] = useState(elementsRAW.length);
    const [loop, setloop] = useState(false);
    const [wtloop, setwtloop] = useState(false);
    const elements = [...elementsRAW, ...elementsRAW, ...elementsRAW]

    const handleNext = () => {
        if (!wtloop) {
            const prevSlideNumber = currentSlide
            if (prevSlideNumber + elementsPerSlide > (elements.length / 3) * 2) {
                setwtloop(true)
                setTimeout(() => {
                    setloop(true)
                }, 250);
                setTimeout(() => {
                    setcurrentSlide(prev => prev - (elements.length / 3))
                }, 300);
                setTimeout(() => {
                    setloop(false)
                    setwtloop(false)
                }, 350);
            }
            setcurrentSlide(prev => prev + elementsPerSlide)
        }
    }

    const handlePrev = () => {
        if (!wtloop) {
            const prevSlideNumber = currentSlide
            if (prevSlideNumber - elementsPerSlide < (elements.length / 3)) {
                setwtloop(true)
                setTimeout(() => {
                    setloop(true)
                }, 250);
                setTimeout(() => {
                    setcurrentSlide(prev => prev + (elements.length / 3))
                }, 300);
                setTimeout(() => {
                    setloop(false)
                    setwtloop(false)
                }, 350);
            }
            setcurrentSlide(prev => prev - elementsPerSlide)
        }
    }

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
            <div className='SliderSmall_content'>
                <div className='SliderSmall_arrow_wrapper free_img'>
                    {/* <div className='SliderSmall_arrow' onClick={handlePrev}>
                        <img src="/img/icons/arrow.svg" alt="" />
                    </div> */}
                    <Arrow bigHeight onClick={handlePrev}/>
                </div>

                <div className='SliderSmall_slider'>
                    {
                        elements.map((el, index) => {
                            const isThisVisible = currentSlide + elementsPerScreen - index > 0
                                ? currentSlide - 1 - index < 0
                                    ? true
                                    : false
                                : false
                            return <div className='SliderSmall_slider_element free_img' style={{
                                transition: loop ? 'none' : 'transform 200ms, opacity 200ms',
                                transform: `translate(${-(currentSlide - ((elementsPerScreen - 1) / 2) - index + (elementsPerScreen - 1)) * 280}px, 0px)`,
                                opacity: isThisVisible ? 1 : 0,
                                pointerEvents: isThisVisible ? 'all' : 'none'
                            }}>
                                <SliderSmallElement key={`SliderSmallElement_${index}`} el={el} />
                            </div>
                        })
                    }
                </div>
                <div className='SliderSmall_arrow_wrapper SliderSmall_arrow_wrapper_right free_img'>
                    {/* <div className='SliderSmall_arrow SliderSmall_arrow_right' onClick={handleNext}>
                        <img src="/img/icons/arrow.svg" alt="" />
                    </div> */}
                    <Arrow bigHeight right onClick={handleNext}/>
                </div>
            </div>
        </div>
    )
};
export default SliderSmall