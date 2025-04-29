import React, { useEffect, useState } from 'react';
import './Fandom.scss';
import Arrow from '../../components/Arrow/Arrow';
import FandomEl from './FandomEl/FandomEl';
import FandomDiscussionEl from './FandomDiscussionEl/FandomDiscussionEl';
import FandomPostEl from './FandomPostEl/FandomPostEl';
const Fandom: React.FC = () => {

    const elementsRAW = [
        {
            img: '/img/trends/0.webp',
            date: new Date(),
            title: `OMG, I'm Surrounded by Three Princes Full Movie`,
            description: `OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the...`,
            name: 'Guest 783412098'
        }
    ]


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
    
    const discussionsEl = [
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },

        {
            name: 'Guest 783412098',
            members: 67138
        },
        
        {
            name: 'Guest 783412098',
            members: 67138
        },
        
        {
            name: 'Guest 783412098',
            members: 67138
        },
        
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
    ]

    const [visibleDiscussions, setVisibleDiscussions] = useState(11);

    const handleSeeMore = () => {
        setVisibleDiscussions(prev => prev + 11);
    };

    const postEl = [
        {
            name: "Guest 783412098",
            date: new Date(),
            title: "OMG 😭💔 I CAN’T BREATHE",
            likes: 14,
            comments: 14,
            img: '/img/fandom/fandomImg.webp'
        }
    ];

    return (
        <div className='Fandom container'>
            <div className='Fandom_slider'>
                <Arrow bigHeight onClick={handlePrev}/>
                <div className='Fandom_slider_slider'>
                    {
                        elements.map((el, index) => {
                            const isThisVisible = currentSlide + elementsPerScreen - index > 0
                                ? currentSlide - 1 - index < 0
                                    ? true
                                    : false
                                : false
                            return <div className='Fandom_slider_slider_element free_img' style={{
                                transition: loop ? 'none' : 'transform 200ms, opacity 200ms',
                                transform: `translate(${-(currentSlide - ((elementsPerScreen - 1) / 2) - index + (elementsPerScreen - 1)) * 280}px, 0px)`,
                                opacity: isThisVisible ? 1 : 0,
                                pointerEvents: isThisVisible ? 'all' : 'none'
                            }}>
                                <FandomEl el={el}/>
                            </div>
                        })
                    }
                </div>
                <Arrow bigHeight right onClick={handleNext}/>
            </div>
            <div className='Fandom_content'>
                <div className='Fandom_content_nav'>
                    <div className='Fandom_content_nav_item'>
                        Hot 
                        <img src="/img/icons/arrow.svg" alt="" />
                    </div>
                    <div className='Fandom_content_nav_item'>
                        Everywhere
                        <img src="/img/icons/arrow.svg" alt="" />
                    </div>
                </div>
                <div className='Fandom_content_main'>
                    <div className='Fandom_content_balance'></div>
                    <div className='Fandom_content_middle'>
                        {
                            postEl.map((el, index) => (
                                <FandomPostEl el={el} key={`FandomPostEl-${index}`}/>
                            ))
                        }
                    </div>
                    <div className='Fandom_content_left'>
                        <div className='Fandom_content_left_title'>
                            MY DISCUSSIONS
                        </div>
                        <div className='Fandom_content_left_list'>
                        {
                            discussionsEl.slice(0, visibleDiscussions).map((el, index) => (
                                <FandomDiscussionEl name={el.name} members={el.members} key={`FandomDiscussionEl-${index}`} />
                            ))
                        }
                        </div>
                        {
                            visibleDiscussions < discussionsEl.length && (
                            <div className='Fandom_content_left_btn'>
                                <div className='Fandom_content_left_btn_el' onClick={handleSeeMore}>
                                    See more
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )};
export default Fandom