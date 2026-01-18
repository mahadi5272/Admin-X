import React, { useEffect, useState } from 'react';
import UserCard from '../Component/UserCard';

const AllUsers = () => {
    const [users,setuser] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data =>{
            setuser(data)
            console.log(data)
        })
    },[])
    return (
        <div className='w-5xl mx-auto'>
            <h1>Hello</h1>
            <div className='grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-3.5'>
                {
                    users.map(user =><UserCard user = {user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default AllUsers;