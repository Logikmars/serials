import React from 'react';
import './RegisterInput.scss';
interface Props {
    title: string;
    isPassword?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const RegisterInput: React.FC<Props> = ({ title, isPassword, onChange }) => {
    return (
        <input type={`${isPassword ? 'password' : 'email'}`} className='RegisterInput pa_input ffar fs_s brad_50' placeholder={title} onChange={onChange}/>
    )
};
export default RegisterInput