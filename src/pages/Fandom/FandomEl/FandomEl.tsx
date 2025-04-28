import React from 'react';
import './FandomEl.scss';
interface Props {
    el: {
        img: string;
        date: Date;
        title: string;
        description: string;
        name: string;
    }
}
const FandomEl: React.FC<Props> = ({ el }) => {
    return (
        <div className='FandomEl'>
            <div className='FandomEl_img free_img'>
                <img src={el.img} alt="" />
            </div>
            <div className='FandomEl_title free_img'>
                <div className='FandomEl_title_block'>
                    {el.date.toLocaleDateString()}
                    {el.title}
                    {el.description}
                    {el.name}
                </div>
            </div>
        </div>
    )
};
export default FandomEl