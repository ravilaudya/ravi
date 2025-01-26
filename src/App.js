import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
      },
    ],
    {
      basename: "/ravi", // Match your github repo name here and home page in package.json
    }
  );

  return <RouterProvider router={router} />;
}

export default App;
