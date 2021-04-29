import {Button, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useObserver} from "mobx-react-lite";

type Props = {
    history: any
}


export default function LoginScreen(props: Props) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        props.history.push('/HomeScreen')

    }, [])


    return useObserver(() => (
        <View>
            <Button title={'Test'} onPress={() => {
            }}/>

        </View>
    ))
}



