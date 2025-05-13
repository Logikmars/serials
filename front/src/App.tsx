// import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
// import SliderBig from "./components/SliderBig/SliderBig"
// import SliderSmall from "./components/SliderSmall/SliderSmall"
// // import Slider from "./components/Slider/Slider"
// import Stories from "./components/Stories/Stories"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalAccount from "./pages/PersonalAccount/PersonalAccount"
import FilmPage from "./pages/FilmPage/FilmPage"
import MobMenu from "./components/MobMenu/MobMenu"
import HistoryEl from "./pages/PersonalAccount/HistoryEl/HistoryEl"
import Fandom from "./pages/Fandom/Fandom"
// import LoadMore from "./components/LoadMore/LoadMore"
import { useState } from "react"
import Register from "./pages/Register/Register"
import TopUp from "./pages/TopUp/TopUp"
import Genre from "./pages/Genre/Genre"
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
import HomePage from "./pages/HomePage/HomePage"
import Footer from "./components/Footer/Footer"

function App() {

  // const [showMore, setshowMore] = useState(false);

  // const handleClick = () => {
  //   setshowMore(prev => !prev);
  // }

  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categories/:selectedCategory" element={<CategoriesPage />} />
          <Route path="/history" element={<HistoryEl />} />

          <Route path="/profile/history" element={<HistoryEl />} />
          <Route path="/profile" element={<PersonalAccount />} />
          <Route path="/personalaccount" element={<PersonalAccount />} />
          {/* дальше не делал */}
          <Route path="/register" element={<Register />} />
          <Route path="/topUp" element={<TopUp />} />
          <Route path="/genre/:genre" element={<Genre />} />
          <Route path="/fandom" element={<Fandom />} />
          <Route path="/register" element={<Register />} />


        </Routes>
        <Footer />
        <MobMenu />
      </div>
    </BrowserRouter>
  )
}

export default App
