import { IUserRepository } from './abstraction-user-repository';
import { IUser } from './user.type';

export class UserService {
	constructor(private _dataService: IUserRepository) {}

	async getUsers() {
		return await this._dataService.getUsers();
	}

	async getUser(userId: string) {
		return await this._dataService.getUser(userId);
	}

	async addUser(user: IUser) {
		return await this._dataService.addUser(user);
	}
}
