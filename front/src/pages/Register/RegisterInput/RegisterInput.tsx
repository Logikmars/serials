import React from 'react';
import './RegisterInput.scss';
interface Props {
    title: string;
    isPassword?: boolean;
}
const RegisterInput: React.FC<Props> = ({ title, isPassword }) => {
    return (
        <input type={`${isPassword ? 'password' : 'email'}`} className='RegisterInput pa_input ffar fs_s brad_50' placeholder={title}/>
    )
};
export default RegisterInput