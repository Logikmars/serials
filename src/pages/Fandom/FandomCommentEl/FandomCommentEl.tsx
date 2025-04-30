import React from 'react';
import './FandomCommentEl.scss';
import LogoWhite from '../../../components/LogoWhite/LogoWhite';
import SignInBtn from '../../../components/SignInBtn/SignInBtn';
import ShareDots from '../../../components/ShareDots/ShareDots';
interface Props {
    el:{
        name: string;
        date: Date;
        text: string;
    }
}
const FandomCommentEl: React.FC<Props> = ({ el }) => {

    const diffMs = Date.now() - +el.date;
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);

    const timeAgo =
        diffMinutes < 60
            ? `${diffMinutes} mins ago`
            : `${diffHours} hr. ago`;

    return (
        <div className='FandomCommentEl'>
            <div className='FandomCommentEl_header'>
                <div className='FandomCommentEl_header_left'>
                    <LogoWhite />
                    {el.name}
                    <div className='FandomCommentEl_round'></div>
                    <div className='FandomCommentEl_header_left_time'>
                        {timeAgo}
                    </div>
                </div>
                <div className='FandomCommentEl_header_right'>
                    <SignInBtn title='Join'/>
                    <ShareDots />
                </div>
            </div>
            <div className='FandomCommentEl_text'>
                {el.text}
            </div>
            <div className='FandomCommentEl_nav'>
                <div className='FandomCommentEl_nav_left'>
                    <div className='FandomCommentEl_nav_left_plus'>
                        <span className='FandomCommentEl_nav_left_plus_span'></span>
                    </div>
                    <div className='FandomCommentEl_nav_left_text'>
                        12 more replies
                    </div>
                </div>
                <div className='FandomCommentEl_nav_right'>
                    <div className='FandomCommentEl_nav_right_likes'>
                        <img src="/img/icons/heart.svg" alt="" className='FandomCommentEl_nav_right_likes_img'/>
                        23k
                    </div>
                    <div className='FandomCommentEl_nav_right_likes'>
                        <img src="/img/icons/comments.svg" alt="" />
                        Reply
                    </div>
                </div>
            </div>
        </div>
    )};
export default FandomCommentEl