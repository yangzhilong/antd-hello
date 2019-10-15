import React from 'react';
import {Tabs} from 'antd';
import {Tree} from 'antd';

const MyInput = ({value='', onChange}) => {
    return <input value={value} onChange={onChange} />
}

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            activeKey: '2',
            treeSelected: [],
            treeExpandedKeys: []
        };
    }
    handlerChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }
    handlerRest = () => {
        this.setState({
            text: ''
        });
    }
    handlerTabChange = (key) => {
        this.setState({
            activeKey: key
        });
    }
    handlerTreeOnExpand = (treeExpandedKeys) => {
        // console.log(treeExpandedKeys);
        this.setState({
            treeExpandedKeys
        });
    }
    handlerTreeOnSelect = (treeSelected) => {
        const { treeExpandedKeys } = this.state;
        const key = treeSelected[0];

        console.log(treeExpandedKeys);

        if (treeExpandedKeys.includes(key)) {
            // 移除 key
            this.setState({
                treeExpandedKeys: treeExpandedKeys.filter(k => k !== key),
            });
        } else {
            // 添加 key
            this.setState({ treeExpandedKeys: [...treeExpandedKeys, key] });
        }
        this.setState({treeSelected});
    }
    render() {
        return (
            <div>
                <MyInput value={this.state.text} onChange={this.handlerChange}/>
                <button onClick={this.handlerRest}>Rest</button>
                <div>
                    <Tabs activeKey={this.state.activeKey} onChange={this.handlerTabChange}>
                        <Tabs.TabPane tab="Tab 1" key="1">Content of Tab Pane 1</Tabs.TabPane>
                        <Tabs.TabPane tab="Tab 2" key="2">Content of Tab Pane 2</Tabs.TabPane>
                    </Tabs>
                </div>
                <div>
                    <Tree selectedKeys={this.state.treeSelected} expandedKeys={this.state.treeExpandedKeys} onExpand={this.handlerTreeOnExpand} onSelect={this.handlerTreeOnSelect}>
                        <Tree.TreeNode title='第一层' key='1-1'>
                            <Tree.TreeNode title='第二层' key='1-1-2'></Tree.TreeNode>
                        </Tree.TreeNode>
                        <Tree.TreeNode title='第一层' key='1-2'>
                            <Tree.TreeNode title='第二层' key='1-2-1'>
                                <Tree.TreeNode title='第三层' key='1-2-1-1'></Tree.TreeNode>
                            </Tree.TreeNode>
                            <Tree.TreeNode title='第二层' key='1-2-2'></Tree.TreeNode>
                        </Tree.TreeNode>
                    </Tree>

                </div>
            </div>
        );
    }
}
export default Demo;