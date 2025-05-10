import React from 'react';
import './FandomDiscussionEl.scss';
import LogoWhite from '../../../components/LogoWhite/LogoWhite';
interface Props {
    name: string;
    members: number;
}
const FandomDiscussionEl: React.FC<Props> = ({ name, members }) => {
    return (
        <div className='FandomDiscussionEl'>
            <LogoWhite />
            <div className='FandomDiscussionEl_info'>
                <div className='FandomDiscussionEl_info_name'>{name}</div>
                <div className='FandomDiscussionEl_info_members'>{members} members</div>
            </div>
        </div>
    )
};
export default FandomDiscussionEl