import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateInfo = {name, email}
        console.log(updateInfo)

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                alert('user updated successfully')
            }
        })
    }
    return (
        <div>
            <h2>Update name: {loadedUser.name}</h2>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name}/>
                <br />
                <input type="email" name="email" id="" defaultValue={loadedUser?.email}/>
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;