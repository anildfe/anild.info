import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from "bootstrap-vue";
import VueParticles from 'vue-particles';
import Scrollactive from 'vue-scrollactive';
import AOS from 'aos';
import store from './store';

import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css'
import "./assets/scss/index.scss";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueParticles);
Vue.use(Scrollactive);


new Vue({
  store,
  created() {
    AOS.init();
  },
  render: h => h(App),
}).$mount('#app')
