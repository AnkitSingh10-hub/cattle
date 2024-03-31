import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useMainStore } from "@/stores/main";
import { useStyleStore } from "@/stores/style";
import { darkModeKey, styleKey } from "@/config";
import './vee.validate'
import { Quasar, Notify, Dialog, LocalStorage } from "quasar"; // Import Quasar components
import "./css/main.css";

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css';

// Import Quasar css
/* Init Pinia */
const pinia = createPinia();
const app = createApp(App);
app.use(Quasar, {
  plugins: {
    Notify,
    Dialog,
    LocalStorage
  },
  config: {
    notify: {
      position: 'top-right',
      progress: true,
      timeout: 2500,
      actions: [
        {
          icon: 'close',
          color: 'white'
        }
      ]
    }
  }
});

/* Create Vue app */
app.use(router).use(pinia).mount("#app");


/* Init Pinia stores */
const mainStore = useMainStore(pinia);
const styleStore = useStyleStore(pinia);

/* Fetch sample data */
mainStore.fetch("clients");
mainStore.fetch("history");

/* App style */
styleStore.setStyle(localStorage[styleKey] ?? "basic");

/* Dark mode */
if (
  (!localStorage[darkModeKey] &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  localStorage[darkModeKey] === "1"
) {
  styleStore.setDarkMode(true);
}

/* Default title tag */
const defaultDocumentTitle = "Admin One Vue";

/* Set document title from route meta */
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle;
});
