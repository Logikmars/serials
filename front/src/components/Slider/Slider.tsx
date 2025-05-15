import React, { useEffect, useState } from 'react';
import './Slider.scss';
import Film from '../Film/Film';
import { Link } from 'react-router-dom';
import StoriesElement from '../Stories/StoriesElement/StoriesElement';
import FandomEl from '../../pages/Fandom/FandomEl/FandomEl';
// import FandomEl from './FandomEl/FandomEl';


interface Props {
    content: any[];
    contentType: 'stories' | 'films' | 'fandom';
}


const Slider: React.FC<Props> = ({ content, contentType }) => {
    const elementsPerSlide = 1
    const [elementsPerScreen, setelementsPerScreen] = useState(4);

    const elementWidths = {
        stories: 180,
        films: 240,
        fandom: 280
    }

    const elementWidth = elementWidths[contentType]


    const elementsPerType: Record<'stories' | 'films' | 'fandom', Record<number, number>> = {
        stories: {
            99999: 7,
            1300: 6,
            1100: 5,
            950: 4,
            750: 3,
            550: 2,
            380: 1,
        },
        films: {
            99999: 5,
            1300: 4,
            1000: 3,
            750: 2,
            550: 1,
        },
        fandom: {
            99999: 4,
            1300: 3,
            950: 2,
            650: 1,
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (contentType === 'stories' || contentType === 'films') {
                const widths = Object.keys(elementsPerType[contentType])
                    .map(Number)
                    .sort((a, b) => a - b);

                for (const w of widths) {
                    if (window.innerWidth < w) {
                        setelementsPerScreen(elementsPerType[contentType][w]);
                        return;
                    }
                }

                setelementsPerScreen(elementsPerType[contentType][99999]);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [contentType]);



    const [currentSlide, setcurrentSlide] = useState(content.length);
    const [loop, setloop] = useState(false);
    const [wtloop, setwtloop] = useState(false);
    const elements = [...content, ...content, ...content]

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


    return (
        <div className='Slider fcc'>
            <div className='Slider_arrow_wrapper free_img'>
                <div className='Slider_arrow brad_50 fcc' onClick={handlePrev}>
                    <img src="/img/icons/arrow.svg" alt="" />
                </div>
            </div>

            <div className={`Slider_content Slider_content_${contentType} fcc`}>
                {
                    elements.map((el, index) => {
                        const isThisVisible = currentSlide + elementsPerScreen - index > 0
                            ? currentSlide - 1 - index < 0
                                ? true
                                : false
                            : false
                        return <div className='Slider_content_element free_img' style={{
                            transition: loop ? 'none' : 'transform 200ms, opacity 200ms',
                            transform: `translate(${-(currentSlide - ((elementsPerScreen - 1) / 2) - index + (elementsPerScreen - 1)) * elementWidth}px, 0px)`,
                            opacity: isThisVisible ? 1 : 0,
                            pointerEvents: isThisVisible ? 'all' : 'none'
                        }}>
                            {
                                contentType === 'films' && <Film key={`Film_${index}`} el={el} />
                            }
                            {
                                contentType === 'stories' && <Link to='/stories'>
                                    <StoriesElement el={el} />
                                </Link>
                            }
                            {
                                contentType === 'fandom' && <FandomEl el={el} />
                            }
                        </div>
                    })
                }
            </div>
            <div className='Slider_arrow_wrapper Slider_arrow_wrapper_right free_img'>
                <div className='Slider_arrow Slider_arrow_right brad_50 fcc' onClick={handleNext}>
                    <img src="/img/icons/arrow.svg" alt="" />
                </div>
            </div>
        </div>
    )
};
export default Slider
