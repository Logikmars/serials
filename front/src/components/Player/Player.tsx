import React from 'react';
import './Player.scss';
const Player: React.FC = () => {
    return (
        <div className='Player'>
            <div className='Player__leftcontainer'>
                <div className='Player__leftcontainer_play'>
                    <img src="/img/play.png" alt="" />
                    Watch
                </div>
                <div className='Player__leftcontainer_more'>
                    <img src="/img/dots.png" alt="" />
                </div>
            </div>
            <div className='Player__rightcontainer'>
                <div className='Player__rightcontainer_arrowleft Player__rightcontainer_arrow'>
                    <img src="/img/arrow.png" alt="" />
                </div>
                <div className='Player__rightcontainer_arrowright Player__rightcontainer_arrow'>
                    <img src="/img/arrow.png" alt="" />
                </div>
            </div>
        </div>
    )
};
export default Player