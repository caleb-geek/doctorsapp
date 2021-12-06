import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserService from '../services/user.service';

const DoctorAppointments = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user: currentUser } = useSelector(state => state.auth);
  let appointments;

  useEffect(() => {
       
      UserService.getAppointments(5).then(
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

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  if (!loading && content.length === 0) {
    appointments = (
      <h4>
        You do not have any appointment. Create one
        <Link to="/appointments/new">
          here
        </Link>
      </h4>
    );
  } else {
    appointments = content && content.map(appointment => {
      const d = new Date(appointment.dateBooked);
      const date = d.toUTCString();
      return (
        <Link to={`/appointments/${appointment.id}`} key={appointment.id}>
          <div className="card m-4">
            <div className="card-body">
              <p>
                On &nbsp;
                {date}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  }

  return (
    <div className="container text-center">
      <h3>Appointments</h3>
      {loading && <span className="spinner-border spinner-border-lg" />}
      <div className="d-flex flex-wrap">
        {appointments}
      </div>
    </div>
  );
};

export default DoctorAppointments;
