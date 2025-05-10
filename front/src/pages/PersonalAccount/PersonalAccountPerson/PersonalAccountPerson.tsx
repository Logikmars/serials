import React from 'react';
import './PersonalAccountPerson.scss';
import SignInBtn from '../../../components/SignInBtn/SignInBtn';
interface Props {
    name: string;
    uid: number;
}
const PersonalAccountPerson: React.FC<Props> = ({ name, uid }) => {
    return (
        <div className='PersonalAccountPerson'>
            <div className='PersonalAccountPerson_wrapper'>
                <div className='PersonalAccountPerson_img'>
                    <img src="/img/header/login.svg" alt="" />
                </div>
                <div className='PersonalAccountPerson_info'>
                    <p className='PersonalAccountPerson_info_name'>{name}</p>
                    <p className='PersonalAccountPerson_info_uid'>UID {uid}</p>
                </div>
            </div>
            <div className='PersonalAccountPerson_signIn'>
                    <SignInBtn />
            </div>
        </div>
    )
};
export default PersonalAccountPerson