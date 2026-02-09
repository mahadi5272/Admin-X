import { FiStar, FiUser } from "react-icons/fi";

const WhoUsesIt = () => {
  return (
    <section className="py-24 bg-indigo-50/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-black mb-8 leading-tight">Who Uses Our <br /> <span className="text-indigo-600">Admin-X</span> Platform?</h2>
          <div className="space-y-6">
            <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-indigo-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl text-yellow-500 bg-yellow-50 p-4 rounded-2xl h-fit"><FiStar /></div>
              <div>
                <h5 className="font-bold text-xl mb-1 text-slate-800">Mentors & Leaders</h5>
                <p className="text-gray-500 leading-relaxed">Assigned to monitor team progress and manage task delegations efficiently.</p>
              </div>
            </div>
            <div className="flex gap-6 p-6 bg-white rounded-3xl shadow-sm border border-indigo-100 hover:shadow-xl transition-shadow">
              <div className="text-3xl text-blue-500 bg-blue-50 p-4 rounded-2xl h-fit"><FiUser /></div>
              <div>
                <h5 className="font-bold text-xl mb-1 text-slate-800">Team Members</h5>
                <p className="text-gray-500 leading-relaxed">Dedicated to executing assigned tasks and providing real-time status updates.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="relative">
             <div className="absolute -inset-4 bg-indigo-500/10 blur-3xl rounded-full"></div>
             <img src="https://i.ibb.co.com/r28K9n3Q/image.jpg" className="relative rounded-[2.5rem] shadow-2xl border-8 border-white object-cover h-[500px] w-full" alt="Team" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhoUsesIt