import React, { useEffect, useState } from "react";
import {
  FiUsers,
  FiMail,
  FiShield,
  FiStar,
  FiChevronRight,
  FiSearch,
  FiFilter,
} from "react-icons/fi";

const AllUsers = () => {
  const [users, setuser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        setuser(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  // সার্চ ফিল্টারিং লজিক
  const filteredUsers = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const mentors = filteredUsers.filter((user) => user.role === "Mentor");
  const members = filteredUsers.filter((user) => user.role !== "Mentor");

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              Team <span className="text-indigo-600">Directory</span>
            </h1>
            <p className="text-slate-500 mt-2 font-medium italic">
              Manage workspace roles and permissions effortlessly.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                placeholder="Search by name or email..."
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-80 transition-all"
              />
            </div>
            <button className="p-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 shadow-sm">
              <FiFilter />
            </button>
          </div>
        </div>

        {/* 1. Elite Mentors Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-amber-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
            <FiStar className="fill-amber-500" />
            <span>Premium Mentors</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div
                key={mentor._id}
                className="group bg-white p-1 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="bg-slate-900 rounded-[2.3rem] p-8 h-full relative overflow-hidden">
                  {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>

                  <div className="flex flex-col items-center text-center">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-200 flex items-center justify-center text-3xl font-black text-slate-900 shadow-xl mb-4">
                        {mentor.name?.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-slate-900 rounded-full"></div>
                    </div>

                    <h3 className="text-white font-bold text-xl tracking-wide group-hover:text-amber-400 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1 mb-6">
                      {mentor.email}
                    </p>

                    <div className="flex gap-2 mb-6">
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] rounded-lg border border-slate-700">
                        React Expert
                      </span>
                      <span className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] rounded-lg border border-slate-700">
                        Node.js
                      </span>
                    </div>

                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                      Public Profile <FiChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Members Table Section */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white/50 backdrop-blur-md">
            <h2 className="text-xl font-bold text-slate-800">
              General Members
            </h2>
            <span className="px-4 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full">
              {members.length} Users Total
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Basic Info
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Account Status
                  </th>
                  <th className="px-8 py-5 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">
                    Management
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {members.map((member) => (
                  <tr
                    key={member._id}
                    className="hover:bg-slate-50/80 transition-all group"
                  >
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                          {member.name?.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-slate-700 capitalize text-sm">
                            {member.name}
                          </p>
                          <p className="text-slate-400 text-xs">
                            {member.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-semibold text-slate-600 tracking-tight">
                            {member.role}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 hover:shadow-sm transition-all text-slate-400 hover:text-indigo-600">
                        <FiChevronRight className="text-lg" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
