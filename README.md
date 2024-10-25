<div align="center">
    <h1 style="color:#8f7b30">水色天香管理系统</h1>
</div>

---

**项目使用**

```bash
# 安装依赖
npm install

# 运行项目
npm run dev

# 打包项目
npm run build

# 克隆项目
git clone https://github.com/gg3081779049/watercolor-fragrance.git
```

**目录结构**
```
|--bin  命令文件
|--dist 打包出来的文件
|--mock 模拟数据
|  |--modules  模拟数据模块
|  |--index.js  模拟数据入口文件
|--public  静态文件
|  |--favicon.ico  网站图标
|  |--index.html  网站入口文件
|--src  开发的总目录
|  |--api  接口api
|  |--assets  静态文件、图片
|  |--components  通用组件和行业版的组件
|  |--directive  指令
|  |  |--modules  指令模块
|  |--icons  图标
|  |  |--svg  全局svg文件
|  |  |--index.js  导入所有图标文件
|  |  |--svgo.yml  svg配置文件
|  |--layout  布局文件
|  |  |--components  通用布局组件
|  |  |--layouts  多布局模块
|  |  |--index.js  布局入口文件
|  |--locales  国际化文件
|  |  |--lang  多语言模块
|  |  |--index.js  国际化入口文件
|  |--plugins  插件
|  |--router  路由
|  |--store  数据状态管理
|  |  |--modules  数据状态模块
|  |  |--plugins  pinia插件
|  |  |--index.js  pinia入口文件
|  |--styles  全局的样式文件
|  |--utils  全局的公共方法和工具
|  |--views  所有的页面
|  |  |--error 错误页面
|  |  |--login.vue  登录页面
|  |  |--register.vue  注册页面
|  |--App.vue  vue最外层组件
|  |--main.js  vue入口文件
|  |--permission.js  全局导航守卫
|  |--settings.js  系统配置文件
```
