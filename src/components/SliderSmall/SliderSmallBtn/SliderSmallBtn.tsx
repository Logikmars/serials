import React from 'react';
import './SliderSmallBtn.scss';

interface Props {
    type: string;
}
const SliderSmallBtn: React.FC<Props> = ({ type }) => {
    return (
        <div className={`SliderSmallBtn SliderSmallBtn_${type}`}>
            {type}
        </div>
    )
};
export default SliderSmallBtn