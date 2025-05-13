import React from 'react';
import './SignInBtn.scss';
import { Link } from 'react-router-dom';
interface Props {
    title?: string;
}
const SignInBtn: React.FC<Props> = ({ title }) => {
    return (
        <Link className={`Header_right_signin ${title === 'Search' && 'Header_right_signin_big'} pa_xs fcc fs_s ffar brad_50`} to={title ? '' : '/register'}>
            {title ?? 'Sign In'}
        </Link>
    )};
export default SignInBtn