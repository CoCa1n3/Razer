import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { CartProvider } from "react-use-cart";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../src/redux/store/store";
import { ContextProvider } from "./context.jsx";
import { FavContextProvider } from "./favContent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <CartProvider>
        <Provider store={store}>
          <FavContextProvider>
            <App />
          </FavContextProvider>
        </Provider>
      </CartProvider>
    </ContextProvider>
  </BrowserRouter>
);
