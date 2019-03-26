'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rooms = sequelize.define('Rooms', {
    title: DataTypes.STRING
  }, {});
  Rooms.associate = function(models) {
    Rooms.belongsToMany(models.Homes, {through: models.HomeRooms, foreignKey: "roomId"});
  };
  return Rooms;
};