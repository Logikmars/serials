import React from 'react';
import './Close.scss';
interface Props {
    onclick: () => void;
}

const Close: React.FC<Props> = ({ onclick }) => {
    return (
        <div className='Close fcc brad_50' onClick={onclick}>
            <img src="/img/icons/close.svg" alt="" />
        </div>
    )
};
export default Close
