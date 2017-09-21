import { UserDAO } from './../dal/userDAO';
import { UserDAO } from '../dal';

export class UserService {

	userDAO = new UserDAO();

	async getUsers() {

		return await userDAO.getUsers();

		//     return [
		//       { userId: 111, userName: 'Joao 1' },
		//       { userId: 222, userName: 'Joao 2' },
		//       { userId: 333, userName: 'Joao 3' },
		//       { userId: 444, userName: 'Joao 4' },
		//       { userId: 555, userName: 'Joao 5' }];
	}

	insertUser(user: any): any {
		let daoReturn = this.contaDAO.insertConta({ nome: nomeConta });
		assert.equal(daoReturn.result.n, 1);
	}
}
