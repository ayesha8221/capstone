import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
import Cookies from "js-cookie";
const app = createApp(App);
app.use(store);
app.use(router);
app.use(Cookies);
store.dispatch("init");
app.mount("#app");

// createApp(App).use(store).use(router).mount('#app')
