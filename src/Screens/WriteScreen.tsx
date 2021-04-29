import {Text, View} from "react-native";
import React from "react";
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {useObserver} from "mobx-react-lite";

type Props = {
    history: any
}

export default function WriteScreen(props: Props) {
    return useObserver(() => (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                    <IonTitle>WriteScreen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <View>
                    <Text>WriteScreen</Text>
                </View>
            </IonContent>
        </IonPage>
    ))
}



