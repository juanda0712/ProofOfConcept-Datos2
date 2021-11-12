const UserList = ({users}) => {
    return ( 
        <div className="course-list">
            {users.map((user)=>(
                <div className="course-preview">
                    <h2>{user.name}</h2>
                    <p>Last name: {user.last_name}</p>
                    <p>Code: {user.code}</p>
                </div>
                
            ))}
        </div>
     );
}
 
export default UserList;