import React from 'react';
import './BigDarkGrayBtn.scss';
interface Props {
title: string;
onClick: () => void;
}
const BigDarkGrayBtn: React.FC<Props> = ({ title, onClick }) => {
    return (
    <div className='BigDarkGrayBtn fcc brad_25 ffab fs_s pa_l' onClick={onClick}>
        {title}
    </div>
    )
};
export default BigDarkGrayBtn