import ReactDOM from "react-dom";
import { App } from "./App";
import "./style.scss";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { GlobalStoreProvider } from "store/globalStore";

ReactDOM.render(
  <>
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  </>,
  document.getElementById("root")
);
