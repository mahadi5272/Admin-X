import { FiTarget, FiActivity, FiShield } from "react-icons/fi";

const GoalAndPlan = () => {
  const steps = [
    {
      title: "Centralized Control",
      desc: "Manage all tasks and users from a single dashboard.",
      icon: <FiActivity className="text-2xl" />,
    },
    {
      title: "Role Management",
      desc: "Clear distinction between Mentors and Members for security.",
      icon: <FiShield className="text-2xl" />,
    },
    {
      title: "Real-time Tracking",
      desc: "Instant updates on task progress and completion status.",
      icon: <FiTarget className="text-2xl" />,
    },
  ];
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight">
              Our Goal & Strategic Plan
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
              Empowering teams by providing a transparent and organized workflow
              management system.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200 group-hover:rotate-6 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoalAndPlan;
