import React from "react";
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div>
      <section className='h-125 bg-[url("https://i.ibb.co.com/yF8vKVQ3/how-to-streamline-your-workflow.jpg")] bg-no-repeat bg-cover bg-fixed bg-center flex justify-center items-center'>
        <div className=" w-9/12">
          <div className="">
            <img src="" alt="" />
            <h1 className="md:text-4xl sm:text-2xl lg:text-5xl text-xl text-gray-800 text-center font-bold mb-3">
              
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
    </div>
  );
};

export default Home;
