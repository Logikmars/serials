import React from 'react';
import './Arrow.scss';

interface Props {
    right?: boolean;
    bigWidth?: boolean;
    bigHeight?: boolean;
}

const Arrow: React.FC<Props> = ({ right, bigWidth, bigHeight }) => {
    const classNames = [
        'Arrow',
        bigWidth ? 'Arrow_bigWidth' : '',
        bigHeight ? 'Arrow_bigHeight' : ''
    ].filter(Boolean).join(' ');

    const imgClassNames = [
        'Arrow__img',
        right ? 'Arrow__img_right' : ''
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames}>
            <img className={imgClassNames} src="/img/icons/arrow.svg"/>
        </div>
    );
};

export default Arrow;
