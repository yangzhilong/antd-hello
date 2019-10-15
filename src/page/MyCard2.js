import React,{Component} from 'react';
import {Card, Button} from 'antd';
import {connect} from 'dva';

const namespace = 'myCard';

const mapStateToPorps = (state) => {
    const cardList = state[namespace].cardList;
    return {
        cardList
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        onClickAdd: (newCard) => {
            let action = {
                type: `${namespace}/handlerClick`,
                payload: newCard
            };
            dispatch(action);
        },
        onClickAdd2: () => {
            let action = {
                type: `${namespace}/handlerClick2`
            };
            dispatch(action);
        },
    }
}

@connect(mapStateToPorps, mapDispathToProps)
class MyCard2 extends Component {
    render() {
        return (
            <div>
                {
                    this.props.cardList.map(item =>{
                        return (
                            <Card key={item.id}>
                                <div>Q: {item.setup}</div>
                                <div><strong>A: {item.punchline}</strong></div>
                            </Card>
                        )
                    })
                }
                <div>
                    <Button onClick={() => {
                        this.props.onClickAdd({
                            setup: 'card-2 ',
                            punchline: 'punchline 2-'
                        })
                    }}>添加卡片</Button>
                    <Button onClick={this.props.onClickAdd2}>添加卡片2</Button>
                </div>
            </div>
        )
    }
}
export default MyCard2;