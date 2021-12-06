const express = require('express');
const Router = express.Router();
const { checkToken } = require('../middlewares/Auth')
const { getUser,getAllDoctors,createUser,login} = require('../controllers/User');


Router.get('/:id', getUser)
Router.get('/', getAllDoctors)
Router.post('/', createUser)
Router.post('/login', login)



module.exports = Router;