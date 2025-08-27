import "./Navbar.scss";
import logo from "../../assets/images/MFAF LOGO PNG.png";
import Btn from "../../Containers/Buttons/Btn";
import { useEffect, useState } from "react";

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
        <li>Home</li>
        <li>Who We Are</li>
        <li>Events</li>
        <li>Testimonials</li>
        <li>
          <Btn title={"Contact Us"}/>
        </li>
    </ul>
  </nav>;
};

export default Navbar;
