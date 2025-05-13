import React from 'react';
import './BigDarkGrayBtn.scss';
interface Props {
title: string;
}
const BigDarkGrayBtn: React.FC<Props> = ({ title }) => {
    return (
    <div className='BigDarkGrayBtn fcc brad_25 ffab fs_s pa_l'>
        {title}
    </div>
    )
};
export default BigDarkGrayBtn