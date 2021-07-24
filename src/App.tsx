import React from 'react';
import './Styles/App.css';
import {IonApp, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import {Route,} from "react-router-dom";
import DetailScreen from "./Screens/DetailScreen";
//todo: antd css
import 'antd/dist/antd.css';


import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import WriteScreen from "./Screens/WriteScreen";
import {CounterScreen} from "./Screens/CounterScreen";
import HomeScreen from "./Screens/HomeScreen";

type Props = {};
type State = {
    loading: boolean,
};


export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    render() {
        return (
            <IonApp>
                <IonReactRouter>
                    <IonRouterOutlet>
                        <Route path="/" exact component={HomeScreen}/>
                        <Route path="/CounterScreen" exact component={CounterScreen}/>
                        <Route path="/DetailScreen" exact component={DetailScreen}/>
                        <Route path="/WriteScreen" exact component={WriteScreen}/>
                    </IonRouterOutlet>
                </IonReactRouter>
            </IonApp>
        );
    };
};


