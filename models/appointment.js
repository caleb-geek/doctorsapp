'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Appointment.belongsTo(models.User);
    }
  };
  Appointment.init({
    dateBooked: DataTypes.STRING,
    doctor: DataTypes.STRING,
    userId: {
      type:DataTypes.INTEGER
      ,
      references :{
        model:'Users',
        key:'id'
      },
      onDelete:"SET NULL",
      onUpdate:"CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};