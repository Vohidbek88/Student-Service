import React, { useState } from 'react';
import '../assets/Card.css';
import axios from '../api';

const Card = (props) => {

  const onDelete=async()=>{
    const checkUrl=props.sub_title ? `https://api.edu-sts.uz/api/v1/subcategory-two-file-create-delete-student/${props.id}/`:`https://api.edu-sts.uz/api/v1/category-one-student-file-create-delete/${props.id}/`
    try {
      const res=await axios.delete(checkUrl);
     
      console.log(res.data);
      window.location.reload()
    } catch (error) {
     console.log(error); 
    }
  }
  //src={'http://api.edu-sts.uz:8030'+props.file}
  return (
    <div className="card">
      <img src={'https://www.pngall.com/wp-content/uploads/2018/05/Files-PNG-File.png'} alt='file-gpa' className="card-image" />

      <div className="card-content">
        {
          !props.sub_title && <h3 className="card-title"><i className="fa-solid fa-circle-exclamation"></i> Bu siz ushbu bo'limga yuklagan file agar uni almashtirmoqchi bo'sangiz uni o'chiring!</h3>
        }
        {
          props.file ? <p className='file-name'>Nomi: {props.file.slice(7)}</p>:''
        }
        <div className="card-actions">
          <a href={'https://api.edu-sts.uz/api/v1/'+props.file} download target='_blank' className="card-button">Ko'rish <i className="fa-solid fa-eye"></i></a>
          <button className="card-button" onClick={onDelete}>O'chirish <i className="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>
  ); 
};

export default Card;

