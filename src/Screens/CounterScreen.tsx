import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, setResults} from "./counterSlice";
import {Button, Text, View} from "react-native";

type TypeCounter = {
    counter: number,
    results: [],
}


export const CounterScreen = (props: any) => {
    // useDispatch 사용
    const dispatch = useDispatch()
    const counterStore: any = useSelector((state: TypeCounter) => {

        console.info("counterStore====>", state);

        return state;
    })

    useEffect(() => {
        init();
    }, [])

    async function init() {
        let result = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        dispatch(setResults(result))
    }

    return (
        <div>
            <Button title={'sdlfk'}
                    onPress={() => {
                        dispatch(increment())
                    }}
            >
                sldkfldskf
            </Button>
            <View>
                <Text>{counterStore.counter}</Text>
                <Text>{counterStore.counter}</Text>
            </View>
            {counterStore.results.map((item: any, index: number) => {
                return (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )
            })}
        </div>
    )
}
