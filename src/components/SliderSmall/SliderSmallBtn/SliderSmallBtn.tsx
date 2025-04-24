import React from 'react';
import './SliderSmallBtn.scss';

interface Props {
    title: string;
    type: string;
}
const SliderSmallBtn: React.FC<Props> = ({ title, type }) => {
    return (
        <div className={`SliderSmallBtn SliderSmallBtn_${type}`}>
            {title}
        </div>
    )
};
export default SliderSmallBtn