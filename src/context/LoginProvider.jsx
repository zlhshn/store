import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );
  const navigate = useNavigate();

  const login = (info) => {
    setUser(info);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
