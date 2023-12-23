import React, { useContext, useState } from "react";
import { LoginContext } from "../context/LoginProvider";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useContext(LoginContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      email.toLowerCase() === "admin@admin.com" &&
      password.toLowerCase() === "123456"
    ) {
      login({ email, password });
    }else{
      alert("Kullanıcı bilgilerini yanlış girdiniz")
    }
  };

  return (
    <div>
      <div>
        <div>
          <span></span>
          <h1>Clarus Store</h1>
        </div>
        <div>
          <h3>SIGN IN</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button>Sign In</button>
          <p>
            <span> Forgot your password? </span>
            <span>Reset Password</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
