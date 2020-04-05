// Arquivo para rotas

const express = require('express'); // Importando o express

const OngController = require('./controllers/OngController'); // Importando OngController
const IncidentController = require('./controllers/IncidentController'); // Importando OngController
const ProfileController = require('./controllers/ProfileController'); // Importando ProfileController
const SessionController = require('./controllers/SessionController'); // Importando SessionController

const connection = require('./database/connection'); // Fazendo a conexão com o banco de dados

const routes = express.Router(); // Retirando o módulo de rotas em uma nova variável

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes; // exportando as rotas