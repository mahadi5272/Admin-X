import React, { useState } from "react";

const TaskCard = ({ task }) => {
  // ডাটাবেস থেকে আসা সব প্রপার্টি ডিকনস্ট্রাক্ট করা
  const { name, value, status, stack, assignto, _id } = task;
  
  // লোকাল স্টেট ম্যানেজমেন্ট (রিয়েল-টাইম আপডেটের জন্য)
  const [currentStatus, setCurrentStatus] = useState(status);

  const handleStatusChange = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setCurrentStatus("completed"); // স্ট্যাটাস আপডেট
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="w-full bg-white shadow-lg rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
      {/* কার্ড হেডার (টাস্ক নেম এবং স্ট্যাক) */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-bold text-lg truncate capitalize">{name}</h3>
          <span className="text-[10px] bg-white/20 text-white px-2 py-1 rounded backdrop-blur-sm">
            {stack}
          </span>
        </div>
      </div>

      {/* কার্ড বডি (বিস্তারিত তথ্য) */}
      <div className="p-5 space-y-4 flex-grow">
        <div className="grid grid-cols-2 gap-4">
          {/* প্রায়োরিটি সেকশন */}
          <div className="flex flex-col">
            <span className="text-gray-400 text-xs font-semibold uppercase">Priority</span>
            <span className={`text-sm font-bold ${value === 'High' ? 'text-red-500' : 'text-blue-500'}`}>
              {value}
            </span>
          </div>

          {/* বর্তমান স্ট্যাটাস */}
          <div className="flex flex-col items-end">
            <span className="text-gray-400 text-xs font-semibold uppercase">Status</span>
            <span className={`text-xs px-2 py-1 rounded-full font-bold ${
              currentStatus === "completed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
            }`}>
              {currentStatus}
            </span>
          </div>
        </div>

        {/* অ্যাসাইনড টু সেকশন */}
        <div className="pt-2 border-t border-gray-50">
          <p className="text-[11px] text-gray-400 flex items-center gap-1">
            <span className="font-bold text-gray-500 uppercase">Assigned:</span> {assignto}
          </p>
        </div>
      </div>

      {/* অ্যাকশন বাটন */}
      <div className="px-5 pb-5">
        {currentStatus !== "completed" ? (
          <button
            onClick={() => handleStatusChange(_id)}
            className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-200"
          >
            Mark as Completed
          </button>
        ) : (
          <button
            disabled
            className="w-full bg-gray-100 text-gray-400 py-2.5 rounded-xl text-sm font-bold cursor-not-allowed flex justify-center items-center gap-2"
          >
            Task Finished ✅
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskCard;