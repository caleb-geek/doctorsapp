import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:5000/';

const getDoctors = () => axios.get(`${API_URL}api/profile`);
const getAllDoctors = () => axios.get(`${API_URL}api/v1/users`);


const getDoctor = id => axios.get(`${API_URL}api/profile/${id}`);
const getAppointments = id => axios.get(`${API_URL}api/appointment/${id}`);
const getAppointment = (id) => axios.get(`${API_URL}api/appointment/one/${id}`);
const postAppointment = (userId, doctor, appointmentDate) => axios.post(`${API_URL}api/appointment/${userId}`, { doctor: doctor, dateBooked: appointmentDate });
const deleteAppointment = (appointmentId) => axios.delete(`${API_URL}api/appointment/${appointmentId}`);

export default {
  getDoctors,
  getDoctor,
  getAppointments,
  getAppointment,
  postAppointment,
  deleteAppointment,
  getAllDoctors,
};
