import "./LightNavBar.css";
import Logo from '../../../assets/img/logo.png';

export const LightNavBarIndex = (props) => {

  console.log(Logo)
  return (
    <div className="nav_bar_body_light">
      <div className="logo_div_light">
        <img src={Logo} alt="Logo" className="image_logo_light"/>
      </div>
      <div className="nav_bar_container_light">
        <ul className="nav_bar_index_light">
          <a><li>Dashboard</li></a>
          <a><li>Register</li></a>
          <a><li>Login</li></a>
        </ul>
      </div>
    </div>
  );
};
