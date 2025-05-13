import React from 'react';
import './Coins.scss';
interface Props {
coinsAmount: number;
}
const Coins: React.FC<Props> = ({ coinsAmount }) => {
    return (
        <div className='PersonalAccount_leftinfo_balance_coins fcc gap_xs'>
            <div className='PersonalAccount_leftinfo_balance_coins_logo pa_smallLogo fcc'>
                <img src="/img/icons/LIcons.svg" alt="" />
            </div>
            <div className='PersonalAccount_leftinfo_balance_coins_amount ffab fs_m'>
                {coinsAmount} coins
            </div>
        </div>
    )
};
export default Coins