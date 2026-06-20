import { createBrowserRouter, RouterProvider } from "react-router";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";
import Home from "./pages/home";

const router = createBrowserRouter([
  { path: "/page1", element: <Page1 /> },
  { path: "/page2", element: <Page2 /> },
  { path: "/page3", element: <Page3 /> },
  { path: "/", element: <Home /> },
])

function App() {
  return <RouterProvider router = { router } />;
}

export default App;
