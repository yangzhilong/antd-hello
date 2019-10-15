import React from 'react';
import {Card} from 'antd';
import Demo from './Demo'

export default () => {
    const style = {
        width: '400px',
        margin: '30px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        border: '1px solid #e8e8e8'
    };
    return (
        <div>
            <Card style={style} actions={[<a>操作1</a>, <a>操作2</a>]}>
                <Card.Meta avatar={<img style={{width: '64px', height: '64px', borderRadius: '32px'}} src='https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'/>} 
                title='Alipay'
                description='这是card的内容'
                />
            </Card>

            <Demo />
            
        </div>
    );
}