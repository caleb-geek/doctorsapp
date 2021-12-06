const fs = require('fs');
const DoctorProfile = require('../../models').DoctorProfile;
const User = require('../../models').User;


//Create DoctorProfile
exports.createProfile = (req,res) => {
  const {education_level,specialization,information} = req.body
  
  console.log(req.body)
    return DoctorProfile.create({education_level:education_level,specialization:specialization,information:information,userId:3})
      .then((profile)=>{
        return res.status(201).json(profile);
      }).catch((err) => {
        return res.status(400).json({message:err.message})
      })
  }
   // View all doctor profiles
exports.getAllDoctorProfiles= (req,res) => {
  return DoctorProfile.findAll({ include: User })
  .then((profile) => {
    res.status(200).json(profile)
  })
  .catch((err) => {
    res.status(404).json(err)
  })
}

//Get specific doctor profile
exports.getDoctorProfile= (req, res) => {
return DoctorProfile.findByPk(req.params.id,{ include: User })
.then(profile => {
  res.status(200).json(profile)
})
}

//Delete Doctor Profile

exports.deleteDoctorProfile =async (req,res) => {
const doctor= await DoctorProfile.findByPk(parseInt(req.params.id))
const filename = doctor.dataValues.photo.split('/images/')[1];
fs.unlink('images/' + filename,()=>{
  return DoctorProfile.destroy({
    where: {
       id: req.params.id
     }})
     .then(()=>{
       res.status(200).json({message:"Doctor has been deleted"})
     })
     .catch((err)=>{
       res.status(404).json({error:err})
     })
})

}
