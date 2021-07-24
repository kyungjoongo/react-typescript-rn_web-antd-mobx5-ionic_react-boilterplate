import {ActivityIndicator, Button, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {observer, useObserver} from "mobx-react-lite";
import {TypeBookMark} from "../Types/Types";
import {Button as AButton, message} from 'antd'
import sharedService from "../Stores/SharedService";
import {useStores} from "./useStore";

type Props = {
    history: any
}


export default function HomeeScreen(props: Props) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const {globalStore, historyStore} = useStores()

    const willMount = useRef(true);
    if (willMount.current) {
        //todo : componentWillMount
    }


    useEffect(() => {
        initFetchData();
    }, [])

    async function initFetchData() {
        await globalStore.getList();
        await historyStore.incrementCount()
    }

    return useObserver(() => (
        (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton>

                            </IonMenuButton>
                        </IonButtons>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    {loading && <ActivityIndicator color={'red'}/>}
                    <View>
                        <IonToolbar>
                            <IonTitle>Home</IonTitle>
                        </IonToolbar>
                    </View>
                    <Button title={'dslfk'} onPress={() => historyStore.incrementCount()}/>
                    <Text>
                        testCount: {historyStore.testCount}
                    </Text>
                    <Text>
                        doubleCount  {globalStore.doubleCount}
                    </Text>
                    <View style={{height: 50}}/>
                    <Button title={'push'} onPress={() => {
                        props.history.push('/DetailScreen')
                    }}/>
                    <View style={{height: 25,}}/>

                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 25}}>{globalStore.count}</Text>
                    </View>
                    <View style={{height: 25,}}/>
                    <View>
                        <IonButton fill={'outline'} onClick={() => {
                            globalStore.incrementCount();
                        }}>
                            increment count
                        </IonButton>
                        <View style={{height: 25,}}/>
                        <IonButton fill={'outline'} onClick={() => {
                            globalStore.decrementCount();
                        }}>
                            decrement Count
                        </IonButton>
                        <View style={{height: 50,}}/>
                        <IonButton fill={'outline'} color={'warning'} onClick={() => {
                            props.history.push('/WriteScreen')
                        }}>
                            WriteScreen
                        </IonButton>
                    </View>
                    <View style={{height: 30,}}/>
                    <View style={{width: '100%', justifyContent: 'center', alignItems: "center"}}>
                        <AButton onClick={() => message.success('antd button', 1)} style={{width: '100%'}}
                                 type="primary">Primary
                            Button</AButton>
                    </View>
                    {globalStore.loading ? <View style={{width: window.innerWidth, height: 300, marginTop: 70}}>
                            <ActivityIndicator color={'orange'} size='large'/>
                        </View> :
                        <View style={Styles.test001}>
                            {globalStore.results.map((item: TypeBookMark, index) => {
                                return (
                                    <View style={{justifyContent: "center",}}>
                                        <Text>{item.name}</Text>
                                    </View>
                                )
                            })}
                        </View>

                    }
                    <IonButton fill={'outline'}>
                        sldkflsdf
                    </IonButton>
                </IonContent>
            </IonPage>
        )
    ))
}

const Styles = StyleSheet.create({
    test001: {
        marginTop: 10,
        justifyContent: "center",
        alignItems: 'center',
    },
});



