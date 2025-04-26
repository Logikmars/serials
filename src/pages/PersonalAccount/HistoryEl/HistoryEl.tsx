import React, { useState } from 'react';
import './HistoryEl.scss';
import HistoryElFilm from './HistoryElFilm/HistoryElFilm';

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

  return (
    <div className='HistoryEl'>
      <div className='HistoryEl_header'>
        <h2 className='HistoryEl_header_title'>Viewing history</h2>

        <div
          className={`HistoryEl_header_choise ${activeFilter === 'date' ? 'HistoryEl_header_choise_active' : ''}`}
          onClick={() => setActiveFilter('date')}
        >
          By date
        </div>

        <div
          className={`HistoryEl_header_choise ${activeFilter === 'popularity' ? 'HistoryEl_header_choise_active' : ''}`}
          onClick={() => setActiveFilter('popularity')}
        >
          By popularity
        </div>
      </div>
      <div className='HistoryEl_list'>
        <h2 className='HistoryEl_list_title'>
            Yeasterday
        </h2>
        {
            FilmEl.map((el, index) => (
                <HistoryElFilm el={el} key={index}/>
            ))
        }
      </div>
    </div>
  );
};

export default HistoryEl;
