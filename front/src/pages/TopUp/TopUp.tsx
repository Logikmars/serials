import React from 'react';
import './TopUp.scss';
import TicketsAmount from '../../components/TicketsAmount/TicketsAmount';
import Coins from '../../components/Coins/Coins';
import PersonalAccountPerson from '../PersonalAccount/PersonalAccountPerson/PersonalAccountPerson';
import TopUpModes from './TopUpModes/TopUpModes';
import RefilModes from './RefilModes/RefilModes';
const TopUp: React.FC = () => {

const modes = [
  {
    key: 'base',
    title: 'Base',
    price: 22,
    priceUnit: 'Per month',
    features: [
      'Any 3 series',
      '1 episode before official release',
      'Fandom access',
      'Vote for the script',
      'Unique episodes and scenes',
      'Badge, access to achievements',
    ],
  },
  {
    key: 'premium',
    title: 'Premium',
    price: 22,
    priceUnit: 'Per month',
    features: [
      'Unlimited access',
      'Early access before open release',
      'Access to franchise / trailer',
      'Vote for the next season',
      'Unique items (special skin etc.)',
      'Badge (level icon)',
      'No ads',
    ],
  },
];

const refilModes = [
    {
        title: 'Weekly VIP',
        text: 'Unlock All Series for 7 Days',
        price: 20
    },
    {
        title: 'Weekly VIP',
        text: 'Unlock All Series for 7 Days',
        price: 20
    },
        {
        title: 'Weekly VIP',
        text: 'Unlock All Series for 7 Days',
        price: 20
    },
        {
        title: 'Weekly VIP',
        text: 'Unlock All Series for 7 Days',
        price: 20
    },
        {
        title: 'Weekly VIP',
        text: 'Unlock All Series for 7 Days',
        price: 20
    },
        {
        title: 'Weekly VIP',
        text: 'Unlock All Series for 7 Days',
        price: 20
    },
]

const paymentMethods = [
    {
        src: '/img/icons/paypal.png'
    },
    {
        src: '/img/icons/paypal.png'
    },
]

    return (
        <div className='TopUp container gap_xxl'>
            <div className='TopUp_header brad_25 pa_xxs'>
                <div className='TopUp_header_info'>
                    <TicketsAmount ticketsAmount={0} />
                    <Coins coinsAmount={0} />
                </div>
                <PersonalAccountPerson name='123412314' uid={123412314} small/>
            </div>
            <div className='TopUp_modes fcc gap_xxl'>
                {
                    modes.map((el, index) => (
                        <TopUpModes el={el} key={`TopUpModes_${index}`} />
                    ))
                }
            </div>
            <div className='TopUp_refil gap_m'>
                <div className='TopUp_refil_title ffab fs_m pa_xxxs'>
                    Refil
                </div>
                <div className='TopUp_refil_content gap_l'>
                    {
                        refilModes.map((el, index) => (
                            <RefilModes el={el} key={`RefilModes_${index}`}/>
                        ))
                    }
                </div>
            </div>
            <div className='TopUp_payments gap_m'>
                <div className='TopUp_payments_title ffab fs_m pa_xxxs'>
                    Payment Method
                </div>
                <div className='TopUp_payments_content gap_m'>
                    {
                        paymentMethods.map((el, index) => (
                            <img src={el.src} alt="" key={`paymentMethods_img_${index}`}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
export default TopUp