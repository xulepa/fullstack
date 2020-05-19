const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionContoller = require('./Controllers/SessionController');
const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs' , OngController.create);
routes.post('/incidents' , IncidentController.create);
routes.get('/incidents' , IncidentController.index);
routes.delete('/incidents/:id' , IncidentController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionContoller.create);


module.exports = routes;