import { action, observable } from 'mobx';

class CounterStore {

    @observable count = 0;

    @action increment() {
        this.count++;
    }

}

export default new CounterStore();