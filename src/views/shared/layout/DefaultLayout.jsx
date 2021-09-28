import Sidebar from "../Sidebar/UserSidebar";
import NavBarStrip from "../NavBar/NavBarStrip/NavBarStrip";

const DefaultLayout = ({ component: Component }) => {
  return (
    <div className="container_main">
      <div className="sidebar_section">
        <Sidebar />
      </div>
      <div className="comp_sect_main">
        {/* <div className="nav_contain">
          <NavBarStrip />
        </div> */}
        <div className="render_comp">
          <Component />
          {/* <p>Hiii</p> */}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
