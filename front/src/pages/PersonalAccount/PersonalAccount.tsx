import React, { useState } from 'react';
import './PersonalAccount.scss';
import PersonalAccountPerson from './PersonalAccountPerson/PersonalAccountPerson';
import ListItem from './ListItem/ListItem';
import WalletEl from './WalletEl/WalletEl';
import FavoriteEl from './FavoriteEl/FavoriteEl';
import HistoryEl from './HistoryEl/HistoryEl';
import { Link } from 'react-router-dom';
import useIsPortrait from '../../hooks/useIsPortrait';
import Coins from '../../components/Coins/Coins';
import TicketsAmount from '../../components/TicketsAmount/TicketsAmount';
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
            title: "My wallet",
            to: 'wallet'
        },
        {
            img: "/img/header/likes.png",
            title: "My favorites",
            to: 'liked'
        },
        {
            img: "/img/header/clock.png",
            title: "History",
            to: 'history'
        },
    ]

    const [activeIndex, setActiveIndex] = useState<number | null>(2);

    const isPortrait = useIsPortrait();

    return (
        <div className='PersonalAccount container'>
            <div className='PersonalAccount_leftinfo'>
                {
                    Person.map((el, index) => (
                        <PersonalAccountPerson name={el.name} uid={el.uid} key={index} />
                    ))
                }
                <div className='PersonalAccount_leftinfo_balance'>
                    <h2 className='PersonalAccount_leftinfo_balance_title'>
                        Account balance
                    </h2>
                    <div className='PersonalAccount_leftinfo_balance_tickets_wrapper'>
                        <Coins coinsAmount={0}/>
                        <TicketsAmount ticketsAmount={0} />
                    </div>
                    <Link className='PersonalAccount_leftinfo_balance_btn' to={'/topUp'}>
                        Top up
                    </Link>
                </div>
                <div className='PersonalAccount_leftinfo_list'>
                    {
                    listItems.map((el, index) => (
                        isPortrait ? (
                        <Link to={el.to} key={index}>
                            <ListItem
                            img={el.img}
                            title={el.title}
                            index={index}
                            isActive={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                            />
                        </Link>
                        ) : (
                        <ListItem
                            img={el.img}
                            title={el.title}
                            key={index}
                            index={index}
                            isActive={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        />
                        )
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
    )
};
export default PersonalAccount