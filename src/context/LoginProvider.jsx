import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

const LoginProvider = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const values = {
    user,
    setUser,
  };

  return (
    <LoginContext.Provider value={values}>
      {props.children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginProvider;
