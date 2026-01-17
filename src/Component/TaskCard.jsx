import React from "react";

const TaskCard = ({task}) => {
    const {taskName,
status,_id} = task
  return (
    <div className="card card-border bg-base-100 shadow-xl hover:scale-105   transform transition">
      <div className="card-body">
        <h2 className="card-title">{taskName}</h2>
        <p>
            {status}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Completed</button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
