// src/Pages/MyTasks.jsx
import { useEffect, useState } from "react";
import TaskCard from "../Component/TaskCard";
import UseAuth from "../hooks/UseAuth";

const MyTasks = () => {
  const { user } = UseAuth();
  const [Tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      // ইমেইল কুয়েরি পাঠিয়ে শুধু নিজের টাস্ক আনা
      fetch(`http://localhost:3000/myTask?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setTasks(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-spinner loading-lg text-red-400"></span>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 min-h-screen bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-800">My Tasks</h1>
        <p className="text-gray-500 mt-2">Manage and track your assigned work status</p>
      </div>
      
      {Tasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Tasks.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
           <p className="text-xl text-gray-400">No tasks assigned to you yet. 😊</p>
        </div>
      )}
    </div>
  );
};

export default MyTasks;