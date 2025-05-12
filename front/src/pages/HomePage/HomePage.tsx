import React from 'react';
import './HomePage.scss';
import SliderBig from '../../components/SliderBig/SliderBig';
import Stories from '../../components/Stories/Stories';
import Films from '../../components/Films/Films';
interface Props { }
const HomePage: React.FC<Props> = ({ }) => {
    return (
        <div className='HomePage'>
            <SliderBig />
            <Stories title="Stories" />
            <Films title="Features" />
        </div>
    )
};
export default HomePage