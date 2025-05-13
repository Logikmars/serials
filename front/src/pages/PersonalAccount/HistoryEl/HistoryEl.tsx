import React, { useState } from 'react';
import './HistoryEl.scss';
import HistoryElFilm from './HistoryElFilm/HistoryElFilm';
import useIsPortrait from '../../../hooks/useIsPortrait';

const HistoryEl: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'date' | 'popularity'>('date');

  const FilmEl = [
    {
      img: '/img/trends/0.webp',
      progress: 10,
      title: "Episode 3 - The Empire Strikes Back",
      percent: 78,
    },
    {
      img: '/img/trends/0.webp',
      progress: 50,
      title: "Episode 3 - The Empire Strikes Back",
      percent: 78,
    },
    {
      img: '/img/trends/0.webp',
      progress: 10,
      title: "Episode 3 - The Empire Strikes Back",
      percent: 78,
    },
  ]

  const isPortrait = useIsPortrait();

  return (
    <div className={`HistoryEl gap_xl ${isPortrait ? 'container' : ''}`}>
      <div className={`HistoryEl_header fcc gap_m ${isPortrait && 'HistoryEl_headermob'}`}>
        {
          isPortrait ?
            <div className='HistoryEl_header_mob'>
              <div className='HistoryEl_header_mob_close HistoryEl_header_mob_btn fcc brad_50'>
                <img src="/img/icons/close.svg" alt="" />
              </div>
              <div className='HistoryEl_header_mob_title fs_m ffab fs_lw'>
                History
              </div>
              <div className='HistoryEl_header_mob_edit HistoryEl_header_mob_btn fcc brad_50'>
                <img src="/img/icons/edit.svg" alt="" />
              </div>
            </div>
            :
            <h2 className='HistoryEl_header_title fs_m ffab'>Viewing history</h2>
        }
        <div
          className={`HistoryEl_header_choise pa_xs brad_50 ffar fs_s ${activeFilter === 'date' ? 'HistoryEl_header_choise_active' : ''}`}
          onClick={() => setActiveFilter('date')}
        >
          By date
        </div>

        <div
          className={`HistoryEl_header_choise pa_xs brad_50 ffar fs_s ${activeFilter === 'popularity' ? 'HistoryEl_header_choise_active' : ''}`}
          onClick={() => setActiveFilter('popularity')}
        >
          By popularity
        </div>
      </div>
      <div className='HistoryEl_list gap_l'>
        <h2 className='HistoryEl_list_title fs_s ffar'>
          Yeasterday
        </h2>
        {
          FilmEl.map((el, index) => (
            <HistoryElFilm el={el} key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default HistoryEl;
