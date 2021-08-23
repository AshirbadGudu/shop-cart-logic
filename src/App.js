import { Loader } from "components/core";
import { Suspense } from "react";
import { AppContextProvider } from "hooks";
import { PublicRoutes } from "routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <AppContextProvider>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <PublicRoutes />
        </BrowserRouter>
      </Suspense>
    </AppContextProvider>
  );
};

export default App;
