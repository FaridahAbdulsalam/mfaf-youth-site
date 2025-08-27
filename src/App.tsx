import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Shura from './Containers/Shura/Shura'
import Events from './Components/OurEvents/Events'
import Title from './Components/Title/Title'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container">
        <Shura/>
        <Events/>
        <Title title={'MFAF Youth in Action'} subTitle={'Gallery'}/>
      </div>
    </div>
  )
}

export default App
