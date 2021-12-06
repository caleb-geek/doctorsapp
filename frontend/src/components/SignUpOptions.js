import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../styles/Home.module.css';

const SignUpOptions = () => (
  <div className={classes.Home}>
    <div className={classes.Overlay}>
      <div className="d-flex justify-content-center flex-column align-items-center h-75">
        <h2> CREATE YOUR ACCOUNT </h2>
        <div className="d-flex mt-3">
          <Link to= {{pathname:"/register",roleProps:{roleId:"doctor"}}} className={classes.Button} >
           Sign Up as Doctor
          </Link>
          
          <Link to={{pathname:"/register",roleProps:{roleId:"patient"}}} className={classes.Button}>
           Sign Up as Patient
          </Link>
          <Link to={{pathname:"/register",roleProps:{roleId:"admin"}}} className={classes.Button}>
           Sign Up Admin
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default SignUpOptions;