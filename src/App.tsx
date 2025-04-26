import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SliderBig from "./components/SliderBig/SliderBig"
import SliderSmall from "./components/SliderSmall/SliderSmall"
import Stories from "./components/Stories/Stories"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PersonalAccount from "./Pages/PersonalAccount/PersonalAccount"

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <SliderBig />
              <Stories title="Stories" />
              <SliderSmall title="Shoto" />
            </>
          } />

          <Route path="/personalaccount" element={<PersonalAccount />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
