1、安装Node

2、安装React环境
由于国内npm运行较慢，推荐使用cnpm替代。
2.1 安装cnpm
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
$ npm config set registry https://registry.npm.taobao.org
2.2 安装create-react-app
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
2.3 运行react项目
$ npm start

3、配置Antd环境
3.1 配置umi依赖
$ cnpm init -y
$ cnpm install umi --save-dev
$ cnpm install umi-plugin-react --save-dev

3.2 配置Antd
$ cnpm install andt --save
3.3 构建和部署
$ cnpm install serve -g
$ serve ./dist
3.4 运行
$ npm run dev