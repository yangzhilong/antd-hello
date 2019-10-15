export default {
    /** 设置page文件夹为非复数（pages -> page） */
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }]
    ],
    routes: [{
        path: '/',
        component: '../../layout/index',
        routes: [{
                path: '/',
                component: './HelloWorld'
            },{
                path: 'hello',
                component: './HelloWorld'
            },{
                path: 'first',
                component: './FirstPage'
            },{
                path: 'second',
                component: './SecondPage'
            },{
                path: 'third',
                component: './ThirdPage'
            },{
                path: 'card',
                component: './MyCard'
            },{
                path: 'card2',
                component: './MyCard2'
            }
        ]
    }]
};