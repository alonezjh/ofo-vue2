import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import AMap from 'vue-amap'
import toast from './components/toast'

Vue.config.productionTip = false

Vue.prototype.axios = axios

Vue.use(AMap)

Vue.component(toast.name, toast)

AMap.initAMapApiLoader({
  key: '1436371b45faa879e41802121e7ea47c'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
