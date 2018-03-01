const Koa = require('koa')

// 引入请求体解析中间件
const bodParser = require("koa-bodyparser")

//引入视图引擎
const nunjucks = require('koa-nunjucks-2')

// 引入 koa-static
const staticFiles = require('koa-static')
const app = new Koa()

// 添加路由
const router = require('./router')
const path = require("path");
// 指定 public目录为静态资源目录，用来存放 js css /koa2/images 等
app.use(staticFiles(path.resolve(__dirname, "./public/")))
app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'),// 指定视图目录
    nunjucksConfig: {
        trimBlocks: true // 开启转义 防Xss
    }
}))

app.use(bodParser())
router(app)

app.listen(3000, ()=>{
    console.log('server is running at http://localhost:3000')
})