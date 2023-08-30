import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Detail from "./pages/Detail";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="countries" element={<Layout />}>
          <Route path=":name" element={<Detail />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
