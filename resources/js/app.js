require('./bootstrap');

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

window.Vue = require('vue').default;
Vue.use(ElementUI);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('employee-form', require('./components/employee/EmployeeForm.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
