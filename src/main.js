import "core-js/stable";
import "regenerator-runtime/runtime";
import App from "./App.svelte";
import "./global.scss";

const app = new App({
  target: document.body,
  props: {
    name: "world",
  },
});

window.app = app;

export default app;
