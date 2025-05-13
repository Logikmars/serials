import React, { useState } from 'react';
import './Fandom.scss';
import FandomDiscussionEl from './FandomDiscussionEl/FandomDiscussionEl';
import FandomPostEl from './FandomPostEl/FandomPostEl';
import Close from '../../components/Close/Close';
// import Slider from '../../components/Slider/Slider';
const Fandom: React.FC = () => {

    // const elements = [
    //     {
    //         img: '/img/trends/0.webp',
    //         date: new Date(),
    //         title: `OMG, I'm Surrounded by Three Princes Full Movie`,
    //         description: `OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the...`,
    //         name: 'Guest 783412098'
    //     },
    //     {
    //         img: '/img/trends/0.webp',
    //         date: new Date(),
    //         title: `OMG, I'm Surrounded by Three Princes Full Movie`,
    //         description: `OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the...`,
    //         name: 'Guest 783412098'
    //     },
    //     {
    //         img: '/img/trends/0.webp',
    //         date: new Date(),
    //         title: `OMG, I'm Surrounded by Three Princes Full Movie`,
    //         description: `OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the...`,
    //         name: 'Guest 783412098'
    //     },
    //     {
    //         img: '/img/trends/0.webp',
    //         date: new Date(),
    //         title: `OMG, I'm Surrounded by Three Princes Full Movie`,
    //         description: `OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the...`,
    //         name: 'Guest 783412098'
    //     }
    // ]

    const discussionsEl = [
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },

        {
            name: 'Guest 783412098',
            members: 67138
        },

        {
            name: 'Guest 783412098',
            members: 67138
        },

        {
            name: 'Guest 783412098',
            members: 67138
        },

        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 67138
        },
        {
            name: 'Guest 783412098',
            members: 1488228
        },
        {
            name: 'Guest 783412098',
            members: 1488228
        },
        {
            name: 'Guest 783412098',
            members: 1488228
        },
        {
            name: 'Guest 783412098',
            members: 1488228
        },
        {
            name: 'Guest 783412098',
            members: 1488228
        },

    ]

    const [visibleDiscussions, setVisibleDiscussions] = useState(11);

    const handleSeeMore = () => {
        setVisibleDiscussions(prev => prev + 11);
    };

    const postEl = [
        {
            name: "Guest 783412098",
            date: new Date(),
            title: "OMG 😭💔 I CAN’T BREATHE",
            likes: 14,
            comments: 14,
            img: '/img/fandom/fandomImg.webp',
            commentsEl: {
                name: "Guest 783412098",
                date: new Date(),
                text: "Edward kissed Louisa at 00:56 of episode 7 and I’m not okay 😭 I’ve been shipping them since S1E3 when he looked at her like she hung the stars, and now THIS???"
            }
        },
        {
            name: "Guest 783412098",
            date: new Date(),
            title: "OMG 😭💔 I CAN’T BREATHE",
            likes: 14,
            comments: 14,
            img: '/img/fandom/fandomImg.webp',
            commentsEl: {
                name: "Guest 783412098",
                date: new Date(),
                text: "Edward kissed Louisa at 00:56 of episode 7 and I’m not okay 😭 I’ve been shipping them since S1E3 when he looked at her like she hung the stars, and now THIS???"
            }
        },
    ];

    const [openDiscussions, setopenDiscussions] = useState(false);

    const handleOpenDiscussions = () => {
        setopenDiscussions(prev => !prev);
    }

    return (
        <div className='Fandom container mobPt_s fcc'>
            <div className={`Fandom_mobDiscussions gap_m fcc ${openDiscussions && 'Fandom_mobDiscussions_open'}`}>
                <div className='Fandom_mobDiscussions_header ffab fs_s'>
                    <Close onclick={handleOpenDiscussions} />
                    My Discussions
                    <div className='Fandom_mobDiscussions_header_pencil fcc brad_50'>
                        <img src="/img/icons/pencil.svg" alt="" />
                    </div>
                </div>
                <div className='Fandom_mobDiscussions_list brad_25'>
                    {
                        discussionsEl.map((el, index) => (
                            <FandomDiscussionEl name={el.name} members={el.members} key={`FandomDiscussionEl-${index}`} />
                        ))
                    }
                </div>
            </div>
            {/* <Slider content={elements} contentType='fandom' /> */}

            <div className='Fandom_content fcc gap_m'>
                <div className='Fandom_content_nav gap_l'>
                    <div className='Fandom_content_nav_left gap_m'>
                        <div className='Fandom_content_nav_item fcc gap_xs'>
                            Hot
                            <img src="/img/icons/arrow.svg" alt="" />
                        </div>
                        <div className='Fandom_content_nav_item fcc gap_xs'>
                            Everywhere
                            <img src="/img/icons/arrow.svg" alt="" />
                        </div>
                    </div>
                    <div className='Fandom_content_nav_right'>
                        <div className='Fandom_content_nav_right_discussions fcc brad_50 pa_xl' onClick={handleOpenDiscussions}>
                            My Discussions
                        </div>
                    </div>
                </div>
                <div className='Fandom_content_main gap_m'>
                    <div className='Fandom_content_balance'></div>
                    <div className='Fandom_content_middle gap_l'>
                        {
                            postEl.map((el, index) => (
                                <FandomPostEl el={el} key={`FandomPostEl-${index}`} />
                            ))
                        }
                    </div>
                    <div className='Fandom_content_left gap_m brad_25'>
                        <div className='Fandom_content_left_title ffar fs_xs'>
                            MY DISCUSSIONS
                        </div>
                        <div className='Fandom_content_left_list'>
                            {
                                discussionsEl.slice(0, visibleDiscussions).map((el, index) => (
                                    <FandomDiscussionEl name={el.name} members={el.members} key={`FandomDiscussionEl-${index}`} />
                                ))
                            }
                        </div>
                        {
                            visibleDiscussions < discussionsEl.length && (
                                <div className='Fandom_content_left_btn fcc'>
                                    <div className='Fandom_content_left_btn_el pa_s brad_50 ffar fs_s' onClick={handleSeeMore}>
                                        See more
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Fandom