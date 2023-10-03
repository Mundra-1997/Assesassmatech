import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserProfile.css';
import Button from './Button';
function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/${userId}`)
      .then((response) => {
        setUser(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="user-profile-container">
      {user && (
        <div className="user-info">
          <h1 className="user-fullname">{user.fullName}</h1>
          <img
            className="user-profile-picture"
            src={user.profilePicture}
            alt={user.fullName}
          />
          <p className="user-email"><b>Email: </b>{user.emailAddress}</p>
          <p className="user-phone"><b>Phone Number:</b> {user.phoneNumber}</p>
          <p className="user-job-title"><b>Job Title:</b> {user.jobTitle}</p>
          <p className="user-department"><b>Department: </b>{user.department}</p>
          <p className="user-location"><b>Location:</b> {user.location}</p>
          <p className="user-bio"><b>Short Bio:</b> {user.shortBio}</p>
          <Button/>
        </div>
      )}
      
    </div>
  );
}

export default UserProfile;
