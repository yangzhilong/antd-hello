import React,{Component} from 'react';
import { Card } from 'antd';
import { connect } from 'dva';

const namespace = 'ajax';

const mapStateToPorps = (state) => {
    let cardList = state[namespace].cardList;
    return {
        cardList
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        onDidMount: () => {
            let action = {
                type: `${namespace}/queryInitData`
            }
            dispatch(action);
        }
    }
}

@connect(mapStateToPorps, mapDispathToProps)
class Ajax extends Component {
    componentDidMount() {
        this.props.onDidMount();
    }
    render() {
        return (
            <div>
                {
                    this.props.cardList.map(item => {
                        return (
                            <Card key={item.id}>
                                <div>Q: {item.setup}</div>
                                <div>
                                <strong>A: {item.punchline}</strong>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
export default Ajax;