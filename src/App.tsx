import "./App.css";
import { router } from "./routing.tsx";
import { RouterProvider } from "react-router";
import { ReactLenis} from "lenis/react";

function App() {
  return (
      <ReactLenis root>
        <RouterProvider router={router} />
      </ReactLenis>
  );
}

export default App;
