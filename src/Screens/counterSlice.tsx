import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 0,
        results: [],
    },
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.counter += action.payload
        },
        increment2222(state) {
            state.counter++
        },
        setResults(state, action: PayloadAction<any>) {
            state.results = action.payload
        }
    },
})


export const {increment, decrement, increment2222, setResults} = counterSlice.actions

export default counterSlice


