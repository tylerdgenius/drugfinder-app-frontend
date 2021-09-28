import { FaHamburger } from "react-icons/fa";
import "./NavBarStrip.css";
import Avatar from "../../assets/img/pic01.png";

const NavBarStrip = (props) => {
  return (
    <div className="nav_bar_strip">
      <div className="avatar">
        <p>Hi, Emeka</p>
        <img src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default NavBarStrip;
