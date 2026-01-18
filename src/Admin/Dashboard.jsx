import React, { useEffect, useState } from 'react';
import TaskCard from '../Component/TaskCard';

const AllTask = () => {
    const [tasks,setTasks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/tasks')
        .then(res=>res.json())
        .then(data=>{
            setTasks(data)
            console.log(data)
        })
    },[])
    return (
        <div>
           <h1>All Tasks</h1>
           <div className='grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4'>
            {
                tasks.map(task=><TaskCard task={task}></TaskCard>)
            }
            </div> 
        </div>
    );
};

export default AllTask;