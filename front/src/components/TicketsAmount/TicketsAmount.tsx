import React from 'react';
import './TicketsAmount.scss';
interface Props {
ticketsAmount: number;
}
const TicketsAmount: React.FC<Props> = ({ ticketsAmount }) => {
    return (
        <div className='PersonalAccount_leftinfo_balance_tickets'>
            <div className='PersonalAccount_leftinfo_balance_tickets_logo'>
                <div className='PersonalAccount_leftinfo_balance_tickets_logo_left'></div>
                    <div className='PersonalAccount_leftinfo_balance_tickets_logo_center'>
                        <img src="/img/icons/LIcons.svg" alt="" />
                    </div>
                <div className='PersonalAccount_leftinfo_balance_tickets_logo_right'></div>
            </div>
            <div className='PersonalAccount_leftinfo_balance_tickets_amount'>
            {ticketsAmount} tickets
            </div>
        </div>
    )
};
export default TicketsAmount