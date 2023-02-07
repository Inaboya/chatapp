import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import firebase from './config/firebase';

firebase.auth().onAuthStateChanged((user) => {
  user
    ? store.dispatch('auth/setCurrentUser', {
        email: user.email,
        uid: user.uid,
      })
    : store.dispatch('auth/setCurrentUser', null);

  createApp(App).use(store).use(router).mount('#app');
});
