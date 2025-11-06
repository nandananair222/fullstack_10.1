import React, { useState } from 'react';
import axios from 'axios';

function UserList({ users, onUserUpdated, onUserDeleted }) {
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: '', email: '', age: '' });

  const handleEdit = (user) => {
    setEditId(user._id);
    setForm(user);
  };

  const handleUpdate = async (id) => {
    await axios.put(`http://localhost:5000/api/users/${id}`, form);
    setEditId(null);
    onUserUpdated();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    onUserDeleted();
  };

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user._id}>
          {editId === user._id ? (
            <>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <input value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
              <button onClick={() => handleUpdate(user._id)}>Save</button>
            </>
          ) : (
            <>
              {user.name} ({user.email}, {user.age})
              <button onClick={() => handleEdit(user)}>Edit</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default UserList;
