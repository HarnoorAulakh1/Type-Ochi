import "./App.css";
import { router } from "./routing.tsx";
import { RouterProvider } from "react-router";
import { ReactLenis } from "lenis/react";
import { Notifications } from "reactjs-notify-toast";

function App() {
  return (
    <Notifications>
      <ReactLenis root>
        <RouterProvider router={router} />
      </ReactLenis>
    </Notifications>
  );
}

export default App;
