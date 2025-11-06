import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Management</h1>
      <UserForm onUserAdded={fetchUsers} />
      <UserList users={users} onUserUpdated={fetchUsers} onUserDeleted={fetchUsers} />
    </div>
  );
}

export default App;
