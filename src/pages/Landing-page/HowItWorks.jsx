import { FiUserPlus, FiEdit3, FiCheckCircle } from "react-icons/fi";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-black mb-16 tracking-tight">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
          <div className="flex-1 space-y-4">
            <div className="mx-auto w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-3xl border border-blue-100 shadow-sm"><FiUserPlus /></div>
            <h4 className="font-bold text-xl text-slate-800">1. Register & Role</h4>
            <p className="text-gray-500 text-sm">Sign up and get assigned as a Mentor or Member.</p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="mx-auto w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-3xl border border-purple-100 shadow-sm"><FiEdit3 /></div>
            <h4 className="font-bold text-xl text-slate-800">2. Assign Tasks</h4>
            <p className="text-gray-500 text-sm">Admins assign specific tasks to team members.</p>
          </div>
          <div className="flex-1 space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center text-3xl border border-green-100 shadow-sm"><FiCheckCircle /></div>
            <h4 className="font-bold text-xl text-slate-800">3. Update Progress</h4>
            <p className="text-gray-500 text-sm">Members update status from pending to completed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

