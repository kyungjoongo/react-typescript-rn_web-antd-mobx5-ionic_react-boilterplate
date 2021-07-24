import {observable, action} from "mobx";
import {autobind} from 'core-decorators';
import * as Realm from "realm-web";
import _ from 'lodash'

class SharedService {
    constructor() {

    }


    @observable results = []
    @observable loading: boolean = false;

    setLoading(value: boolean) {
        this.loading = value
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

const sharedService = new SharedService();

export default sharedService
