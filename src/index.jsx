import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import SiteProvider from "./SiteStore";

render(() => (
    <SiteProvider>
        <App />
    </SiteProvider>
), document.getElementById("app"));
