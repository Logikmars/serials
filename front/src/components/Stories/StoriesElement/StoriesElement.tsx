import React from 'react';
import './StoriesElement.scss';
interface Props {
    el: {
        img?: string;
        isSeen?: boolean;
    }
}
const StoriesElement: React.FC<Props> = ({ el }) => {
    return (
        <div className='StoriesElement'>
            {el.isSeen ? (
                <div className="StoriesElement_border">
                    <div className='StoriesElement_border_black'>
                        <img src={el.img} alt="" />
                    </div>
                </div>
            ) : (
                <img src={el.img} alt="" />
            )}
        </div>
    );
};
export default StoriesElement