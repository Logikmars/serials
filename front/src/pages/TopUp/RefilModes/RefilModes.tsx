import React from 'react';
import './RefilModes.scss';

interface Mode {
    title: string
    text: string
    price: number
}

interface Props {
    el: Mode;
}
const RefilModes: React.FC<Props> = ({ el }) => {
    return (
        <div className='RefilModes'>
            <div className='RefilModes_info'>
                {el.title}
                <div className='RefilModes_info_text'>
                    {el.text}
                </div>
            </div>
            <div className='RefilModes_price'>
                {el.price}$
            </div>
        </div>
    )
};
export default RefilModes