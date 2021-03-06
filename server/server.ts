import * as http from 'http';
import * as logger from 'logops';

import { app } from './config/express';
import { MongoDB } from './config/mongo-db';

// Porta que o express irá escutar as requisições
const port = process.env.PORT || 3003;

startServer();

async function startServer() {
	logger.info('Iniciando server ............');

	await connectDB();

	http.createServer(app).listen(port, function () {
		logger.info('Servidor escutando na porta: ' + this.address().port);
	});
}

async function connectDB() {
	await MongoDB.connect();
}
