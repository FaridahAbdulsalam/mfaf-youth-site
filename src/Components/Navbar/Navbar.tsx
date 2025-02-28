import "./Navbar.scss";
import logo from "../../assets/images/MFAF LOGO PNG.png";
import Button from "@mui/material/Button";

const Navbar = () => {
  return <nav className="container">
    <img className="logo" src={logo} alt="MFAF Logo"/>
    <ul>
        <li>Home</li>
        <li>Who We Are</li>
        <li>Events</li>
        <li>Testimonials</li>
        <Button 
            variant="contained"
            sx={{borderRadius: 10}}>
            <li>Contact Us</li>
        </Button>
    </ul>
  </nav>;
};

export default Navbar;
