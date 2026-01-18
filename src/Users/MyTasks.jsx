import { useEffect, useState } from "react";
import TaskCard from "../Component/TaskCard";

const MyTasks = () => {
  const [Tasks, setTasks] = useState([]);
  const [loading,setloading] = useState(true)
  const [err ,seterr] = useState(null)
  useEffect(() => {
    fetch("http://localhost:3000/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setloading(false)
      })
      .catch((error) => {
        seterr("সার্ভার চালু নেই বা কানেকশন পাওয়া যাচ্ছে না");
        setloading(false)
        console.log(error);
      });
  }, []);

  if(loading){
    return <p className="font-bold text-green-700 text-2xl text-center mt-40">Loding<span className="text-lg font-bold text-red-400 animate-ping">....</span></p>
  }

  return (
    <div className="w-5xl mx-auto">
      <h1 className="text-center text-2xl font-bold text-red-400 py-10">Well Come Tasks Page</h1>
      <div className="grid grid-cols-3 gap-10 ">
        {Tasks.map((task) => (
          <TaskCard task={task}></TaskCard>
          
        ))}
      </div>
      
    </div>
  );
};

export default MyTasks;
