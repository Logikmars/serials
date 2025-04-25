import React, { useState } from 'react';
import './PersonalAccount.scss';
import PersonalAccountPerson from './PersonalAccountPerson/PersonalAccountPerson';
import ListItem from './ListItem/ListItem';
import WalletEl from './WalletEl/WalletEl';
import FavoriteEl from './FavoriteEl/FavoriteEl';
import HistoryEl from './HistoryEl/HistoryEl';
const PersonalAccount: React.FC = () => {

    const Person = [
        {
            name: "Guest",
            uid: 1488228
        }
    ]

    const coinsAmount = 0;
    const ticketsAmount = 0;

    const listItems = [
        {
            img: "/img/icons/wallet.svg",
            title: "My wallet"
        },
        {
            img: "/img/header/likes.png",
            title: "My favorites"
        },
        {
            img: "/img/header/clock.png",
            title: "History"
        },
    ]

    const [activeIndex, setActiveIndex] = useState<number | null>(2);

    return (
        <div className='PersonalAccount container'>
            <div className='PersonalAccount_leftinfo'>
                {
                    Person.map((el, index) => (
                        <PersonalAccountPerson name={el.name} uid={el.uid} key={index}/>
                    ))
                }
                <div className='PersonalAccount_leftinfo_balance'>
                    <h2 className='PersonalAccount_leftinfo_balance_title'>
                        Account balance
                    </h2>
                    <div className='PersonalAccount_leftinfo_balance_tickets_wrapper'>
                        <div className='PersonalAccount_leftinfo_balance_coins'>
                            <div className='PersonalAccount_leftinfo_balance_coins_logo'>
                                <img src="/img/icons/LIcons.svg" alt="" />
                            </div>
                            <div className='PersonalAccount_leftinfo_balance_coins_amount'>
                                {coinsAmount} coins
                            </div>
                        </div>
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
                    </div>
                    <div className='PersonalAccount_leftinfo_balance_btn'>
                        Top up
                    </div>
                </div>
                <div className='PersonalAccount_leftinfo_list'>
                    {
                        listItems.map((el, index) => (
                            <ListItem 
                                img={el.img} 
                                title={el.title} 
                                key={index} 
                                index={index}
                                isActive={activeIndex === index}
                                onClick={() => setActiveIndex(index)}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='PersonalAccount_right'>
                {activeIndex === 0 && <WalletEl />}
                {activeIndex === 1 && <FavoriteEl />}
                {activeIndex === 2 && <HistoryEl />}
            </div>
        </div>
    )};
export default PersonalAccount