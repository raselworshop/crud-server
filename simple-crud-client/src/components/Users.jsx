import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users  = useLoaderData();
    return (
        <div>
            <h2>A part of our users: {users.length}</h2>
            <div>
                {
                    users.map(user=> <div key={user._id}>
                        <h2>Name: {user.name}</h2>
                        <p>Email: {user.email}</p>
                        <button>X</button>
                    </div> )
                }
            </div>
            <button><Link to={'/'}>Back to home</Link></button>
        </div>
    );
};

export default Users;