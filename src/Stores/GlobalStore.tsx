import {action, observable} from "mobx";


class GlobalStore {
    constructor() {

    }


    @observable count = 0;
    @observable count2 = 0;

    @action
    incrementCount() {
        this.count = this.count + 1;
        this.count2 += 5
    }

    @action
    decrementCount() {
        this.count = this.count - 1;
        this.count2 -= 5;
    }

}

const globalStore = new GlobalStore();

export default globalStore
