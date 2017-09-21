import { UserDAO } from '../dal';
import * as assert from "assert";

export class UserService {

	userDAO = new UserDAO();

	async getUsers() {

		return await this.userDAO.getUsers();

		//     return [
		//       { userId: 111, userName: 'Joao 1' },
		//       { userId: 222, userName: 'Joao 2' },
		//       { userId: 333, userName: 'Joao 3' },
		//       { userId: 444, userName: 'Joao 4' },
		//       { userId: 555, userName: 'Joao 5' }];
	}

	insertUser(user: any): any {
		let daoReturn = this.userDAO.insertUser({ userName: user.userName });
		assert.equal(daoReturn.result.n, 1);
	}
}
