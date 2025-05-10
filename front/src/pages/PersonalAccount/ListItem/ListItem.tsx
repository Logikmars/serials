import React from 'react';
import './ListItem.scss';
interface Props {
    img: string;
    title: string;
    index: number;
    isActive: boolean;
    onClick: () => void;
}
const ListItem: React.FC<Props> = ({ img, title, index, isActive, onClick }) => {

    return (
        <div
        className={`
            ListItem 
            ${index === 1 ? 'ListItem_second' : ''} 
            ${isActive ? 'ListItem_active' : ''}
        `}
         onClick={onClick}
        >
            <img src={img} alt="" />
            {title}
        </div>
    )
};
export default ListItem