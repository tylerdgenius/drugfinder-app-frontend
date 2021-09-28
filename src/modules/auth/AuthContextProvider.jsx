import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <AuthContext.Provider
      value={(loggedIn, setLoggedIn, register, setRegister)}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
