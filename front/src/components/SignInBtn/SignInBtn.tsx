import React from 'react';
import './SignInBtn.scss';
interface Props {
    title?: string;
}
const SignInBtn: React.FC<Props> = ({ title }) => {
    return (
        <div className='Header_right_signin'>
            {title ? title : 'Sign In'}
        </div>
    )};
export default SignInBtn