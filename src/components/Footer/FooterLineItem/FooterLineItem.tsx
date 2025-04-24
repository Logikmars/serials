import React from 'react';
import './FooterLineItem.scss';
interface Props {
    title: string;
    firstel: string;
    secel: string;
    thirdel: string;
}
const FooterLineItem: React.FC<Props> = ({ title, firstel, secel, thirdel }) => {
    return (
        <div className='Footer_items_about'>
            <h2 className='Footer_items_about_title'>
                {title}
            </h2>
            <a href="#">{firstel}</a>
            <a href="#">{secel}</a>
            <a href="#">{thirdel}</a>
        </div>
    )
};
export default FooterLineItem