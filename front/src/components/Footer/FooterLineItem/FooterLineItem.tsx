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
        <div className='Footer_items_about gap_m'>
            <h2 className='Footer_items_about_title ffab fs_m'>
                {title}
            </h2>
            <a href="#" className='ffar fs_xs'>{firstel}</a>
            <a href="#" className='ffar fs_xs'>{secel}</a>
            <a href="#" className='ffar fs_xs'>{thirdel}</a>
        </div>
    )
};
export default FooterLineItem