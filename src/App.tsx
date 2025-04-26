import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SliderBig from "./components/SliderBig/SliderBig"
import SliderSmall from "./components/SliderSmall/SliderSmall"
// import Stories from "./components/Stories/Stories"
// import Home from "./Pages/Home/Home"

function App() {
  return (
    <div className='App'>
      <Header />
      <SliderBig />
      {/* <Stories title="Stories"/> */}
      <SliderSmall title="Trending" />
      <Footer />
    </div>
  )
}

export default App
