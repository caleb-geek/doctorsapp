'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DoctorProfiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      education_level: {
        type: Sequelize.STRING
      },
      specialization: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      userId: {
        type:Sequelize.INTEGER,
        references :{
          model:'Users',
          key:'id'
        },
        onDelete:"SET NULL",
        onUpdate:"CASCADE"
      },
      information: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DoctorProfiles');
  }
};