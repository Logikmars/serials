import React from 'react';
import './BigDarkGrayBtn.scss';
interface Props {
title: string;
}
const BigDarkGrayBtn: React.FC<Props> = ({ title }) => {
    return (
    <div className='BigDarkGrayBtn'>
        {title}
    </div>
    )
};
export default BigDarkGrayBtn