import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import router from "./router";

const firebaseConfig = {
  apiKey: "AIzaSyCq0qz8nu3Cs9fPTG9yCPZ1WDAB4pFfKiE",
  authDomain: "jtw-anatoliy.firebaseapp.com",
  projectId: "jtw-anatoliy",
  storageBucket: "jtw-anatoliy.appspot.com",
  messagingSenderId: "71446193253",
  appId: "1:71446193253:web:1d2bd86377faed8c19d28c",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(createPinia());

app.mount("#app");
