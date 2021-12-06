const Appointment = require('../../models').Appointment;

const User = require('../../models').User;

//Create Appointment
exports.createAppointment = (req,res) => {
  const {dateBooked,doctor,} = req.body
  
  
    return Appointment.create({dateBooked:dateBooked,doctor:doctor,userId:req.params.id})
      .then((appointment)=>{
        return res.status(201).json(appointment);
      }).catch((err) => {
        return res.status(400).json({message:err.message})
      })
  }
    //Get all appointments
      exports.getAllAppointments = (req,res) => {
        return Appointment.findAll({ include:[User]})
        .then((appointments) => {
          
          res.status(200).json(appointments)
        })
        .catch((err) => {
          console.log(err)
          res.status(404).json(err)
        })
      }

      //Get all appointments for one user
      exports.getUserAppointments = (req,res) => {
        return Appointment.findAll({where:{ userId:req.params.id}})
        .then((appointments) => {
          
          res.status(200).json(appointments)
        })
        .catch((err) => {
          console.log(err)
          res.status(404).json(err)
        })
      }

     // Get one
 exports.getAppointment = (req, res) => {
  return Appointment.findByPk(req.params.id).then(appointment => {
    res.status(200).json(appointment)
  }).catch((err) => {
    return res.status(400).json({ message: err.message })
  })
  }
      //Get all appointments for one doctor
      exports.getDoctorAppointments = (req,res) => {
        return Appointment.findAll({where:{ doctor:req.params.id}})
        .then((appointments) => {
          
          res.status(200).json(appointments)
        })
        .catch((err) => {
          console.log(err)
          res.status(404).json(err)
        })
      }

    //Delete Appointment

exports.deleteAppointment =async (req,res) => {
  
    return  Appointment.destroy({
      where: {
         id: req.params.id
       }})
       .then(()=>{
         res.status(200).json({message:"Appointment has been deleted"})
       })
       .catch((err)=>{
         res.status(404).json({error:err})
       })
  
  
  }
  