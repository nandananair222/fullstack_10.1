import React, { useState } from 'react';
import axios from 'axios';

function UserForm({ onUserAdded }) {
  const [form, setForm] = useState({ name: '', email: '', age: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', form);
    setForm({ name: '', email: '', age: '' });
    onUserAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Age" value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })} />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserForm;
