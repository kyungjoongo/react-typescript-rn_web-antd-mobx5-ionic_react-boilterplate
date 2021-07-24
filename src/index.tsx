import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import {GlobalStore} from "./Stores/GlobalStore";
import {HistoryStore} from "./Stores/HistoryStore";
import {Provider} from "mobx-react";
import {enableLogging} from 'mobx-logger';

const globalStore = new GlobalStore()
const historyStore = new HistoryStore()

enableLogging(
    {
        predicate: () => true,
        action: true,
        reaction: false,
        transaction: false,
        compute: true,
    }
);

const stores = {
    globalStore,
    historyStore,
};

ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>

    ,
    document.getElementById('root')
);
