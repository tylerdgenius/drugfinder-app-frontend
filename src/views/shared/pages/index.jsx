import { DarkNavBarIndex } from "../NavBar/ColoredNavBar/DarkNavBar";
import Row01 from "./components/Row01";
import Row02 from "./components/Row02";
import Row03 from "./components/Row03";
import Row04 from "./components/Row04";
import Footer from "./components/FooterIndex";

const IndexPage = (props) => {
  return (
    <div>
      <DarkNavBarIndex />
      <Row01 />
      <Row02 />
      <Row03 />
      <Row04 />
      <Footer />
    </div>
  );
};

export default IndexPage;
