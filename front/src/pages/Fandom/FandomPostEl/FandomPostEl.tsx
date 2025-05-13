import React from 'react';
import './FandomPostEl.scss';
import LogoWhite from '../../../components/LogoWhite/LogoWhite';
import SignInBtn from '../../../components/SignInBtn/SignInBtn';
import ShareDots from '../../../components/ShareDots/ShareDots';
import FandomCommentEl from '../FandomCommentEl/FandomCommentEl';
interface Props {
    el:{
        name: string;
        date: Date;
        title: string;
        likes: number;
        comments: number;
        img: string;
        commentsEl?: {
            name: string;
            date: Date;
            text: string;
        }
    }
}
const FandomPostEl: React.FC<Props> = ({ el }) => {

    const diffMs = Date.now() - +el.date;
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);

    const timeAgo =
        diffMinutes < 60
            ? `${diffMinutes} mins ago`
            : `${diffHours} hr. ago`;

    return (
        <div className='FandomPostEl brad_25 gap_s'>
            <div className='FandomPostEl_header pa_xxxs gap_xs'>
                <div className='FandomPostEl_header_left fcc gap_xs ffar fs_xs'>
                    <LogoWhite />
                    {el.name}
                    <div className='FandomPostEl_header_left_round brad_50'></div>
                    <div className='FandomPostEl_header_left_date'>
                        {timeAgo}
                    </div>
                </div>
                <div className='FandomPostEl_header_right fcc gap_xs'>
                    <SignInBtn title='Join'/>
                    <ShareDots />
                </div>
            </div>
            <div className='FandomPostEl_title fcc ffar fs_s'>
                {el.title}
            </div>
            <div className='FandomPostEl_post brad_25'>
                <div className='FandomPostEl_post_bg free_img'>
                    <img src={el.img} alt="" className='FandomPostEl_post_bg_img brad_25'/>
                </div>
                <div className='FandomPostEl_post_content'>
                    <img src={el.img} alt="" className='FandomPostEl_post_content_img'/>
                </div>
            </div> 
            <div className='FandomPostEl_nav fcc'>
                <div className='FandomPostEl_nav_likes pa_m brad_25 fcc gap_xxxs ffar fs_xs'>
                    <div className='FandomPostEl_nav_likes_img'>
                        <img src="/img/icons/heart.svg" alt="" />
                    </div>
                    {el.likes}k 
                </div>
                <div className='FandomPostEl_nav_likes FandomPostEl_nav_el fcc pa_m brad_25 gap_xxxs ffar fs_xs'>
                    <div className='FandomPostEl_nav_likes_img FandomPostEl_nav_comments_img'>
                        <img src="/img/icons/comments.svg" alt="" />
                    </div>
                    {el.comments}k
                </div>
                <div className='FandomPostEl_nav_likes FandomPostEl_nav_el fcc pa_m brad_25 gap_xxxs ffar fs_xs'>
                    <div className='FandomPostEl_nav_likes_img FandomPostEl_nav_comments_img'>
                        <img src="/img/icons/shareArrow.svg" alt="" />
                    </div>
                        Share
                </div>
            </div>
            <div className='FandomPostEl_line'></div>
            <div className='FandomPostEl_comments'>
                {el.commentsEl && <FandomCommentEl el={el.commentsEl} />}
            </div>
        </div>
    )
};
export default FandomPostEl