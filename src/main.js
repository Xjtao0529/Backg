import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import './iconfont/iconfont.css'
import installIcons from './icons/index.js'
import './permission'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
installIcons(app)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(store).use(router).mount('#app')
