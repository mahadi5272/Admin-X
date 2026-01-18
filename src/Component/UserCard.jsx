import React from "react";

const UserCard = ({ user }) => {
  const { name, email, role, createdAt } = user;
  return (

    <div className="bg-base-200 shadow-xl hover:scale-105 transform transition p-5 rounded-2xl h-full flex flex-col justify-between">
      <div className="flex justify-between items-start gap-2">
        <h1 className="font-bold text-lg leading-tight">{name}</h1>
        <span className="badge badge-sm">{role}</span>
      </div>
      
      {/* ইমেইল ব্রেক করার জন্য break-all যোগ করা হয়েছে */}
      <p className="text-sm text-gray-600 my-2 break-all">{email}</p>
      
      {/* তারিখ সুন্দরভাবে দেখানোর জন্য */}
      <h1 className="text-xs text-gray-400 mt-auto">{new Date(createdAt).toLocaleDateString()}</h1>
    </div>
   
  );
};

export default UserCard;

