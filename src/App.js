import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Encrypt from "./encrypt/Encrypt";
import RedirectTo from "./RedirectTo";
import Decode from "./decode/Decode";
import SetKey from "./SetKey";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RedirectTo path="/encrypt" />,
  },
  {
    path: "/msg/:msg",
    element: <Decode />,
  },
  {
    path: "/encrypt",
    element: <Encrypt />,
  },
  {
    path: "/setkey/:key",
    element: <SetKey />,
  },
], {basename: '/cryptobby'});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
