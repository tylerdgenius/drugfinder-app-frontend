import Picture from "../../assets/img/pic01.png";
import { Link } from 'react-router-dom';


const Row01 = () => {
  return (
    <div className="row_01">
      <div className="section_01">
        <h1>Find Any Drug, Anytime, From Anywhere</h1>
        <p>
          We exist to make sure you get the drugs you need no matter how rare or
          difficult they are to get
        </p>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <img src={Picture} alt="main_mage" className="pic_01" />
      </div>
    </div>
  );
};

export default Row01;
