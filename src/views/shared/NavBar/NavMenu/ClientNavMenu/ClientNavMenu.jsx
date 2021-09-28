import "./ClientNavMenu.css";
import { FaHome } from "react-icons/fa";
import { FaUpload } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaWrench } from "react-icons/fa";

const ClientNavMenu = (props) => {
  return (
    <div className="navMenu">
      <Link to="/dashboard" className="icn">
        <i>
          <FaHome />
        </i>
        <p>Dashboard</p>
      </Link>
      <Link to="/uploads" className="icn">
        <i>
          <FaUpload />
        </i>
        <p>Uploads</p>
      </Link>
      <Link to="/profile" className="icn">
        <i>
          <FaUserEdit />
        </i>
        <p>Profile</p>
      </Link>
      <Link to="/settings" className="icn">
        <i>
          <FaWrench />
        </i>
        <p>Settings</p>
      </Link>
      <Link to="/contact" className="icn">
        <i>
          <FaUserEdit />
        </i>
        <p>Contact Us</p>
      </Link>
    </div>
  );
};

export default ClientNavMenu;
