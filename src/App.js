import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import Header from "./components/layouts/Header";
import Home from "./components/home/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
    </Route>

  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
