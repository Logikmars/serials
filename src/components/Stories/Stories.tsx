import React, { useEffect, useState } from 'react';
import './Stories.scss';
import StoriesElement from './StoriesElement/StoriesElement';
import { Link } from 'react-router-dom'
import Arrow from '../Arrow/Arrow';

interface Props {
    title: string;
}
const Stories: React.FC<Props> = ({ title }) => {

    useEffect(() => {
        // заглушка шоб не ругалос
        setcurrentSlide(0)
    }, [])

        const [elementsPerScreen, setelementsPerScreen] = useState(6);
    
        useEffect(() => {
            const handleResize = () => {
                if (window.innerWidth < 99999) setelementsPerScreen(6)
                if (window.innerWidth < 1300) setelementsPerScreen(4)
                if (window.innerWidth < 950) setelementsPerScreen(2)
                if (window.innerWidth < 650) setelementsPerScreen(1)
            }
            window.addEventListener('resize', handleResize);
            handleResize();
            return () => window.removeEventListener('resize', handleResize);
        }, []);



    const storiesElements = [
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

    const stories = [storiesElements[storiesElements.length - 1], ...storiesElements, storiesElements[0]]

    const [wantToLoop, setwantToLoop] = useState(false);
    const [currentSlide, setcurrentSlide] = useState(storiesElements.length);
    const [loop, setloop] = useState(false);

        const handleNext = () => {
            if (!wantToLoop) {
                const prev = currentSlide;
                if (prev + 1 > stories.length - 2) {
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
                        setcurrentSlide(stories.length - 2)
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
        <div className='Stories container'>
            <div className='Stories_header'>
                <h2 className='Stories_title' >
                    {title}
                </h2>
            </div>

            <div className='Stories_slider'>
                <Arrow bigHeight onClick={handlePrev}/>
                {
                    stories.map((el, index) => {
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
                                    transform: `translate(${-(currentSlide - ((elementsPerScreen - 1) / 2) - index + (elementsPerScreen - 1)) * 164}px, 0px)`,
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
                <Arrow bigHeight right onClick={handleNext}/>
            </div>
        </div>
    )
};
export default Stories