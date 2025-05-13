import React, { useState } from 'react';
import './GenreFilters.scss';
import GenreFilterInput from './GenreFilterInput/GenreFilterInput';
import DropDown from '../../../UI/DropDown/DropDown';
import { useNavigate } from 'react-router-dom';

const GenreFilters: React.FC = () => {

    const [category, setcategory] = useState('');
    const navigate = useNavigate();

    const genre = [
    'Love',
    'Friendship',
    'Detective',
    'Dorama',
    'Western',
    'Sci-fi',
    ]

    const date = [
        '01.01.2024',
        '01.01.2024',
        '01.01.2024',
        '01.01.2024',
        '01.01.2024',
        '01.01.2024',
    ]

    const language = [
        'En',
        'Ge',
        'Ta',
        'Ru',
        'Ua'
    ]

    return (
        <div className='GenreFilters'>
            <DropDown list={genre} select={(el) => { navigate(`/categories/${el}`) }} selected={category} defaultValue='Genre'/>
            <DropDown list={date} select={(el) => { navigate(`/categories/${el}`) }} selected={category} defaultValue='Air date'/>
            <DropDown list={language} select={(el) => { navigate(`/categories/${el}`) }} selected={category} defaultValue='Language'/>
            <GenreFilterInput />
        </div>
    )
};
export default GenreFilters