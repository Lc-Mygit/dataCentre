// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'

// import ElementUI from 'element-ui';
// import axios from 'axios'

//引入时间日期的封装的方法
require("./../static/js/Timeformat");
//引用阿里巴巴矢量图库
import '@/assets/icons/iconfont.css';
// 引入echarts图表 
import echarts from 'echarts'

import App from './App'
import router from './router'

import 'babel-polyfill'
import util from './common/util'
import Vuex from 'vuex'
import store from './store'
// import CKEditor from '@ckeditor/ckeditor5-vue';
window.moment=require('moment')


// import 'element-ui/lib/theme-chalk/index.css';
// import '../static/css/theme-green/index.css';

//引入多语言支持
import i18n from './common/i18n'


Vue.prototype.$ajax=axios;
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false


Vue.use(util);
Vue.use(Vuex);



// Vue.use(CKEditor);

import permission from './directive'
process.env.MOCK && require('@/apimock')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,//挂载i18n
  router,
  store,
  components: { App },
  template: '<App/>'
})

