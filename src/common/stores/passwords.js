import { action, observable } from 'mobx';

class PasswordsStore {

    @observable list = [];

    @action registerNewPassword(item) {
        const id = (this.list.length > 0) ? this.list[this.list.length-1].id + 1 : 1;
        this.list.push({ ...item, id });
    }

    @action removePassword(item) {
        const index = this.list.findIndex(obj => obj.id === item.id);
        if (index > -1) this.list.splice(index, 1);
    }
}

export default new PasswordsStore();