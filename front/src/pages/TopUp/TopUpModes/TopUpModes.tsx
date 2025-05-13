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
    <div className='TopUpModes brad_25 gap_m'>
        <div className='TopUpModes_header fcc gap_m ffab fs_m'>
            <div className='TopUpModes_header_img free_img'>
                <img src={`/img/icons/${el.title}.webp`} alt="" />
            </div>
            {el.title}
        </div>
        <div className='TopUpModes_content brad_25 gap_s pa_large'>
            <div className='TopUpModes_content_header ffar fs_m'>
                FEATURES
            </div>
            <div className='TopUpModes_content_list gap_xs'>
                {
                    el.features.map((feature, index) => (
                        <div className='TopUpModes_content_features gap_xs fs_xs' key={`TopUpModes_content_features_${index}`}>
                            <img src="/img/icons/whiteFireAll.svg" alt="" />
                            {feature}
                        </div>
                    ))
                }
            </div>
            <div className='TopUpModes_content_price ffab fs_l'>
                <div className='TopUpModes_content_price_big'>${el.price}.<span className='TopUpModes_content_price_small fs_m'>00</span></div>
                <span className='TopUpModes_content_price_perTime ffar fs_xs'>(Per month)</span>
            </div>
            <div className='TopUpModes_content_btn fcc'>
                <BigDarkGrayBtn title='Buy Now' />
            </div>
        </div>
    </div>
  );
};

export default TopUpModes;
