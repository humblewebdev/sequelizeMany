'use strict';
module.exports = (sequelize, DataTypes) => {
  const Homes = sequelize.define('Homes', {
    title: DataTypes.STRING
  }, {});
  Homes.associate = function(models) {
    Homes.belongsToMany(models.Rooms, {through: models.HomeRooms, foreignKey: "homeId"});
  };
  return Homes;
};