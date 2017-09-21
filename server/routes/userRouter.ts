import { Router, Request, Response, NextFunction } from 'express';
import * as logger from 'logops';

import { UserService } from '../services';

export const userRouter: Router = Router();

const userService = new UserService();

userRouter.get('/all', function (request: Request, response: Response, next: NextFunction) {

	try {

		let usersOnService = userService.getUsers().then(
			users => response.json({
				status: 'sucesso',
				data: users
			})
		);

	} catch (err) {
		logger.error('## Erro ao obter conexão com MongoBD: %j', err);
		throw err;
	}
});

