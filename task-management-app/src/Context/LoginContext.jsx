import { createContext, useState } from "react";
import { getCurrentUserRole } from "../services/userAuth";

export const LoginContext = createContext({
  loginForm: {},
  onLoginForm: () => {},
  user: {},
  onSetUser: () => {},
});

export const LoginProvider = ({ children }) => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [user, setUser] = useState(getCurrentUserRole());

  return (
    <LoginContext.Provider
      value={{
        loginForm,
        onLoginForm: setLoginForm,
        user,
        onSetUser: setUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
