// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';
// import { db, auth } from './config/firebase';

// window.db = db;

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch('currentUser', user);
//   } else {
//     store.dispatch('currentUser', null);
//   }

//   createApp(App).use(store).use(router).mount('#app');
// });

// createApp(App).use(store).use(router).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import firebase from './config/firebase';

// Add firebase to project

firebase.auth().onAuthStateChanged((user) => {
  user
    ? store.dispatch('auth/setCurrentUser', {
        email: user.email,
        uid: user.uid,
      })
    : store.dispatch('auth/setCurrentUser', null);
});

const app = createApp(App);

// app.use("DatePicker", DatePicker);
app.use(router);
app.use(store);

app.mount('#app');
