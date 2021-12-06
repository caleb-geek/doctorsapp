'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DoctorProfile.belongsTo(models.User);
    }
  };
  DoctorProfile.init({
    education_level: DataTypes.STRING,
    specialization: DataTypes.STRING,
    photo: DataTypes.STRING,
    userId: {
      type:DataTypes.INTEGER
      ,
      references :{
        model:'Users',
        key:'id'
      },
      onDelete:"SET NULL",
      onUpdate:"CASCADE"
    },
    information: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'DoctorProfile',
  });
  return DoctorProfile;
};