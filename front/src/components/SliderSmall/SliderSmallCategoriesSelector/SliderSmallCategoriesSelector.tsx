import React, { useState } from 'react';
import './SliderSmallCategoriesSelector.scss';
interface Props {
    category: string;
    setcategory: (tab: string) => void;
}

const categories = [
    'Love',
    'Friendship',
    'Detective',
    'Dorama',
    'Western',
    'Sci-fi',
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
                        {categories.map((category, index) => {
                            return <div key={`catSelector-${index}`} className='SliderSmallCategoriesSelector_element' onClick={() => {
                                setcategory(category)
                                setshow(false)
                            }}>
                                {category}
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
};
export default SliderSmallCategoriesSelector