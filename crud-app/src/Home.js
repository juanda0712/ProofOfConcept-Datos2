import { useState, useEffect } from "react";
import UserList from './UserList';

const Home = () => {
    // Variables Reactivas
    const [users, setUsers] = useState(null);

    //useEffect Hook
    useEffect(()=>{
        fetch('http://localhost:3000/api/getUsers')
        .then(res =>{
            console.log(res);
            return res.json();
        })
        .then((data) => {
            setUsers(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])

    return ( 
        <div className="home">
            <h2>Users</h2>
            {users && <UserList users={users} ></UserList>}
        </div>
     );
}
 
export default Home;

