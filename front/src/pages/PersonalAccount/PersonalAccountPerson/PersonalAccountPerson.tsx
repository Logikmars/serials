import React from 'react';
import './PersonalAccountPerson.scss';
import SignInBtn from '../../../components/SignInBtn/SignInBtn';
interface Props {
    name: string;
    uid: number;
    small?: boolean;
}
const PersonalAccountPerson: React.FC<Props> = ({ name, uid, small }) => {
    return (
        <div className={`PersonalAccountPerson pa_l brad_25 ${small && 'PersonalAccountPerson_small'}`}>
            <div className='PersonalAccountPerson_wrapper fcc gap_s'>
                <div className='PersonalAccountPerson_img pa_logo fcc brad_50'>
                    <img src="/img/header/login.svg" alt="" />
                </div>
                <div className='PersonalAccountPerson_info fcc'>
                    <p className='PersonalAccountPerson_info_name ffab fs_m'>{name}</p>
                    <p className='PersonalAccountPerson_info_uid ffar fs_xxs'>UID {uid}</p>
                </div>
            </div>
            <div className='PersonalAccountPerson_signIn fcc'>
                    <SignInBtn />
            </div>
        </div>
    )
};
export default PersonalAccountPerson