var db = require("../models");
var Router = require('express').Router();

Router.get('/', function(request, response) {
        db.Homes.create(
            {
                "title": "test"
            }
        ).then((home) => {
            db.Rooms.create({
                "title": "living room"
            }).then((room) => {
                home.addRoom(room, {through: {status: true}})
                .then(() => {
                    db.Homes.findAll({include: [db.Rooms]}).then(homes => {
                        return response.json({home: homes});
                }) ;
            });
        });
    });
});

Router.get('/home/:homeId/room/:roomId', (request, response) => {
    db.HomeRooms.findOne({
        where: {
            homeId: request.params.homeId,
            roomId: request.params.roomId
        }
    }).then((homeRoom) => {
        homeRoom.status = false;
        homeRoom.save().then(() => {
            return response.json({homeRoom: homeRoom});
        }).catch(console.log());
    }).catch(console.log);
});

module.exports = Router;