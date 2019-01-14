import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import './vconsole';
import './helpers';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(VueRouter);

Vuex.Store.prototype.getter = function getter(type) {
  return this.getters[type];
};

const Store = new Vuex.Store();

const Router = new VueRouter({
  mode: 'history',
  routes: [],
});

const Boot = options => new Vue({
  router: Router,
  store: Store,
  render: h => h(options.App),
}).$mount('#app');

export {
  Boot,
  Store,
  Router,
};
