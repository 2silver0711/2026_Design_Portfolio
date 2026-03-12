import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import { HomePage } from "./components/home/HomePage";
import { ProfilePage } from "./components/profile/ProfilePage";
import { ProjectsPage } from "./components/projects/ProjectsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "profile", Component: ProfilePage },
      { path: "projects", Component: ProjectsPage },
    ],
  },
], { basename: "/2026_Design_Portfolio" });
