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
        <div className='RefilModes brad_25'>
            <div className='RefilModes_info brad_25 pa_xl ffab fs_m'>
                {el.title}
                <div className='RefilModes_info_text ffar fs_s'>
                    {el.text}
                </div>
            </div>
            <div className='RefilModes_price fcc ffar fs_l'>
                {el.price}$
            </div>
        </div>
    )
};
export default RefilModes