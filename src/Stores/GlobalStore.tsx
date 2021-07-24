import {action, observable} from "mobx";
import _ from "lodash";


export class GlobalStore {
    constructor() {


    }

    @observable results = []
    @observable loading: boolean = false;


    @observable count = 0;
    @observable count2 = 0;

    @action
    incrementCount() {
        this.count = this.count + 1;
        this.count2 += 5
    }

    setLoading(value: boolean) {
        this.loading = value;
    }

    @action
    decrementCount() {
        this.count = this.count - 1;
        this.count2 -= 5;
    }

    @action
    setResults(arrList: any) {
        this.results = arrList;
        console.info("setResults====>", _.cloneDeep(this.results));
    }


    async getList() {
        this.setLoading(true)
        this.setResults(await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()))
        setTimeout(() => {
            this.setLoading(false)
        }, 1111)
    }


}


