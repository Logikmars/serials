import React from 'react';
import './LikeBtn.scss';
interface Props {
    likes: number;
}
const LikeBtn: React.FC<Props> = ({ likes }) => {
    return (
        <div className='LikeBtn'>
            <div className='LikeBtn_img'>
                <img src="/img/icons/heart.svg" alt="" />
            </div>
            {likes}k
        </div>
    )
};
export default LikeBtn