import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserList.css';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    setLoading(true);

    axios
      .get('http://localhost:3000/api/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    setLoading(true);

    axios
      .get(`http://localhost:3000/api/users/search?query=${searchRef.current.value}`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className='main-div'>
      <h1>User List</h1>
      <input type="text" placeholder="Search by name" ref={searchRef} />
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => navigate('/users/addusers')}>Add New User</button>
      {loading ? (
        <div>Loading...</div>
      ) : users.length === 0 ? (
        <div>No User Found</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <Link to={`/users/${user._id}`}>{user.fullName}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
