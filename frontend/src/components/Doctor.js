import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserService from '../services/user.service';
import classes from '../styles/Doctor.module.css';
import { Redirect, Link, useParams } from 'react-router-dom';

const Doctor = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const { user: currentUser } = useSelector(state => state.auth);

  
 
  useEffect(() => {
    UserService.getDoctor(id).then(
      response => {
        setLoading(false);
        setContent(response.data);
      },
      error => {
        setLoading(false);
        const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();

        setContent(message);
      },
    );
  }, []);
  console.log(content)
  return (
    <div className="container">
      <div className="text-center">
        {loading && <span className="spinner-border spinner-border-lg" />}
      </div>
      <div className={classes.Doctor}>
        <img src="./doctor_image.jpg" alt={content.firstName} className={classes.doctorImg} />
        <div>
          <h2>
           
          </h2>
          <p className={`${classes.badge} ${classes.badgeSecondary}`}>
            Appointment Fee &nbsp;&nbsp;&nbsp;&nbsp; Rs. 300
          </p>
          <p className={classes.badge}>
            Qualification: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {content.education_level}
          </p>
          <p className={`${classes.badge} ${classes.badgeSecondary}`}>
            Experience: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {content.information}
          </p>
          <p className={classes.badge}>
            Department: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Medicine
          </p>
          <li>
            <Link
              to={{
                pathname: '/appointments/new',
                doctorId: content.id,
              }}
              className={classes.btn}
            >
              Add Appointment
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
