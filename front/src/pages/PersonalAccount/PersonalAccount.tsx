import React, { useEffect, useState } from 'react';
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
import { useLocation } from 'react-router-dom';


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
            img: "/img/icons/walletBlue.svg",
            title: "My wallet",
            to: 'wallet'
        },
        {
            img: "/img/icons/heartBlueNoFill.svg",
            title: "My favorites",
            to: 'liked'
        },
        {
            img: "/img/icons/timeColored.svg",
            title: "History",
            to: 'history'
        },
    ]

    const [activeIndex, setActiveIndex] = useState<number | null>(2);
    const location = useLocation();

    const isPortrait = useIsPortrait();

    useEffect(() => {
    if (location.state?.section) {
        const sectionMap: { [key: string]: number } = {
        wallet: 0,
        liked: 1,
        history: 2,
        };

        const sectionIndex = sectionMap[location.state.section];
        if (sectionIndex !== undefined) {
        setActiveIndex(sectionIndex);
        }
    }
    }, [location.state]);

    return (
        <div className='PersonalAccount container gap_xl'>
            <div className='PersonalAccount_leftinfo gap_s'>
                {
                    Person.map((el, index) => (
                        <PersonalAccountPerson name={el.name} uid={el.uid} key={index} />
                    ))
                }
                <div className='PersonalAccount_leftinfo_balance pa_l brad_25 gap_s'>
                    <h2 className='PersonalAccount_leftinfo_balance_title ffar fs_s'>
                        Account balance
                    </h2>
                    <div className='PersonalAccount_leftinfo_balance_tickets_wrapper fcc'>
                        <Coins coinsAmount={0} />
                        <TicketsAmount ticketsAmount={0} />
                    </div>
                    <Link className='PersonalAccount_leftinfo_balance_btn fcc ffar fs_s pa_l brad_25' to={'/topUp'}>
                        Top up
                    </Link>
                </div>
                <div className='PersonalAccount_leftinfo_list brad_15'>
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