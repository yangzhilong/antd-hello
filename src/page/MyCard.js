import React,{Component} from 'react';
import {Card, Button} from 'antd';

class MyCard extends Component {
    constructor(props) {
        super(props);
        this.index = 3;
        this.state = {
            cardList: [
                {
                    id: 1,
                    setup: 'card 1',
                    punchline: 'punchline 1'
                },{
                    id: 2,
                    setup: 'card 2',
                    punchline: 'punchline 2'
                }
            ]
        }
    }
    handlerClick = () => {
        this.setState(prevState => {
            let index = this.index++;
            let card = {
                id: index,
                setup: 'card '+index,
                punchline: 'punchline '+index
            }
            return {
                cardList: prevState.cardList.concat(card)
            }
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.cardList.map(item =>{
                        return (
                            <Card key={item.id}>
                                <div>Q: {item.setup}</div>
                                <div><strong>A: {item.punchline}</strong></div>
                            </Card>
                        )
                    })
                }
                <div>
                    <Button onClick={this.handlerClick}>添加卡片</Button>
                </div>
            </div>
        )
    }
}
export default MyCard;