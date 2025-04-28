import React, { useState } from 'react';
import './WatchStories.scss';
import Close from '../../components/Close/Close';
import Arrow from '../../components/Arrow/Arrow';
import PlayBtn from '../../components/PlayBtn/PlayBtn';
import VolumeBtn from '../../components/VolumeBtn/VolumeBtn';
import FullScreenBtn from '../../components/FullScreenBtn/FullScreenBtn';
import LikeBtn from '../../components/LikeBtn/LikeBtn';
import CommentsBtn from '../../components/CommentsBtn/CommentsBtn';
import ShareArrowBtn from '../../components/ShareArrowBtn/ShareArrowBtn';
import CalendarDaysEl from '../../components/CalendarDaysEl/CalendarDaysEl';
import useIsPortrait from '../../hooks/useIsPortrait';
import ShareDots from '../../components/ShareDots/ShareDots';

interface Props {
    el: {
        img: string;
        title: string;
        descriptionTitle: string;
        description: string;
        days: number;
        today: number;
        hotday: number;
        unlockDays: number;
        likes: number;
        comments: number;
        percentWatched: number;
    }
}

const WatchStories: React.FC<Props> = ({ el }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    const shouldTruncate = el.description && el.description.length > 150;
    const displayedText = isExpanded || !shouldTruncate
        ? el.description
        : el.description?.slice(0, 150) + '...';

    const days = el.days;
    const daysElements = [];
    for (let i = 0; i < days; i++) {
        daysElements.push(
        <CalendarDaysEl 
            day={i} 
            locked={i + 1 > el.unlockDays} 
            hot={i + 1 === el.hotday} 
            today={i + 1 === el.today}
        />);
    }

    const isPortrait = useIsPortrait();

    return (
        <div className='WatchStories Bigcontainer'>
            <div className={`WatchStories_left ${isPortrait && 'WatchStories_mob'}`}>
                {
                    isPortrait ? 
                    <div className='WatchStories_mob_top'>
                        <div className='WatchStories_mob_top_left'>
                            <Close />
                            {el.title}
                        </div>
                        <div className='WatchStories_mob_top_right'>
                            {el.today}/{el.days}
                            <ShareDots />
                        </div>
                    </div>
                    :<Close />
                }
            </div>
            <div className='WatchStories_center'>
                <div className='WatchStories_center_btn'>
                    <Arrow bigHeight={true}/>
                </div>
                <div className='WatchStories_center_stories'>
                    <div className='WatchStories_center_stories_video free_img'>
                        <div className='WatchStories_center_stories_container free_img'>
                            <div className='WatchStories_center_stories_container_wrapper'>
                                <div className='WatchStories_center_stories_top'>
                                    <div className='WatchStories_center_stories_top_left'>
                                        <PlayBtn />
                                        <VolumeBtn />
                                    </div>
                                    <div className='WatchStories_center_stories_top_right'>
                                        <FullScreenBtn />
                                    </div>
                                </div>
                                <div className='WatchStories_center_stories_center'>
                                    <LikeBtn likes={el.likes}/>
                                    <CommentsBtn comments={el.comments}/>
                                    <ShareArrowBtn />
                                </div>
                                <div className='WatchStories_center_stories_bottom'>
                                    <div className='WatchStories_center_stories_bottom_watch'
                                        style={{ width: `${el.percentWatched}%` }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={el.img} alt="" />
                    </div>
                </div>
                <div className='WatchStories_center_btn'>
                    <Arrow bigHeight={true} right={true}/>
                </div>
            </div>
            <div className='WatchStories_right'>
                <div className='WatchStories_right_title'>
                    <h2 className='WatchStories_right_title_title'>
                        {el.title}
                    </h2>
                    <p className='WatchStories_right_title_description_title'>
                        {el.descriptionTitle}
                    </p>
                    <p className='WatchStories_right_title_description'>
                        {displayedText}
                        {shouldTruncate && (
                            <span
                                onClick={toggleExpand}
                                style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                            >
                                {isExpanded ? 'less' : 'more'}
                            </span>
                        )}
                    </p>
                </div>
                <div className='WatchStories_right_calendar'>
                    <div className='WatchStories_right_calendar_top'>
                        <div className='WatchStories_right_calendar_top_days'>
                            0 - {el.days}
                        </div>
                    </div>
                    <div className='WatchStories_right_calendar_days'>
                        {daysElements}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default WatchStories;
