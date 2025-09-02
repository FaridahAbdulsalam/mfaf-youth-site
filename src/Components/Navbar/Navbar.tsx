 import "./Navbar.scss";
import logo from "../../assets/images/MFAF LOGO PNG.png";
import Btn from "../../Containers/Buttons/Btn";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";


const Navbar = () => {

  const [sticky, setSticky] = useState<Boolean>(false)


  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, [])

  return <nav className={`container ${sticky ? "dark-nav" : ""}`}>
    <img className="logo" src={logo} alt="MFAF Logo"/>
    <ul>
        <li><Link to="header" smooth={true} offset={0} duration={500}> Home </Link></li>
        <li><Link to="shura" smooth={true} offset={0} duration={500}>Who We Are</Link></li>
        <li><Link to="events" smooth={true} offset={0} duration={500}>Events</Link></li>
        <li><Link to="gallery" smooth={true} offset={0} duration={500}>Gallery</Link></li>
        <li><Link to="testimonials" smooth={true} offset={0} duration={500}>Testimonials</Link></li>
        <li>
          <Link to="contact" smooth={true} offset={0} duration={500}>
            <Btn title={"Contact Us"}/>
          </Link>
        </li>
    </ul>
  </nav>;
};

export default Navbar;
