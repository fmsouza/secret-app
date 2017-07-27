import { action, observable } from 'mobx';

class PasswordsStore {

    @observable list = [];

    @action registerPasswords(items) {
        this.list = this.list.concat(items);
        console.log(this.list);
    }

    @action registerNewPassword(item) {
        this.list.push(item);
    }

    @action removePassword(item) {
        const index = this.list.findIndex(obj => obj.id === item.id);
        if (index > -1) this.list.splice(index, 1);
    }
}

export default new PasswordsStore();