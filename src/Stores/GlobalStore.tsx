import {observable, action} from "mobx";
import {autobind} from 'core-decorators';
import * as Realm from "realm-web";


class GlobalStore {
    constructor() {

    }


    @observable count = 0;

    @action
    incrementCount() {
        this.count = this.count + 1;
    }

    @action
    decrementCount() {
        this.count = this.count - 1;
    }

}

const globalStore = new GlobalStore();

export default globalStore
