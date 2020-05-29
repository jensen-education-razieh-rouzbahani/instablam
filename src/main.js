import Vue from 'vue'
import App from './App.vue'


Vue.prototype.online = window.navigator.onLine;
Vue.prototype.createObjectURL = window.URL.createObjectURL;
Vue.prototype.Caman = window.Caman;

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

import { requestNotificationPermission } from "../src/js/notifications.js";
import push from "../src/js/push-notifications";

requestNotificationPermission();

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .then(() => console.log("Registered service worker"))
      .catch(error => console.log("Error register service worker ", error));
    push();
  }
}

registerServiceWorker();
