const express = require('express');
const Router = express.Router();
const { checkToken } = require('../middlewares/Auth')
const {createAppointment,getAllAppointments,getUserAppointments,getAppointment,getDoctorAppointments,deleteAppointment} = require('../controllers/Appointment');



Router.post('/:id', createAppointment)
Router.get('/:id', getUserAppointments)
Router.get('/',getAllAppointments)
Router.get('/one/:id',getAppointment)
Router.get('/doctor/:id',getDoctorAppointments)
Router.delete('/:id',deleteAppointment)





module.exports = Router;