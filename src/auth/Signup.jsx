import React from "react";
import UseAuth from "../hooks/UseAuth";

const Signup = () => {
  const { signup } = UseAuth();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    signup(email, password)
      .then((res) => {
        console.log(res.user);
        alert("suessces");
        const newUser = {
          name: name,
          email: email,
          role: "Member",
          createdAt: new Date(),
        };
        return fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Registration Successful!");
          form.reset(); // ফর্ম ক্লিয়ার করা
          //   navigate("/user-dashboard"); // ইউজার পেজে পাঠানো
        }
      })
      .catch((error) => {
        console.log(error);
        alert("feaild");
      });
  };
  return (
    <div className="py-10">
      <div className="h-screen p-20 w-9/12 bg-[#574964] mx-auto flex rounded-2xl">
        <form
          className="md:w-6/12 md:mx-auto flex-col gap-1 flex justify-center items-center"
          onSubmit={handleSignUp}
        >
          <div className="py-2  px-3 w-full">
            <label className="text-white block">Name</label>
            <input
              className="shadow-2xl w-full bg-[#C8AAAA] text-center rounded-2xl py-2"
              type="text"
              name="name"
              placeholder="your name"
            />
          </div>
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
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
