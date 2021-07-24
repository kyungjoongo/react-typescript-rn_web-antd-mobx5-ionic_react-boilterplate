import {action, observable} from "mobx";


export class HistoryStore {

    @observable testCount = 0;

    @action
    incrementCount() {
        this.testCount = this.testCount + 1;
    }


}

