import React, { useState } from 'react';
import './GenreFilters.scss';
import SliderSmallCategoriesSelector from '../../../components/SliderSmall/SliderSmallCategoriesSelector/SliderSmallCategoriesSelector';
import GenreFilterInput from './GenreFilterInput/GenreFilterInput';
const GenreFilters: React.FC = () => {

    const [category, setcategory] = useState('');

    return (
        <div className='GenreFilters'>
            <SliderSmallCategoriesSelector category='Genre' setcategory={setcategory}/>
            <SliderSmallCategoriesSelector category='Air date' setcategory={setcategory}/>
            <SliderSmallCategoriesSelector category='Language' setcategory={setcategory}/>
            <GenreFilterInput />
        </div>
    )
};
export default GenreFilters