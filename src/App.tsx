import { createContext, useState } from "react";
import "./App.css";
import { router } from "./routing.tsx";
import { RouterProvider } from "react-router";
import { ReactLenis, useLenis } from "lenis/react";

export const LoadingContext = createContext({
  loading: { loading: false, value: "" },
  set: (loading: { loading: boolean; value: string }) => {},
});

function App() {
  const lenis = useLenis();
  const [loading, set] = useState({ loading: false, value: "" });
  return (
    <LoadingContext.Provider value={{ loading, set }}>
      <ReactLenis root>
        <RouterProvider router={router} />
      </ReactLenis>
    </LoadingContext.Provider>
  );
}

export default App;
