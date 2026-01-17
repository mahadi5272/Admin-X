import React from "react";
import UseAuth from "../hooks/UseAuth";

const Login = () => {
  const { login } = UseAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    login(email, password)
    .then(res=>{
        console.log(res.user)
        alert("succese")
    })
    .catch(error=>{
        console.log(error)
        alert("feaild")
    })
  };
  return (
    <div className="py-10">
      <div className="h-screen p-20 w-9/12 bg-[#574964] mx-auto flex rounded-2xl">
        <form
          className="md:w-6/12 md:mx-auto flex-col gap-1 flex justify-center items-center"
          onSubmit={handleLogin}
        >
          <div className="  rounded-2xl px-3 w-full">
            <label className="text-white block">Email</label>
            <input
              className="shadow-2xl bg-[#C8AAAA] rounded-2xl py-2 w-full text-center"
              type="email"
              name="email"
              placeholder="your email"
            />
          </div>
          <div className="py-2 rounded-2xl px-3 w-full">
            <label className="text-white block">Password</label>
            <input
              className="shadow-2xl rounded-2xl py-2 bg-[#C8AAAA] w-full text-center"
              type="password"
              name="password"
              placeholder="your password"
            />
          </div>
          <div className="py-2 flex justify-center w-full">
            <button
              className="btn w-full text-[#574964] bg-[#FFDAB3]"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
