import React, { useState } from 'react';
import './Register.scss';
import RegisterBtn from './RegisterBtn/RegisterBtn';
import RegisterInput from './RegisterInput/RegisterInput';
import { Link } from 'react-router-dom';
const Register: React.FC = () => {

    const [activeTab, setactiveTab] = useState('reg');

    const setLogIn = () => {
        setactiveTab('log');
    }

    const setRegister = () => {
        setactiveTab('reg');
    }

    return (
        <div className='Register container'>
            <div className='Register_wrapper'>
                <Link className='Register_close' to={'/'}>
                    <img src="/img/icons/close.svg" alt="" />
                </Link>
                <div className='Register_content'>
                    <div className='Register_logo'>
                        <div className='Register_logo_img'></div>
                        <div className='Register_logo_title'>
                            LookTwice
                        </div>
                    </div>
                    <div className='Register_btns'>
                        <RegisterBtn onclick={setRegister} isregister={activeTab} value='reg' />
                        <RegisterBtn onclick={setLogIn} isregister={activeTab} value='log' />
                    </div>
                    <div className='Register_form'>
                        <RegisterInput title='Login' />
                        <RegisterInput title='Password' isPassword/>
                        {
                            activeTab === 'reg' && <RegisterInput title='Confirm password' isPassword/>
                        }
                        <RegisterBtn value={activeTab} formBtn/>
                    </div>
                    <div className='Register_line'>
                        or
                    </div>
                    <div className='Register_method'>
                        {Array(3)
                        .fill(0)
                        .map((_, index) => {
                        return <div className='Register_method_ico' key={`Register_method_ico_${index}`}>
                            <img src="/img/icons/appleLogIn.svg" alt="" />
                        </div>
                        })}
                    </div>
                    <div className='Register_agreement'>
                        By continuing, I agree to the <a href="" className='Register_agreement_link'>Service Agreement</a> and <a href="" className='Register_agreement_link'>Privacy Policy.</a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Register