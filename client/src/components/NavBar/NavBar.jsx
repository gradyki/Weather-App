import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/WeatherWise.png";

function NavBar() {
  return (
    <nav className="nav-container">
      <div className="image-container">
        <NavLink to="/">
          <img id="logo" src={logo} alt="logo" />
        </NavLink>
      </div>

      <Search />

      <div className="contact-container">
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
