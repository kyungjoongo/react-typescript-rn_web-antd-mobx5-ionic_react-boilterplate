import React from 'react'
import {HistoryStore} from "../Stores/HistoryStore";
import {GlobalStore} from "../Stores/GlobalStore";

export const storesContext = React.createContext({
    globalStore: new GlobalStore(),
    historyStore: new HistoryStore(),
})

export const useStores = () => {
    return React.useContext(storesContext)
}
