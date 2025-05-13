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
        <div className='FandomCommentEl pa_input gap_m'>
            <div className='FandomCommentEl_header fcc gap_xs'>
                <div className='FandomCommentEl_header_left fcc gap_xxxs ffar fs_xs'>
                    <LogoWhite />
                    {el.name}
                    <div className='FandomCommentEl_round brad_50'></div>
                    <div className='FandomCommentEl_header_left_time'>
                        {timeAgo}
                    </div>
                </div>
                <div className='FandomCommentEl_header_right fcc gap_xs'>
                    <SignInBtn title='Join'/>
                    <ShareDots />
                </div>
            </div>
            <div className='FandomCommentEl_text ffar fs_s'>
                {el.text}
            </div>
            <div className='FandomCommentEl_nav fcc'>
                <div className='FandomCommentEl_nav_left fcc gap_xs'>
                    <div className='FandomCommentEl_nav_left_plus fcc brad_50'>
                        <span className='FandomCommentEl_nav_left_plus_span'></span>
                    </div>
                    <div className='FandomCommentEl_nav_left_text ffar fs_xs'>
                        12 more replies
                    </div>
                </div>
                <div className='FandomCommentEl_nav_right fcc'>
                    <div className='FandomCommentEl_nav_right_likes pa_m brad_50 fcc gap_xs ffar fs_xs'>
                        <img src="/img/icons/heart.svg" alt="" className='FandomCommentEl_nav_right_likes_img'/>
                        23k
                    </div>
                    <div className='FandomCommentEl_nav_right_likes pa_m brad_50 fcc gap_xs ffar fs_xs'>
                        <img src="/img/icons/comments.svg" alt="" />
                        Reply
                    </div>
                </div>
            </div>
        </div>
    )};
export default FandomCommentEl