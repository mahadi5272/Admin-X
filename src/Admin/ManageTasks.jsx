import React from "react";

const ManageTasks = () => {
  const handleTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const value = form.value.value;
    const time = form.Time.value;
    const stack = form.stack.value;
    const TaskInfo = {
      name,
      value,
      time,
      stack,
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
        <div className="bg-base-100 ">
          <select className="w-full text-center py-3" name="Time">
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
