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
        <div className='Register container fcc brad_25'>
            <div className='Register_wrapper brad_25'>
                <Link className='Register_close' to={'/'}>
                    <img src="/img/icons/close.svg" alt="" />
                </Link>
                <div className='Register_content gap_xl fcc'>
                    <div className='Register_logo fcc gap_xs'>
                        <div className='Register_logo_img brad_15'></div>
                        <div className='Register_logo_title ffab fs_m'>
                            LookTwice
                        </div>
                    </div>
                    <div className='Register_btns fcc gap_xs'>
                        <RegisterBtn onclick={setRegister} isregister={activeTab} value='reg' />
                        <RegisterBtn onclick={setLogIn} isregister={activeTab} value='log' />
                    </div>
                    <div className='Register_form fcc gap_s'>
                        <RegisterInput title='Login' />
                        <RegisterInput title='Password' isPassword/>
                        {
                            activeTab === 'reg' && <RegisterInput title='Confirm password' isPassword/>
                        }
                        <RegisterBtn value={activeTab} formBtn/>
                    </div>
                    <div className='Register_line fcc'>
                        or
                    </div>
                    <div className='Register_method fcc gap_s'>
                        {Array(3)
                        .fill(0)
                        .map((_, index) => {
                        return <div className='Register_method_ico fcc brad_15 pa_xl' key={`Register_method_ico_${index}`}>
                            <img src="/img/icons/appleLogIn.svg" alt="" />
                        </div>
                        })}
                    </div>
                    <div className='Register_agreement fs_xs'>
                        By continuing, I agree to the <a href="" className='Register_agreement_link'>Service Agreement</a> and <a href="" className='Register_agreement_link'>Privacy Policy.</a>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Register