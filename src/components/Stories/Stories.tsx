import React, { useEffect, useState } from 'react';
import './Stories.scss';
import StoriesElement from './StoriesElement/StoriesElement';
import { Link } from 'react-router-dom'
import Arrow from '../Arrow/Arrow';

interface Props {
    title: string;
}

const elementsRAW = [
    {
        img: "/img/stories/stories1.png",
        isSeen: true
    },
    {
        img: "/img/stories/stories1.png",
        isSeen: true
    },
    {
        img: "/img/stories/stories1.png",
        isSeen: true
    },
    {
        img: "/img/stories/stories1.png",
        isSeen: true
    },
    {
        img: "/img/stories/stories1.png",
        isSeen: true
    },
    {
        img: "/img/stories/stories1.png",
        isSeen: true
    },
]

const Stories: React.FC<Props> = ({ title }) => {

    useEffect(() => {
        // заглушка шоб не ругалос
        setcurrentSlide(0)
    }, [])

    const elementsPerSlide = 1;
    const [elementsPerScreen, setelementsPerScreen] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 99999) setelementsPerScreen(5)
            if (window.innerWidth < 1300) setelementsPerScreen(4)
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
    return (
        <div className='Stories container'>
            <div className='Stories_header'>
                <h2 className='Stories_title' >
                    {title}
                </h2>
            </div>
            <div className='Stories_content'>
                <div className='Stories_btn_wrapper free_img'>
                    <Arrow bigHeight onClick={handlePrev} />
                </div>
                <div className='Stories_slider'>
                    {
                        elements.map((el, index) => {
                            const isThisVisible = currentSlide + elementsPerScreen - index > 0
                                ? currentSlide - 1 - index < 0
                                    ? true
                                    : false
                                : false
                            return (
                                <div
                                    key={`StoriesElement_${index}`}
                                    className='Stories_slider_element free_img'
                                    style={{
                                        transition: loop ? 'none' : 'transform 200ms, opacity 200ms',
                                        transform: `translate(${-(currentSlide - ((elementsPerScreen - 1) / 2) - index + (elementsPerScreen - 1)) * 200}px, 0px)`,
                                        opacity: isThisVisible ? 1 : 0,
                                        pointerEvents: isThisVisible ? 'all' : 'none'
                                    }}
                                >
                                    <Link to='/stories'>
                                        <StoriesElement el={el} />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='Stories_btn_wrapper_right free_img'>
                    <Arrow bigHeight right onClick={handleNext} />
                </div>
            </div>
        </div>
    )
};
export default Stories