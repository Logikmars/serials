import React from 'react';
import './ShareArrowBtn.scss';
const ShareArrowBtn: React.FC = () => {
    return (
        <div className='ShareArrowBtn'>
            <div className='ShareArrowBtn_img'>
                <img src="/img/icons/shareArrow.svg" alt="" />
            </div>
            Share
        </div>
    )
};
export default ShareArrowBtn