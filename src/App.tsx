import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Shura from "./Containers/Shura/Shura";
import Events from "./Components/OurEvents/Events";
import Gallery from "./Components/Gallery/Gallery";
import Testimonials from "./Containers/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Shura />
        <Events />
        <Gallery />
        <Testimonials />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
