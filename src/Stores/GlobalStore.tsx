import {action, computed, observable} from "mobx";
import _ from "lodash";
import {makeAutoObservable} from 'mobx'
import {toJS} from 'mobx';

export class GlobalStore {
    constructor() {
        makeAutoObservable(this)
    }

    loading: boolean = false;

    count = 0;
    count2 = 0;


    incrementCount() {
        this.count = this.count + 1;
        this.count2 += 5
    }

    setLoading(value: boolean) {
        this.loading = value;
    }


    decrementCount() {
        this.count = this.count - 1;
        this.count2 -= 5;
    }

    results = []

    setResults(arrList: any) {
        this.results = arrList;
        console.info("setResults====>", _.cloneDeep(this.results));
    }


    /**
     * todo: 리시트를 가지고와서 셋팅
     */
    async getList() {
        this.setLoading(true)
        this.setResults(await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()))

        console.info("getList====>", toJS(this.results));
        setTimeout(() => {
            this.setLoading(false)
        }, 550)
    }


    imageList = []

    setImageList(arrList: any) {
        this.imageList = arrList
    }

    @computed
    get doubleCount() {
        return this.count + 2;
    }


    async getListImageList() {
        this.setLoading(true)
        const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
        const page = 1;

        let result = await fetch(`https://api.unsplash.com/photos/?client_id=${key}&page=${page}&per_page=30`).then(res => res.json()).catch(err => {
            throw err;
        });
        this.imageList = result

        console.info("getListImageList====>", toJS(this.imageList));

        setTimeout(() => {
            this.setLoading(false)
        }, 550)
    }
}


