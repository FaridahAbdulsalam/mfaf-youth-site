import "./Navbar.scss";
import logo from "../../assets/images/MFAF LOGO PNG.png";
import Button from "@mui/material/Button";
import Btn from "../../Containers/Buttons/Btn";

const Navbar = () => {
  return <nav className="container">
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
