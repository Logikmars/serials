import React from 'react';
import './Coins.scss';
interface Props {
coinsAmount: number;
}
const Coins: React.FC<Props> = ({ coinsAmount }) => {
    return (
        <div className='PersonalAccount_leftinfo_balance_coins'>
            <div className='PersonalAccount_leftinfo_balance_coins_logo'>
                <img src="/img/icons/LIcons.svg" alt="" />
            </div>
            <div className='PersonalAccount_leftinfo_balance_coins_amount'>
                {coinsAmount} coins
            </div>
        </div>
    )
};
export default Coins