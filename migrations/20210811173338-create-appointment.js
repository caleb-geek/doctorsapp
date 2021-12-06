'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateBooked: {
        type: Sequelize.STRING
      },
      doctor: {
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
    await queryInterface.dropTable('Appointments');
  }
};