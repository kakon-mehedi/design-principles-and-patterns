import { IUser } from './user.type';

let users: IUser[] = [
	{ id: 1, name: 'Kakon', email: 'kakon@gmail.com', phone: '010003838383' },

	{
		id: 2,
		name: 'Borsha',
		email: 'borsha@gmail.com',
		phone: '010003838383',
	},
];


export function getInMemoryUsers() {
    return users;
}

export function updateInMemoryUsers(updatedUsers: IUser[]) {
    users = updatedUsers;
}