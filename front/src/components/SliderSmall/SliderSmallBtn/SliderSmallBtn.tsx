import React from 'react';
import './SliderSmallBtn.scss';

interface Props {
    type: string;
}
const SliderSmallBtn: React.FC<Props> = ({ type }) => {
    return (
        <div className={`SliderSmallBtn SliderSmallBtn_${type}`}>
            {
                type === 'trailer' && "Trailer watching"
            }
            {
                type === 'loveIt' && "You love it"
            }
            {
                type === 'continue' && "Continue watching!"
            }
        </div>
    )
};
export default SliderSmallBtn