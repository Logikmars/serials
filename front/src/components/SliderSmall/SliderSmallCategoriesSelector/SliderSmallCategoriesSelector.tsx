import React, { useState } from 'react';
// import './SliderSmallCategoriesSelector.scss';
interface Props {
    category: string;
    setcategory: (tab: string) => void;
}

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

const SliderSmallCategoriesSelector: React.FC<Props> = ({ category, setcategory }) => {

    const [show, setshow] = useState(false);

    return (
        <div className='SliderSmallCategoriesSelector'>
            <div className='SliderSmallCategoriesSelector_value' onClick={() => setshow(!show)}>
                {category ? category : 'Categories'} <img src="/img/icons/burger.svg" alt="" />
            </div>
            <div className='SliderSmallCategoriesSelector_list_wrapper_wrapper'>
                <div className='SliderSmallCategoriesSelector_list_wrapper free_img'>
                    <div className={`SliderSmallCategoriesSelector_list ${show && 'SliderSmallCategoriesSelector_list_show'} `}>
                        {
                            (category === 'Categories' || category === 'Genre') &&
                            genre.map((category, index) => {
                                return <div key={`catSelector-${index}`} className='SliderSmallCategoriesSelector_element' onClick={() => {
                                    setcategory(category)
                                    setshow(false)
                                }}>
                                    {category}
                                </div>
                            })
                        }
                        {
                            category === 'Air date' &&
                            date.map((category, index) => {
                                return <div key={`catSelector-${index}`} className='SliderSmallCategoriesSelector_element' onClick={() => {
                                    setcategory(category)
                                    setshow(false)
                                }}>
                                    {category}
                                </div>
                            })
                        }
                        {
                            category === 'Language' &&
                            language.map((category, index) => {
                                return <div key={`catSelector-${index}`} className='SliderSmallCategoriesSelector_element' onClick={() => {
                                    setcategory(category)
                                    setshow(false)
                                }}>
                                    {category}
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SliderSmallCategoriesSelector