import {ActivityIndicator, Button, Image, Text, View} from "react-native";
import React, {useEffect, useRef, useState} from "react";
import {IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";
import globalStore from "../Stores/GlobalStore";
import {getBookmarks} from "./SharedService";
import {TypeBookMark} from "../Types/Types";
import {Button as AButton, message} from 'antd'

type Props = {
    history: any
}


export const HomeScreen = (props: Props) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const willMount = useRef(true);
    if (willMount.current) {
        //todo : componentWillMount
    }


    useEffect(() => {
        initFetchData();
    }, [])

    async function initFetchData() {
        setLoading(true)
        let results: any = await getBookmarks();
        setResults(results)
        setLoading(false);
    }

    async function insertOne() {
    }

    async function updateOne() {
    }


    async function delelteOne(paramId: any) {
    }

    return useObserver(() => (
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
                    <AButton onClick={() => message.success('antd button', 1)} style={{width: '100%'}} type="primary">Primary
                        Button</AButton>
                </View>
                {!willMount.current && results.map((item: TypeBookMark, index) => {
                    return (
                        <View>
                            <View style={{margin: 10,}}>
                                <Image source={{uri: item.lawyerImage}} style={{width: 150, height: 150,}}/>
                                <Text style={{fontSize: 25}}>{item.lawyerUserId} - {item._id.toString()}</Text>
                                <Text style={{fontSize: 25}}>{item.lawyerName} </Text>
                                <Button title={'delete'} onPress={() => {

                                    delelteOne(item._id);
                                }}/>
                            </View>
                        </View>
                    )
                })}
            </IonContent>
        </IonPage>
    ))
}



