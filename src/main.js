import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // Import your router

const app = createApp(App);
app.use(router); // Use the router in your app
app.mount("#app");
