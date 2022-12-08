import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Encrypt from "./encrypt/Encrypt";
import RedirectTo from "./RedirectTo";
import Decode from "./decode/Decode";
import SetKey from "./SetKey";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/cryptobby",
    element: <RedirectTo path="/cryptobby/encrypt" />,
  },
  {
    path: "/cryptobby/msg/:msg",
    element: <Decode />,
  },
  {
    path: "/cryptobby/encrypt",
    element: <Encrypt />,
  },
  {
    path: "/cryptobby/setkey/:key",
    element: <SetKey />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
