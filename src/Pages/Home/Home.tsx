import React from 'react';
import './Home.scss';
import HomeBigItem from './HomeBigItem/HomeBigItem';
import SmallMovieItem from '../../components/SmallMovieItem/SmallMovieItem';

const Home: React.FC = () => {

    const items = [
        {
            src: "/img/trends/star.webp",
            title: "OMG, I'm Surrounded by Three Princes Full Movie",
            description: "OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the..."
        },
        {
            src: "/img/trends/swimming.webp",
            title: "OMG, I'm Surrounded by Three Princes Full Movie",
            description: "OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the..."
        },
        {
            src: "/img/trends/shoto.webp",
            title: "OMG, I'm Surrounded by Three Princes Full Movie",
            description: "OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the..."
        },
        {
            src: "/img/trends/swimming.webp",
            title: "OMG, I'm Surrounded by Three Princes Full Movie",
            description: "OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the..."
        },
        {
            src: "/img/trends/swimming.webp",
            title: "OMG, I'm Surrounded by Three Princes Full Movie",
            description: "OMG, I'm Surrounded by Three Princes Episode 1 introduces us to King Louis who hears the news about his long-lost daughter after twenty years and calls the..."
        }
    ]

    return (
        <div className='Home sizecontainer'>
            <HomeBigItem  src='/img/hero/preview.webp' title='The Empire Strikes Back' description='In the heart of Cloud City, destiny clashes with legacy. As Luke faces Darth Vader in a duel of light and shadow, secrets are revealed and paths are changed forever. One choice. One truth. The galaxy will never be the same.'/>
            <div className='Home__new'>
                <h2 className='Home__new_title'>
                    New release
                </h2>
                <div className='Home__new_items'>
                    {items.map((el, index) => (
                        <SmallMovieItem src={el.src} title={el.title} description={el.description} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default Home