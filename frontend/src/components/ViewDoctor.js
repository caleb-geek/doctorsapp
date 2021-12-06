import React,{useEffect,useState} from 'react';
import '../styles/View.css'
import {Link, Redirect,useParams} from 'react-router-dom';


import axios from 'axios';


const ViewDoctor = () => {


const [doctors,setDoctors] = useState([])
useEffect( ()=>{
  axios.get('http://127.0.0.1:5000/api/v1/users')
    .then((result)=>{
      setDoctors(result.data)
    }).catch((err)=>{
      console.log(err)
    })
},[]);


console.log("data",doctors)
  return ( 
        <>
        {doctors.map((user)=>(
            <tr key={user.id}>
               <td>{user.id}</td>
               <td>{user.firstName}</td>
               <td>{user.lastName}</td>
               <td>{user.username}</td>
               <td>{user.email}</td>
               <td>{user.roleId}</td>
                   
            </tr>
        ))}
        </>
     );
}
 
export default ViewDoctor;