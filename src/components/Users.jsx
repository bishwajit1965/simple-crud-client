import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Data has been deleted successfully!!");
          const remainingUsers = users.filter((user) => user._id !== _id);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div>
      <h2>Users:{loadedUsers.length} </h2>
      {loadedUsers.map((user) => (
        <p key={user._id}>
          Name:{user.name} Email: {user.email}{" "}
          <Link to={`/update/${user._id}`}>
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
