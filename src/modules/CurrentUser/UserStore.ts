import { action, observable } from 'mobx'
import { IUser } from './User';
import { userLocalStorage } from './User';

export class UserStore {
    @observable user: IUser | null = null;

    constructor() {
        this.setUser(userLocalStorage.userInfo);
    }

	// @computed
	// get completedTasks(): number {
	//   return this.todoList.filter((todo) => todo.isComplete).length
	// }

	@action
	setUser(user: IUser) {
        this.user = user;
        userLocalStorage.userInfo = user;
    }

	@action
    clearUser() {
        this.user = null;
        userLocalStorage.userInfo = null;
    }
}

export default new UserStore();
