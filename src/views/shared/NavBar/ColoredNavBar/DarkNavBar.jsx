import "./DarkNavBar.css";
import Logo from "../../assets/img/logo-white.png";
import { Link } from 'react-router-dom'

export const DarkNavBarIndex = (props) => {

  console.log(Logo)
  return (
    <div className="nav_bar_body">
      <div className="logo_div">
        <img src={Logo} alt="Logo" className="image_logo"/>
      </div>
      <div className="nav_bar_container">
        <ul className="nav_bar_index">
          <Link to="/dashboard"><li>Dashboard</li></Link>
          <Link to="/register"><li>Register</li></Link>
          <Link to="/login"><li>Login</li></Link>
        </ul>
      </div>
    </div>
  );
};
