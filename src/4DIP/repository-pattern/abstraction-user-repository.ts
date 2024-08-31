import { IUser } from './user.type';

export interface IUserRepository {
	getUsers: () => Promise<IUser[]>;
	getUser: (userId: string) => Promise<IUser | undefined>;
	addUser: (user: IUser) => Promise<IUser>;
	removeUser: (userId: string) => void;
	updateUser: (userId: string, updatedUserInfo: IUser) => Promise<IUser>;
}
