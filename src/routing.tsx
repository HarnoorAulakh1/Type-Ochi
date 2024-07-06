import Home from "./components/Home";
import { createBrowserRouter } from "react-router-dom";
import Applayout from "./components/Applayout";
import Services from "./components/services/services";
import Work from "./components/work/work";
import About from "./components/about";
import Insights, { Card2 } from "./components/insights";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/work", element: <Work /> },
      { path: "/about", element: <About /> },
      {
        path: "/insights",
        element: <Insights />,
        children: [
          {
            path: "all",
            element: (
              <div className="flex flex-col md:flex-row gap-0 md:gap-2">
                <div className="flex flex-row gap-5">
                  <Card2
                    img="/all.png"
                    heading="Presenting to an International Audience: Tips and Lessons Learned."
                    foot="By Ihor Hulyahrodskyy
26 May. 23"
                    button="public speaking"
                  />
                </div>
                <div className="flex flex-row gap-5">
                  <Card2
                    img="/click.jpeg"
                    heading="Presenting to an International Audience: Tips and Lessons Learned."
                    foot="By Ihor Hulyahrodskyy
26 May. 23"
                    button="public speaking"
                  />
                </div>
              </div>
            ),
          },
          {
            path: "presentation",
            element: (
              <div className="flex flex-row gap-5">
                <Card2
                  img="/click.jpeg"
                  heading="Presenting to an International Audience: Tips and Lessons Learned."
                  foot="By Ihor Hulyahrodskyy
26 May. 23"
                  button="presentation template"
                />
              </div>
            ),
          },
          {
            path: "public",
            element: (
              <div className="flex flex-row gap-5">
                <Card2
                  img="/all.png"
                  heading="Presenting to an International Audience: Tips and Lessons Learned."
                  foot="By Ihor Hulyahrodskyy
26 May. 23"
                  button="public speaking"
                />
              </div>
            ),
          },
          {
            path: "story",
            element: (
              <div className="flex flex-row gap-5">
                <Card2
                  img="/click.jpeg"
                  heading="Presenting to an International Audience: Tips and Lessons Learned."
                  foot="By Ihor Hulyahrodskyy
26 May. 23"
                  button="presentation template"
                />
              </div>
            ),
          },
        ],
      },
    ],
  },
]);
