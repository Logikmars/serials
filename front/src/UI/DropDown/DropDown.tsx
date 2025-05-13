import React, { useState } from 'react';
import './DropDown.scss';
interface Props {
    list: string[];
    selected: string;
    select: (element: string) => void;
    defaultValue?: string;
    icon?: string;
}



const DropDown: React.FC<Props> = ({ list, selected, select, defaultValue = '', icon = '' }) => {

    const [show, setshow] = useState(false);

    return (
        <div className='DropDown' onClick={() => setshow(!show)}>
            <div className='DropDown_value fs_s pa_m brad_25' >
                {selected ? selected : defaultValue ? defaultValue : selected}
                <img src={`/img/icons/${icon ? icon : 'burger'}.svg`} alt="" />
            </div>
            <div className='DropDown_list_wrapper_wrapper'>
                <div className='DropDown_list_wrapper free_img'>
                    <div className={`DropDown_list ${show && 'DropDown_list_show'} `}>
                        {list.map((el, index) => {
                            return <div key={`catSelector-${index}`} className='DropDown_element fs_s pa_m' onClick={() => {
                                select(el)
                                setshow(false)
                            }}>
                                {el}
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
};
export default DropDown