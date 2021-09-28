import "./UserSidebar.css";
import Logo from "../assets/img/logo.png";
import { FaUpload } from "react-icons/fa";

import ClientNavMenu from "../NavBar/NavMenu/ClientNavMenu/ClientNavMenu";
import { Link } from "react-router-dom";
import NavBarStrip from "../NavBar/NavBarStrip/NavBarStrip";

const Sidebar = (props) => {
  return (
    <div className="sidebar_main">
      <div className="sidebar_section_01">
        <img src={Logo} alt="Logo" />
      </div>

      <Link to="/uploads/new" className="sidebar_section_02">
        <p>Create New Upload</p>
        <i>
          <FaUpload />
        </i>
      </Link>

      <div className="navbar_menu">
        <ClientNavMenu />
      </div>

      <div className="sidebar_section_03">
        <NavBarStrip />
      </div>
    </div>
  );
};

export default Sidebar;
