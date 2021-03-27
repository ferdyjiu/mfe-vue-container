import { createApp } from 'vue';
// import { mount } from 'menu/MenuApp';
import App from './components/App.vue';

// console.log(mount);

const app = createApp(App);
app.mount(document.querySelector('#root'));