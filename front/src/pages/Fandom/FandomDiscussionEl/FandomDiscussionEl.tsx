import React from 'react';
import './FandomDiscussionEl.scss';
import LogoWhite from '../../../components/LogoWhite/LogoWhite';
interface Props {
    name: string;
    members: number;
}
const FandomDiscussionEl: React.FC<Props> = ({ name, members }) => {
    return (
        <div className='FandomDiscussionEl fcc gap_s'>
            <LogoWhite />
            <div className='FandomDiscussionEl_info fcc'>
                <div className='FandomDiscussionEl_info_name ffar fs_xs'>{name}</div>
                <div className='FandomDiscussionEl_info_members ffar fs_xs'>{members} members</div>
            </div>
        </div>
    )
};
export default FandomDiscussionEl