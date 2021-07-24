import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decrement5, increment, setResult} from "./counterReducer";
import {Button, Text, View} from "react-native";

type TypeCounter = {
    number: number,
    results: [],
}


export const CounterScreen = (props: any) => {
    // useDispatch 사용
    const dispatch = useDispatch()
    const globalStore: any = useSelector((state: TypeCounter) => {
        return state;
    })

    useEffect(() => {
        init();
    }, [])

    async function init() {
        let result = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
        dispatch(setResult(result))
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

            <Button title={'decrement5'}
                    onPress={() => {
                        dispatch(decrement5())
                    }}
            >
            </Button>

            <View>
                <Text>{globalStore.number}</Text>
                <Text>{globalStore.number}</Text>
            </View>
            {globalStore.results.map((item: any, index: number) => {
                return (
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                )
            })}
        </div>
    )
}
