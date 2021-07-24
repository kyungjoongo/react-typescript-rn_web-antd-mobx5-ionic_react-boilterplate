// @flow
import React from "react";
import {inject, observer} from "mobx-react";
import {GlobalStore} from "../Stores/GlobalStore";
import {HistoryStore} from "../Stores/HistoryStore";
import {ActivityIndicator} from "react-native";

type Props = {
    history: any
    globalStore: GlobalStore,
    historyStore: HistoryStore,
}

type State = {};
const globalStore = new GlobalStore()
export default observer(
    class IndexScreen extends React.Component<Props, State> {

        componentWillMount() {
            globalStore.getList()
        }

        render() {

            if (globalStore.loading) {
                return <ActivityIndicator/>
            }

            return (
                <div>
                    <div>
                        {globalStore.count}
                    </div>
                    <button onClick={() => globalStore.incrementCount()}>
                        dslkflkf
                    </button>
                    {globalStore.results.map((item: any) => {
                        return (
                            <div>
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            );
        };
    }
)

;




