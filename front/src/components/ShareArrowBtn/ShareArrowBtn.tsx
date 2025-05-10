import React from 'react';
import './ShareArrowBtn.scss';
interface Props {
    noText: boolean;
}
const ShareArrowBtn: React.FC<Props> = ({ noText }) => {
    return (
        <div className='ShareArrowBtn'>
            <div className='ShareArrowBtn_img'>
                <img src="/img/icons/shareArrow.svg" alt="" />
            </div>
            {
                noText ? '' : 'Share'
            }
        </div>
    )
};
export default ShareArrowBtn
