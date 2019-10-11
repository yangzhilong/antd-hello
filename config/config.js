export default {
    /** 设置page文件夹为非复数（pages -> page） */
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            
        }]
    ],
    routes: [{
        path: '/',
        component: './HelloWorld'
    },{
        path: '/hello',
        component: './HelloWorld'
    }]
};