import Typewriter from "typewriter-effect";
import UseAuth from "../hooks/UseAuth";
import Status from "./Landing-page/Status";
import GoalAndPlan from "./Landing-page/GoalAndPlan";
import WhyChooseUs from "./Landing-page/WhyChooseUs";
import HowItWorks from "./Landing-page/HowItWorks";
import WhoUsesIt from "./Landing-page/WhoUsesIt";
// import { toast, ToastContainer } from "react-toastify";
// import { useEffect } from "react";

const Home = () => {
  const { authErr } = UseAuth();
  console.log(authErr);

  return (
    <div>
      {authErr ? (
        <div className="h-screen flex items-center justify-center bg-red-50">
          <div className="text-center p-10 shadow-2xl bg-white rounded-xl">
            <h1 className="text-2xl font-bold text-red-600">সিস্টেম এরর!</h1>
            <p className="mt-2 text-gray-600">{authErr}</p>
            <p className="text-sm text-gray-400 mt-4 italic">
              দয়া করে ব্যাকএন্ড সার্ভার চালু আছে কি না নিশ্চিত করুন।
            </p>
          </div>
        </div>
      ) : (
        <section className='h-125 bg-[url("https://i.ibb.co.com/yF8vKVQ3/how-to-streamline-your-workflow.jpg")] bg-no-repeat bg-cover bg-fixed bg-center flex justify-center items-center'>
          <div className=" w-10/12">
            <div className="">
              <img src="" alt="" />
              <h1 className="md:text-4xl sm:text-3xl lg:text-5xl text-xl text-gray-800 text-center font-bold mb-3">
                <Typewriter
                  options={{
                    strings: [
                      "Streamline Your Team's Workflow with Admin-X",
                      "Manage Your Tasks Efficiently",
                      "Collaborate Seamlessly Today",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                  }}
                />
              </h1>
              <p
                className="lg:text-3xl
            md:text-2xl sm:text-xl text-lg text-center font-bold text-gray-700 mb-3"
              >
                The ultimate task management tool designed for seamless
                collaboration between admins and team members
              </p>
              <div className="flex justify-center">
                <button className="btn">Get Started for Free</button>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* <ToastContainer /> */}
      {/* status */}
      <section className="w-11/12 mx-auto">
        <Status></Status>
      </section>
      {/* GoalAndPlan */}
      <section className="w-11/12 mx-auto">
        <GoalAndPlan></GoalAndPlan>
      </section>
      {/* WhyChooseUs */}
      <section className="w-11/12 mx-auto">
        <WhyChooseUs></WhyChooseUs>
      </section>
      {/*  HowItWorks */}
      <section className="w-11/12 mx-auto">
        <HowItWorks></HowItWorks>
      </section>
      {/* WhoUsesIt */}
      <section className="w-11/12 mx-auto">
        <WhoUsesIt></WhoUsesIt>
      </section>
    </div>
  );
};

export default Home;
