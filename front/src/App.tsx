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
import HomePage from "./pages/HomePage/HomePage"
import Footer from "./components/Footer/Footer"
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"

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

          {/* Выше уже обдрочено обработано унифицировано всё внутри */}
          <Route path="/film/:filmSlug" element={<FilmPage />} />

          {/* <Route path="/personalaccount" element={<PersonalAccount />} /> */}
          {/* <Route path="/fandom" element={<Fandom />} /> */}

          {/* <Route path="/history" element={<HistoryEl />} /> */}
          {/* <Route path="/profile/history" element={<HistoryEl />} /> */}
          {/* <Route path="/profile" element={<PersonalAccount />} /> */}

        </Routes>
        <Footer />
        <MobMenu />
      </div>
    </BrowserRouter>
  )
}

export default App
