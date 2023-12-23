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
    } else {
      alert("Kullanıcı bilgilerini yanlış girdiniz");
    }
  };

  return (
    <div className="backImage ">
      <div className="bg-white p-6 rounded-2xl flex flex-col  justify-center  shadow-login w-[60%] max-w-[550px]">
        <div className="flex flex-col items-center mb-5  gap-2">
          <h1 className="text-[30px] font-bold uppercase">Trend Store</h1>
          <span className="bg-pink-500 h-1.5 w-11 "></span>
        </div>
        <div className="text-center mb-4">
          <h3 className="font-semibold text-lg">SIGN IN</h3>
          <p className="text-gray-400">Enter your credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div className="flex flex-col gap-2">
            <label className="font-montserrat hover:after:mx-3 text-gray-400 hover:after:content-['admin@admin.com'] hover:after:text-black hover:cursor-pointer hover:after:underline peer" htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input peer-focus:visible"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-montserrat hover:after:mx-3 text-gray-400 hover:after:content-['123456'] hover:after:text-black hover:cursor-pointer hover:after:underline" htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <button className="login-btn font-semibold">Sign In</button>
          <p>
            <span className="font-semibold text-gray-500"> Forgot your password? </span>
            <span className="text-pink-500 underline hover:cursor-pointer">Reset Password</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
