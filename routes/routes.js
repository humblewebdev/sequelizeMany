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
                    return response.json(homes);
                }) ;
            });
        });
    });

    

    
});

module.exports = Router;