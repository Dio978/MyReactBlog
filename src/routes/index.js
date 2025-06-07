import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import PostList from "../components/PostList";
import PostRenderer from "../components/PostRenderer";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // { index: true, element: <Home /> },
      { path: "blog", element: <PostList /> },
      { path: "about", element: <About /> },
      { path: "/", element: <HomePage /> },
      { path: "/post/:id", element: <PostRenderer /> },
    ],
  },
]);

export default router;
