import React, { useState } from 'react';
import './Stories.scss';
import StoriesElement from './StoriesElement/StoriesElement';
import { Link } from 'react-router-dom'

interface Props {
    title: string;
}
const Stories: React.FC<Props> = ({ title }) => {

    const [currentSlide, setcurrentSlide] = useState(0);

    const storiesElements = [
        {
            img: "/img/stories/stories1.png",
            isSeen: true
        },
    ]

    return (
        <div className='Stories container'>
            <div className='Stories_header'>
                <h2 className='Stories_title' >
                    {title}
                </h2>
            </div>

            <div className='Stories_slider'>
                {
                    storiesElements.map((el, index) => {
                        return <div className='Stories_slider_element free_img'
                            style={{
                                // transform: `translate(${-(currentSlide - 1.5 - index + 3) * 250}px, 0px)`,
                                opacity: currentSlide + 4 - index > 0
                                    ? currentSlide - 1 - index < 0
                                        ? 1
                                        : 0
                                    : 0
                            }}
                        >
                            <Link to='/stories'>
                                {/* <img src={el.img} alt="" /> */}
                                <StoriesElement key={`StoriesElement_${index}`} el={el} />
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    )
};
export default Stories