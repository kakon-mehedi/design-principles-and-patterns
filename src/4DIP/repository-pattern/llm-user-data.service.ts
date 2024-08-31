import { IUserRepository } from './abstraction-user-repository';
import { IUser } from './user.type';

export let users: IUser[] = [
	{ id: 1, name: 'Kakon', email: 'kakon@gmail.com', phone: '010003838383' },

	{
		id: 2,
		name: 'Borsha',
		email: 'borsha@gmail.com',
		phone: '010003838383',
	},
];

export class InMemoryUserDataService implements IUserRepository {
	getUsers() {
		return users;
	}

	getUser(userId: string) {
		const user = users.find((u) => u.id == userId);
		return user;
	}

	addUser(user: IUser) {
		users.push(user);
		return user;
	}

	removeUser(userId: string) {
		users = users.filter((u) => u.id != userId);
	}

	updateUser(userId: string, updatedUserInfo: IUser) {
		const user = users.find((u) => u.id == userId);
		const updatedUser = { ...user, ...updatedUserInfo };

		return updatedUser;
	}
}

export class ApiUserDataService implements IUserRepository {
	API_BASE_URL = 'https://jsonplaceholder.typicode.com/users';

	async getUsers() {
		const usersRes = await fetch(this.API_BASE_URL);
		const users: IUser[] = await usersRes.json();
		return users;
	}

	async getUser(userId: string) {
		const url = this.API_BASE_URL + `/${userId}`;

		const userResp = await fetch(url);
		const user = await userResp.json();

		return user;
	}

	async addUser(user: IUser) {
		users.push(user);
		return user;
	}

	async removeUser(userId: string) {
		users = users.filter((u) => u.id !== userId);
	}

	async updateUser(userId: string, updatedUserInfo: IUser) {
		const user = users.find((u) => u.id === userId);
		const updatedUser = { ...user, ...updatedUserInfo };

		return updatedUser;
	}
}
