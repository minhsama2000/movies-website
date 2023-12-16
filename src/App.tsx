import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routers/index";

function App() {
  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
