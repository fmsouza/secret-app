import { action, observable } from 'mobx';

class PasswordsStore {

    @observable list = [];

    @action newPassword(item) {
        this.list.push(item);
    }

}

export default new PasswordsStore();