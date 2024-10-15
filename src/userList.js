import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            setUsers(response.data);
        });
    }, []);
    
    return (
        <div>
        <h1>Liste des utilisateurs</h1>
        <ul>
            {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
            ))}
        </ul>
        </div>
    );
}

export default UserList;