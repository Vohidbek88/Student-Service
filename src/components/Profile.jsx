import React, { useContext } from 'react'
import { ServicesContext } from '../context';
import { useNavigate } from 'react-router-dom';
import axios from '../api';

const Profile = () => {

  const { userData,setUser } = useContext(ServicesContext);

  const navigate=useNavigate()
    const logOut=async()=>{
      try {
        const res=await axios.post('/user/logout/');
        console.log(res.data);
        localStorage.removeItem('user_id');
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
      } catch (error) {
        console.log(error);
      }

    }
  const styles = {
    profileContainer: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
    },
    heading: {
      textAlign: 'center',
      color: '#333',
    },
    infoContainer: {
      marginTop: '20px',
    },
    infoItem: {
      marginBottom: '10px',
      fontSize: '16px',
      color: '#555',
    },
  };
  
  return (
    <div style={styles.profileContainer}>
      <h1 style={styles.heading}>User Profile</h1>
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <strong>Username:</strong> {userData?.user?.username}
        </div>
        <div style={styles.infoItem}>
          <strong>Email:</strong> {userData?.user?.email}
        </div>
        <div style={styles.infoItem}>
          <strong>First Name:</strong> {userData?.user?.first_name}
        </div>
        <div style={styles.infoItem}>
          <strong>Last Name:</strong> {userData?.user?.last_name}
        </div>
        <div className={styles.infoItem}>
<strong><button onClick={logOut} style={{backgroundColor:'red',display:'flex',justifyContent:'end'}}>Logout</button></strong>
        </div>
      </div>
    </div>
  )
}

export default Profile