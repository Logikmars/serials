import React from 'react';
import './TopUpModes.scss';
import BigDarkGrayBtn from '../../../components/BigDarkGrayBtn/BigDarkGrayBtn';

interface Mode {
  key: string;
  title: string;
  price: number;
  priceUnit: string;
  features: string[];
}

interface Props {
  el: Mode;
}

const TopUpModes: React.FC<Props> = ({ el }) => {
  return (
    <div className='TopUpModes'>
        <div className='TopUpModes_header'>
            <div className='TopUpModes_header_img free_img'>
                <img src={`/img/icons/${el.title}.webp`} alt="" />
            </div>
            {el.title}
        </div>
        <div className='TopUpModes_content'>
            <div className='TopUpModes_content_header'>
                FEATURES
            </div>
            <div className='TopUpModes_content_list'>
                {
                    el.features.map((feature, index) => (
                        <div className='TopUpModes_content_features' key={`TopUpModes_content_features_${index}`}>
                            <img src="/img/icons/whiteFireAll.svg" alt="" />
                            {feature}
                        </div>
                    ))
                }
            </div>
            <div className='TopUpModes_content_price'>
                <div className='TopUpModes_content_price_big'>${el.price}.<span className='TopUpModes_content_price_small'>00</span></div>
                <span className='TopUpModes_content_price_perTime'>(Per month)</span>
            </div>
            <div className='TopUpModes_content_btn'>
                <BigDarkGrayBtn title='Buy Now' />
            </div>
        </div>
    </div>
  );
};

export default TopUpModes;
