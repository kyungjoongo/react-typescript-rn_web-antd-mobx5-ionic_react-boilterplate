import {ActivityIndicator, Button, Text, View} from "react-native";
import React, {useEffect} from "react";
import {IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {observer, useObserver} from "mobx-react-lite";
import {useStores} from "./useStore";

type Props = {
    history: any
}


export default observer(
    function DetailScreen(props: Props) {
        const {globalStore} = useStores()

        useEffect(() => {
            globalStore.getListImageList()
        }, [])


        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"/>
                        </IonButtons>
                        <IonTitle>Detail</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <View style={{justifyContent: "center", alignItems: 'center', marginTop: 30,}}>
                        <Text style={{fontSize: 22}}>
                            DetailScreen
                        </Text>
                    </View>
                    <View style={{height: 80}}>
                    </View>
                    <Button title={'goBack'} color={'orange'} onPress={() => {
                        props.history.goBack();
                    }}/>
                    <View style={{height: 50,}}/>
                    <View style={{justifyContent: 'center', alignItems: 'center',}}>
                        <IonButton color={'warning'} style={{color: 'orange', width: '100%'}} fill={'outline'}
                                   onClick={() => {
                                       globalStore.incrementCount();
                                   }}>
                            increment count
                        </IonButton>
                    </View>

                    <View style={{justifyContent: "center", alignItems: 'center', marginTop: 30,}}>
                        <Text style={{fontSize: 22}}>
                            {globalStore.count}
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>

                        {globalStore.loading ?
                            <ActivityIndicator color={'red'}/> : globalStore.imageList.map((item: any) => {
                                return (

                                    <img src={item.urls.regular} style={{width: 250, height: 250, margin: 5,}}/>

                                )
                            })}
                    </View>
                </IonContent>
            </IonPage>
        )
    }
)



