import React, { useEffect, useState } from 'react';
import './Films.scss';
// import SliderSmallCategoriesSelector from './SliderSmallCategoriesSelector/SliderSmallCategoriesSelector';
import Slider from '../Slider/Slider';
import DropDown from '../../UI/DropDown/DropDown';
import { useNavigate } from 'react-router-dom';

interface Props {
    title?: string;
}

const elements = [
    {
        img: '/img/trends/0.webp',
        progress: 11,
        actionType: 'loveIt',
        releaseInSec: 1000,
        effect: 'heart'
    },
    {
        img: '/img/trends/1.webp',
        progress: 22,
        actionType: 'continue',
        releaseInSec: 1000,
    },
    {
        img: '/img/trends/2.webp',
        progress: 33,
        actionType: 'trailer',
    },
    {
        img: '/img/trends/0.webp',
        progress: 44,
        actionType: 'loveIt',
        effect: 'heart',
        releaseInSec: 1
    },
    {
        img: '/img/trends/1.webp',
        progress: 55,
        actionType: 'continue',
        effect: 'fire'
    },
    {
        img: '/img/trends/2.webp',
        actionType: 'trailer',
        progress: 66,
        effect: 'heart'
    },
]

const categories = [
    'Love',
    'Friendship',
    'Detective',
    'Dorama',
    'Western',
    'Sci-fi',
]

const Films: React.FC<Props> = ({ title }) => {

    const [category, setcategory] = useState('');

    const navigate = useNavigate();

    return (
        <div className='Films'>
            <div className='Films_header container'>
                <div className='Films_header_title fs_l fs_w' >
                    {title}
                </div>
                <div className='Films_header_filter' >
                    <DropDown
                        list={categories}
                        select={(el) => { navigate(`/categories/${el}`) }}
                        selected={category}
                        defaultValue='Category'
                    />
                </div>
            </div >

            <Slider content={elements} contentType='films' />


        </div >
    )
};

export default Films