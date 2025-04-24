import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import SliderBig from "./components/SliderBig/SliderBig"
import SliderSmall from "./components/SliderSmall/SliderSmall"
// import Home from "./Pages/Home/Home"

function App() {
  return (
    <div className='App'>
      <Header />
      <SliderBig />
      <SliderSmall title="Shoto" />
      <Footer />
    </div>
  )
}

export default App
