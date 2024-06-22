import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CurrencyContextProvider } from "./contexts/currency.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CurrencyContextProvider>
    <App />
  </CurrencyContextProvider>
  // </React.StrictMode>,
);
