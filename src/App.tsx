import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Shura from './Containers/Shura/Shura'
import Events from './Components/OurEvents/Events'
import Gallery from './Components/Gallery/Gallery'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container">
        <Shura/>
        <Events/>
        <Gallery/>
      </div>
    </div>
  )
}

export default App
