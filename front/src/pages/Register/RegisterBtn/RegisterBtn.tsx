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
            className={`RegisterBtn fcc pa_s brad_30 ffar fs_s ${isregister === value ? 'RegisterBtn_active' : ''} ${formBtn && 'RegisterBtn_form pa_l'}`}
            onClick={onclick}
        >
            {
                value === 'reg' ? 'Register' : 'Sign in'
            }
        </div>
    );
};

export default RegisterBtn