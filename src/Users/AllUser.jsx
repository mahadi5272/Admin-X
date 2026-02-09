import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [users , setUsers] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data)
        })
    },[])
    console.log(users)
    return (
        <div>
            all user
        </div>
    );
};

export default AllUser;