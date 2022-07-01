import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.scss'
import './iconfont/iconfont.css'
import installIcons from './icons/index.js'
import Vuex from 'vuex'
import './permission'
const app = createApp(App)
installIcons(app)
// Date.prototype.format = function (fmt = 'yyyy-MM-dd HH:mm:ss') {
//   const opts = {
//     'y+': this.getFullYear().toString(),
//     'M+': (this.getMonth() + 1).toString(),
//     'd+': this.getDate().toString(),
//     'H+': this.getHours().toString(),
//     'm+': this.getMinutes().toString(),
//     's+': this.getSeconds().toString(),
//     'f+': this.getMilliseconds().toString()
//   }
//   for (const key in opts) {
//     const value = opts[key]
//     if (new RegExp(`(${key})`).test(fmt)) {
//       const result = RegExp.$1
//       fmt = fmt.replace(result, value.padStart(result.length, '0'))
//     }
//   }
//   return fmt
// }

app.use(store).use(router).use(ElementPlus).use(Vuex).mount('#app')
