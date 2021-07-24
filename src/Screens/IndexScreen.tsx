// @flow
import React from "react";
import {inject, observer} from "mobx-react";
import {GlobalStore} from "../Stores/GlobalStore";
import {HistoryStore} from "../Stores/HistoryStore";

type Props = {
    history: any
    globalStore: GlobalStore,
    historyStore: HistoryStore,
}

type State = {};

@inject('globalStore', 'historyStore')
@observer
export default class IndexScreen extends React.Component<Props, State> {

    componentDidMount() {
        const {globalStore, historyStore} = this.props

        globalStore.getList()
    }


    render() {



        return (
            <div>
                <div>
                    {this.props.globalStore.count}
                </div>
                <div>
                    {this.props.historyStore.testCount}
                </div>
                <button onClick={() => this.props.historyStore.incrementCount()}>
                    historyStore
                </button>
                <button onClick={() => this.props.globalStore.incrementCount()}>
                    sdlfksdfasdasdasd
                </button>
                {this.props.globalStore.results.map((item: any) => {
                    return (
                        <div>
                            {item.title}
                        </div>
                    )
                })}
            </div>
        );
    };
}

;




