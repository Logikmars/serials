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
        <div className='StoriesElement fcc brad_25'>
            {el.isSeen ? (
                <div className="StoriesElement_border fcc brad_30">
                    <div className='StoriesElement_border_black brad_30'>
                        <img src={el.img} alt="" className='brad_25'/>
                    </div>
                </div>
            ) : (
                <img src={el.img} alt="" />
            )}
        </div>
    );
};
export default StoriesElement