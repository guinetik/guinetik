import { render } from "solid-js/web";
import "./index.css";
import App from "./App";
import SiteProvider from "./SiteStore";
import TokenProvider from "./components/TokenProvider";

render(() => (
    <TokenProvider>
        <SiteProvider>
            <App />
        </SiteProvider>
    </TokenProvider>
), document.getElementById("app"));
