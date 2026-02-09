import React from "react";
import { FiUsers, FiCheckSquare, FiPieChart } from "react-icons/fi";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Role Identification",
      desc: "Clearly defined roles for Mentors and Members.",
      icon: <FiUsers />,
    },
    {
      title: "Task Transparency",
      desc: "Track tasks with specific priorities like High or Medium.",
      icon: <FiCheckSquare />,
    },
    {
      title: "Dynamic Stats",
      desc: "Live counting of tasks and members from the database.",
      icon: <FiPieChart />,
    },
  ];
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-center mb-20 tracking-tight">
          Why Choose Admin-X?
        </h2>
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="relative space-y-6">
              <div className="text-indigo-500 text-5xl opacity-20 absolute -top-10 -left-5 font-black italic">
                0{i + 1}
              </div>
              <div className="text-4xl text-indigo-400">{f.icon}</div>
              <h3 className="text-2xl font-bold tracking-wide">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
