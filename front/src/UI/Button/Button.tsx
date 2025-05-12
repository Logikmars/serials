import React from 'react';
import './Button.scss';
interface Props {
    text: string | undefined;
    size?: string;
    color?: string;
}
const Button: React.FC<Props> = ({ text = 'Text', size = 'm', color = 'pink' }) => {
    return (
        <div className={`Button Button_size_${size}  Button_color_${color} `}>
            {text === 'Watch' && <img src="/img/icons/play.svg" alt="watch-decor" />}
            {text}
        </div>
    )
};
export default Button