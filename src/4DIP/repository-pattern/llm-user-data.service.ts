import { IUserRepository } from './abstraction-user-repository';
import { getInMemoryUsers, updateInMemoryUsers } from './user-inmemory-data';
import { IUser } from './user.type';

const users = getInMemoryUsers();

export class InMemoryUserDataService implements IUserRepository {
	async getUsers() {
		return users;
	}

	async getUser(userId: string) {
		const user = users.find((u) => u.id == userId);
		return user;
	}

	async addUser(user: IUser) {
		users.push(user);
		return user;
	}

	async removeUser(userId: string) {
		const userList = users.filter((u: any) => u.id != userId);
		updateInMemoryUsers(userList);
	}

	async updateUser(userId: string, updatedUserInfo: IUser) {
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
		const userList = users.filter((u) => u.id !== userId);
		updateInMemoryUsers(userList);
	}

	async updateUser(userId: string, updatedUserInfo: IUser) {
		const user = users.find((u) => u.id === userId);
		const updatedUser = { ...user, ...updatedUserInfo };

		return updatedUser;
	}
}
