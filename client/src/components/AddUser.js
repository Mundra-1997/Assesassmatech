import React, { useRef } from 'react';
import './AddUser.css'
import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Button from './Button';
function AddUser() {
  const fullNameRef = useRef();
  const profilePictureRef = useRef();
  const emailAddressRef = useRef();
  const phoneNumberRef = useRef();
  const jobTitleRef = useRef();
  const departmentRef = useRef();
  const locationRef = useRef();
  const shortBioRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('fullName', fullNameRef.current.value);
    formDataToSend.append('profilePicture', profilePictureRef.current.files[0]);
    formDataToSend.append('emailAddress', emailAddressRef.current.value);
    formDataToSend.append('phoneNumber', phoneNumberRef.current.value);
    formDataToSend.append('jobTitle', jobTitleRef.current.value);
    formDataToSend.append('department', departmentRef.current.value);
    formDataToSend.append('location', locationRef.current.value);
    formDataToSend.append('shortBio', shortBioRef.current.value);

    
    try {
      const response = await axios.post('http://localhost:3000/api/users/addUsers', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      if (response.status === 201) {
       toast.success('User registered successfully!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the toast after 3 seconds
      });
        console.log('User registered successfully.');
          e.target.reset();

      }
    } catch (error) {
          toast.error('Something went wrong', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // Close the toast after 3 seconds
      });
      console.error('Error:', error);
    }
  };


  return (
    <div className='main-div'>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit} className='form'>
        <div className='sec-div'>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            ref={fullNameRef}
            required
          />
        </div>
        <div className='sec-div'>
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            ref={profilePictureRef}
            required
          />
        </div>
        <div className='sec-div'>
          <label htmlFor="emailAddress">Email Address:</label>
          <input
            type="email"
            id="emailAddress"
            name="emailAddress"
            ref={emailAddressRef}
            required
          />
        </div>
        <div className='sec-div'>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            ref={phoneNumberRef}
              required
          />
        </div>
        <div className='sec-div'>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            ref={jobTitleRef}
              required
          />
        </div>
        <div className='sec-div'>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            ref={departmentRef}
              required
          />
        </div>
        <div className='sec-div'>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            ref={locationRef}
              required
          />
        </div>
        <div className='sec-div'>
          <label htmlFor="shortBio">Short Bio:</label>
          <textarea
            id="shortBio"
            name="shortBio"
            ref={shortBioRef}
              required
          />
        </div>
        <div><button type="submit">Register</button></div>
        <Button/>
      </form>
      
      <ToastContainer/>
    </div>
  );
}

export default AddUser;
