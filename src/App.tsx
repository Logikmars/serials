import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SliderBig from "./components/SliderBig/SliderBig"
import SliderSmall from "./components/SliderSmall/SliderSmall"
import Stories from "./components/Stories/Stories"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount"
import WatchStories from "./pages/WatchStories/WatchStories"
import MobMenu from "./components/MobMenu/MobMenu"
import HistoryEl from "./pages/PersonalAccount/HistoryEl/HistoryEl"
import Fandom from "./pages/Fandom/Fandom"

function App() {

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

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <SliderBig />
              <Stories title="Stories" />
              <SliderSmall title="Features" />
              <Footer />
            </>
          } />
          {/* meow */}
          <Route path="/personalaccount" element={<PersonalAccount />} />
          <Route path="/stories" element={<WatchStories el={el} />} />
          <Route path="/fandom" element={<Fandom />} />

          <Route path="/history" element={<HistoryEl />} />
          <Route path="/profile/history" element={<HistoryEl />} />
          <Route path="/profile" element={<PersonalAccount />} />

          <div className='Post' style={{
            overflow: 'hidden',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',

          }}>
            <div className='Post_bg free_img' style={{
              width: `100%`,
              alignItems: "baseline",
            }}>
              <img src="asd" alt="" style={{
                minWidth: `100%`,
                minHeight: `600px`,
                filter: 'blur(10px)'
              }} />
            </div>
            <div className='Post_content'>
              <img src="asd" alt="" style={{
                width: `100%`,
                maxHeight: `600px`
              }} />
            </div>
          </div>

        </Routes>
        <MobMenu />
      </div>
    </BrowserRouter>
  )
}

export default App
