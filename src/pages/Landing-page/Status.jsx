import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const Status = () => {
  const [stats, setStats] = useState({
    totalTasks: 0,
    totalUsers: 0,
    totalLeaders: 0,
  });

  useEffect(() => {
    fetch("http://localhost:3000/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-16 bg-white p-8 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
        {/* ইমেজ সেকশন - সুন্দর প্রেজেন্টেশন */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img
            src="https://i.ibb.co.com/r28K9n3Q/image.jpg"
            alt="Team Collaboration"
            className="relative w-full h-[400px] object-cover rounded-[1.5rem] shadow-lg transform transition duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* স্ট্যাটাস কার্ড সেকশন */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-800 leading-tight">
              Real-time Project <br />
              <span className="text-indigo-600">Growth Tracking</span>
            </h2>
            <p className="text-slate-500 mt-2 font-medium">
              Monitoring every task and team progress dynamically.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* টোটাল টাস্ক কার্ড */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 bg-white rounded-lg shadow-sm">📊</span>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-wider">
                  Total Tasks
                </p>
              </div>
              <h2 className="text-4xl font-black text-slate-800">
                <CountUp end={stats.totalTasks} duration={2.5} />
              </h2>
            </div>

            {/* টিম মেম্বার কার্ড */}
            <div className="p-6 bg-gradient-to-br from-rose-50 to-red-50 border border-rose-100 rounded-2xl transition-all hover:shadow-md">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 bg-white rounded-lg shadow-sm">👥</span>
                <p className="text-rose-600 text-xs font-bold uppercase tracking-wider">
                  Members
                </p>
              </div>
              <h2 className="text-4xl font-black text-slate-800">
                <CountUp end={stats.totalUsers} duration={2.5} />
              </h2>
            </div>

            {/* লিডার/মেন্টর কার্ড */}
            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl transition-all hover:shadow-md sm:col-span-2">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 bg-white rounded-lg shadow-sm">⭐</span>
                <p className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
                  Active Mentors
                </p>
              </div>
              <h2 className="text-4xl font-black text-slate-800">
                <CountUp end={stats.totalLeaders} duration={2.5} />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
