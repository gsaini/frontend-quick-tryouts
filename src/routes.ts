import { createBrowserRouter } from "react-router-dom";
import AppLayout from './AppLayout';
import { HomePage, ChartsPage, GreetingsPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "charts", Component: ChartsPage },
      { path: "greetings", Component: GreetingsPage }
    ]
  },
]);
