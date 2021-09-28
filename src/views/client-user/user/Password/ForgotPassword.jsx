import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="login_page_main">
      <div className="login_page">
        <div className="login_form">
          {/* <img src={Logo} alt="logo" /> */}
          <h3>Reset Password</h3>
          <form className="login_page_form">
            <input type="text" placeholder="Enter your email address" />
            <button type="submit" name="submit">
              Reset Password
            </button>
          </form>
          <div className="text_links">
            <p>Go back to</p>
            <div className="button_text">
              <Link to="/login">or, Login</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text_under_login">
        <p>Copyright &copy; {new Date().getFullYear()}. All Rights Reserved</p>
        <p>
          Site built by <a href="https://tectarii.com">Tectarii Empire</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
