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
        </div>
    )};
export default FandomCommentEl