import React from 'react';
import './LoadMore.scss';
interface Props {
    onclick: () => void;
}

const LoadMore: React.FC<Props> = ({ onclick }) => {
return (
    <div className='LoadMore'>
        <div className='LoadMore_btn' onClick={onclick}>
            More movies
        </div>
    </div>
)};
export default LoadMore