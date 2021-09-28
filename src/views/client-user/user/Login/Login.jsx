import "./Login.css";
import Logo from "../../../shared/assets/img/logo-white.png";
import { Link } from "react-router-dom";
import { backendURL } from "../../../../config/config";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const user = {
    email: email,
    password: password,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let response = await fetch(`${backendURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let data = await response.json();

    if (data.message) {
      setError(data.message);
      console.log(data.message);
    }
    setError("You have successfully loggedIn");
    setTimeout(() => {
      window.location.assign("/dashboard");
    }, 3000);
  };

  return (
    <div className="login_page_main">
      <div className="login_page">
        <div className="login_form">
          {/* <img src={Logo} alt="logo" /> */}
          <h3>Member Login</h3>
          <div>
            <p>{error && error} </p>
          </div>
          <form className="login_page_form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit" name="submit">
              Login
            </button>
          </form>
          <div className="text_links">
            <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
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

export default Login;
