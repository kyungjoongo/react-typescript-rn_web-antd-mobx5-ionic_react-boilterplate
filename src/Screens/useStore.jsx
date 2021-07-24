import React from 'react'
import {GlobalStore} from "../Stores/GlobalStore";
import {HistoryStore} from "../Stores/HistoryStore";

export const storesContext = React.createContext({
    globalStore: new GlobalStore(),
    historyStore: new HistoryStore()
})

export const useStores = () => React.useContext(storesContext)
