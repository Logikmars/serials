import React from 'react';
import './CalendarDaysEl.scss';
interface Props {
    day: number;
    locked: boolean;
    hot: boolean;
    today: boolean;
}
const CalendarDaysEl: React.FC<Props> = ({ day, locked, hot, today }) => {
    return (
        <div 
            className={`CalendarDaysEl 
                ${today ? 'CalendarDaysEl_today' : ''} 
                ${hot ? 'CalendarDaysEl_hot' : ''} 
                ${locked ? 'CalendarDaysEl_locked' : ''}`}>
            {hot == true && 
                <div className='CalendarDaysEl_hot_decor free_img'>
                    <div className='CalendarDaysEl_hot_decor_border'>
                        <img src="/img/icons/whiteFire.svg" alt="" />
                    </div>
                </div>
            }
            {locked == true &&
                <div className='CalendarDaysEl_locked_decor free_img'>
                    <div className='CalendarDaysEl_locked_decor_border'>
                        <img src="/img/icons/lock.svg" alt="" />
                    </div>
                </div>
            }
            {day === 0 ? 
            <div className='CalendarDaysEl_el'>Trailer</div> 
            : 
            <div className='CalendarDaysEl_el'>{day}</div>
            }
        </div>
    )
};
export default CalendarDaysEl