'use strict';
module.exports = (sequelize, DataTypes) => {
  const HomeRooms = sequelize.define('HomeRooms', {
    homeId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  HomeRooms.associate = function(models) {
    // associations can be defined here
  };
  return HomeRooms;
};