import React, { useState, useEffect } from 'react';
import { Redirect, useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserService from '../services/user.service';
import { useAlert } from 'react-alert';

const Appointment = () => {
  const [content, setContent] = useState('');
  const [doctor, setDoctor] = useState('');
  const [loading, setLoading] = useState(true);
  const [successful, setSuccessful] = useState(false);
  const [error, setError] = useState(false);
  const { user: currentUser } = useSelector(state => state.auth);
  const alert = useAlert();
  

  const { id } = useParams();
  useEffect(() => {
    UserService.getAppointment(id).then(
      response => {
        setContent(response.data);
        return response.data.doctor_id;
      },
      error => {
        setLoading(false);
        setError(true);
        const message = (error.response
            && error.response.data
            && error.response.data.message)
          || error.message
          || error.toString();

        setContent(message);
      },
    ).then(doctorId => UserService.getDoctor(doctorId))
      .then(response => {
        setLoading(false);
        setDoctor(response.data);
      });
  }, []);

  const handleClick = () => {
    setLoading(true);
    UserService.deleteAppointment(id).then(() => {
      alert.show('Appointment Deleted', {
        type: 'success',
        timeout: 5000,
      });
      setLoading(false);
      setSuccessful(true);
    });
  };

  if (successful) {
    return <Redirect to="/appointments" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <span className="spinner-border spinner-border-lg" />
        
          <div>
            <p>
              Appointment Id: &nbsp;
              {content.id}
            </p>
            <p>
              With &nbsp;
              <Link >
                {content.doctor}
              </Link>
            </p>
            <p>
              On &nbsp;
              {new Date(content.dateBooked).toUTCString()}
            </p>
            <button className="btn btn-primary btn-block" type="button" onClick={handleClick} disabled={loading}>
              Delete
            </button>
          </div>
          
       
      </header>
    </div>
  );
};

export default Appointment;
