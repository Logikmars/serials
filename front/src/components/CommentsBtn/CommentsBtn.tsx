import React from 'react';
import './CommentsBtn.scss';
interface Props {
    comments: number;
}
const CommentsBtn: React.FC<Props> = ({ comments }) => {
    return (
        <div className='CommentsBtn'>
            <div className='CommentsBtn_img'>
                <img src="/img/icons/comments.svg" alt="" />
            </div>
            {comments}k
        </div>
    )
};
export default CommentsBtn