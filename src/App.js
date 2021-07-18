import React from "react";
import { AppContextProvider } from "./hooks";
import { Cart, Shop } from "./pages";

const App = () => {
  return (
    <AppContextProvider>
      <Shop />
      <Cart />
    </AppContextProvider>
  );
};

export default App;
