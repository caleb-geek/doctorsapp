const express = require('express');
const Router = express.Router();
const { checkToken } = require('../middlewares/Auth')
const {createProfile,getAllDoctorProfiles,getDoctorProfile,deleteDoctorProfile} = require('../controllers/DoctorProfile');



Router.post('/:id', createProfile)
Router.get('/:id', getDoctorProfile)
Router.get('/',getAllDoctorProfiles)
Router.delete('/:id',deleteDoctorProfile)





module.exports = Router;