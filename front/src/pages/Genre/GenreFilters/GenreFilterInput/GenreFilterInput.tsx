import React from 'react';
import './GenreFilterInput.scss';
import SignInBtn from '../../../../components/SignInBtn/SignInBtn';
const GenreFilterInput: React.FC = () => {
    return (
        <div className='GenreFilterInput'>
            <div className='GenreFilterInput_input_wrapper'>
                <img src="/img/icons/glass.svg" alt="" />
                <input type="text" placeholder='Enter what you want to find'/>
            </div>
            <SignInBtn title='Search' />
        </div>
    )
};
export default GenreFilterInput