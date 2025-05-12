import React, { useState } from 'react';
import './FilmPage.scss';
import Close from '../../components/Close/Close';
import Arrow from '../../components/Arrow/Arrow';
import PlayBtn from '../../components/PlayBtn/PlayBtn';
import VolumeBtn from '../../components/VolumeBtn/VolumeBtn';
import FullScreenBtn from '../../components/FullScreenBtn/FullScreenBtn';
import LikeBtn from '../../components/LikeBtn/LikeBtn';
import CommentsBtn from '../../components/CommentsBtn/CommentsBtn';
import CalendarDaysEl from '../../components/CalendarDaysEl/CalendarDaysEl';
import useIsPortrait from '../../hooks/useIsPortrait';
import ShareDots from '../../components/ShareDots/ShareDots';
import { useNavigate, useParams } from 'react-router-dom';

interface Props {
    // el: {
    //     img: string;
    //     title: string;
    //     descriptionTitle: string;
    //     description: string;
    //     days: number;
    //     today: number;
    //     hotday: number;
    //     unlockDays: number;
    //     likes: number;
    //     comments: number;
    //     percentWatched: number;
    // }
}



const el = {
    img: '/img/stories/bigStories.png',
    title: 'Episode 3 - The Empire Strikes Back',
    descriptionTitle: 'Episode 3 plot',
    description: 'The wealthy heiress Emily White marries Tim Carter, a man from humble beginnings, for love. She spares no effort in elevating him to the position of CEO, using her family’s vast lorem ipsum',
    days: 42,
    today: 4,
    hotday: 5,
    unlockDays: 6,
    likes: 14,
    comments: 15,
    percentWatched: 20
}

const FilmPage: React.FC<Props> = ({ }) => {
    const filmSlug = useParams()
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

    const navigate = useNavigate();

    return (
        <div className='FilmPage container_big'>
            <div className={`FilmPage_left ${isPortrait && 'FilmPage_mob'}`}>
                {
                    isPortrait ?
                        <div className='FilmPage_mob_top'>
                            <div className='FilmPage_mob_top_left'>
                                <Close onclick={() => navigate('/')} />
                                {el.title}
                            </div>
                            <div className='FilmPage_mob_top_right'>
                                {el.today}/{el.days}
                                <ShareDots />
                            </div>
                        </div>
                        : <Close onclick={() => navigate('/')} />
                }
            </div>
            <div className='FilmPage_center'>
                <div className='FilmPage_center_btn'>
                    <Arrow bigHeight={true} />
                </div>
                <div className='FilmPage_center_stories'>
                    <div className='FilmPage_center_stories_video free_img'>
                        <div className='FilmPage_center_stories_container free_img'>
                            <div className='FilmPage_center_stories_container_wrapper'>
                                <div className='FilmPage_center_stories_top'>
                                    <div className='FilmPage_center_stories_top_left'>
                                        <PlayBtn />
                                        <VolumeBtn />
                                    </div>
                                    <div className='FilmPage_center_stories_top_right'>
                                        <FullScreenBtn />
                                    </div>
                                </div>
                                <div className='FilmPage_center_stories_center'>
                                    <LikeBtn likes={el.likes} />
                                    <CommentsBtn comments={el.comments} />
                                    {/* <ShareArrowBtn /> */}
                                </div>
                                <div className='FilmPage_center_stories_bottom'>
                                    <div className='FilmPage_center_stories_bottom_watch'
                                        style={{ width: `${el.percentWatched}%` }}
                                    >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={el.img} alt="" />
                    </div>
                </div>
                <div className='FilmPage_center_btn'>
                    <Arrow bigHeight={true} right={true} />
                </div>
            </div>
            <div className='FilmPage_right'>
                <div className='FilmPage_right_title'>
                    <h2 className='FilmPage_right_title_title'>
                        {el.title}
                    </h2>
                    <p className='FilmPage_right_title_description_title'>
                        {el.descriptionTitle}
                    </p>
                    <p className='FilmPage_right_title_description'>
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
                <div className='FilmPage_right_calendar'>
                    <div className='FilmPage_right_calendar_top'>
                        <div className='FilmPage_right_calendar_top_days'>
                            0 - {el.days}
                        </div>
                    </div>
                    <div className='FilmPage_right_calendar_days'>
                        {daysElements}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default FilmPage;
