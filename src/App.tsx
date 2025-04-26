import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SliderBig from "./components/SliderBig/SliderBig"
import SliderSmall from "./components/SliderSmall/SliderSmall"
import Stories from "./components/Stories/Stories"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount"
import WatchStories from "./pages/WatchStories/WatchStories"

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
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
