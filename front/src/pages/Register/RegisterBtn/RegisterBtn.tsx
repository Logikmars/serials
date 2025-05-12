import React from 'react';
import './RegisterBtn.scss';
interface Props {
    onclick?: () => void;
    isregister?: string;
    value: string;
    formBtn?: boolean;
}

const RegisterBtn: React.FC<Props> = ({ onclick, isregister, value, formBtn,}) => {
    return (
        <div
            className={`RegisterBtn ${isregister === value ? 'RegisterBtn_active' : ''} ${formBtn && 'RegisterBtn_form'}`}
            onClick={onclick}
        >
            {
                value === 'reg' ? 'Register' : 'Sign in'
            }
        </div>
    );
};

export default RegisterBtn