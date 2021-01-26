/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('lens-component', require('./components/LensComponent.vue').default);
Vue.component('recordvideo-component', require('./components/RecordVideoComponent.vue').default);
Vue.component('video-component', require('./components/VideoComponent.vue').default);
Vue.component('display-component', require('./components/DisplayComponent.vue').default);
Vue.component('audio-component', require('./components/AudioComponent.vue').default);
Vue.component('output-component', require('./components/OutputComponent.vue').default);
Vue.component('tally-component', require('./components/TallyComponent.vue').default);
Vue.component('configuration-component', require('./components/ConfigurationComponent.vue').default);

Vue.component('systeminfo-component', require('./components/SystemInfoComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
