import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const usersLoader  = useLoaderData();
    const [users, setUsers] = useState(usersLoader)
    const handleDeleteUser = _id =>{
        console.log('Deleted', _id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                alert('user deleted successfully');
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining)
            }
        })
    }
    return (
        <div>
            <h2>A part of our users: {users.length}</h2>
            <div>
                {
                    users.map(user=> <div key={user._id}>
                        <h2>Name: {user.name}</h2>
                        <p>Email: {user.email}</p> <p>ID: {user._id}</p>
                        <button><Link to={`/update/${user._id}`}>Update</Link></button>
                        <button onClick={()=> handleDeleteUser(user._id)}>X</button>
                    </div> )
                }
            </div>
            <button><Link to={'/'}>Back to home</Link></button>
        </div>
    );
};

export default Users;