import React from 'react';
import './Stories.scss';
import Slider from '../Slider/Slider';

interface Props {
    title: string;
}

const elements = [
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

    return (
        <div className='Stories container'>
            <div className='Stories_header'>
                <div className='Stories_title fsL fsW' >
                    {title}
                </div>
            </div>
            <Slider content={elements} contentType='stories' />
        </div>
    )
};
export default Stories