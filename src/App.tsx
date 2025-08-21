import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Shura from './Containers/Shura/Shura'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container">
        <Shura/>
      </div>
    </div>
  )
}

export default App
