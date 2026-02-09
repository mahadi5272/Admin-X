import React, { useEffect, useState } from "react";

const ManageTasks = () => {
    const [users,setUsers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/users")
        .then(res =>res.json())
        .then(data =>{
            setUsers(data)
        })
    },[])
    console.log(users)
  const handleTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const assignto = form.assignto.value;
    const value = form.value.value;
    const status = form.status.value;
    const stack = form.stack.value;
    const TaskInfo = {
      name,
      value,
      status,
      stack,
      assignto,
    };
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(TaskInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("save to mnogo");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-5xl mx-auto bg-gray-100 py-20 ">
      <form className="w-2xl mx-auto flex flex-col gap-5" onSubmit={handleTask}>
        <div className="bg-base-100 ">
          <input
          className="w-full text-center py-3" type="text" placeholder="Wright your Task Name" name="name" />
        </div>
        <div>
            <select name="assignto">
                <option value="">Select user (Email)</option>
                {
                    users.map(user=><option key={user._id} value={user.email}>
                        {user.name} :- {user.email}
                    </option>)
                }
            </select>
        </div>
        <div className="bg-base-100 ">
          <select className="w-full text-center py-3" name="status">
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="bg-base-100 ">
          {" "}
          <select className="w-full text-center py-3" name="value">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="bg-base-100 ">
          {" "}
          <select className="w-full text-center py-3" name="stack">
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>

        <div className=" flex justify-center ">
          <button className="btn bg-red-500 text-white  " type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default ManageTasks;
