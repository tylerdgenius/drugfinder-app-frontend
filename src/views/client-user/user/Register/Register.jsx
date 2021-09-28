import { useContext, useRef, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { backendURL } from "../../../../config/config";
import { fetchData } from "../../../../config/config";
import { AuthContext } from "../../../../contexts/auth/AuthContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  // const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const user = {
    user_id: uuidv4(),
    email: email,
    password: password,
    username: username,
    role: "user",
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let response = await fetch(`${backendURL}/auth/register`, {
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
    } else {
      setError("You have successfully registered");
      setTimeout(() => {
        window.location.assign("/login");
      }, 3000);
    }
  };

  return (
    <div className="login_page_main">
      <div className="login_page">
        <div className="login_form">
          {/* <img src={Logo} alt="logo" /> */}
          <h3>Member Register</h3>
          <div>
            <p>{error && error}</p>
          </div>
          <form className="login_page_form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
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
              Register
            </button>
          </form>
          <div className="text_links">
            <p>
              <Link to="/forgot-password">Forgot Password?</Link>
            </p>
            <p>
              Got an account? <Link to="/login">Login</Link>
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

export default Register;
