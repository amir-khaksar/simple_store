import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

import "./App.css";

const App = () => {
   const router = useRoutes(routes);

   return <>{router}</>;
};

export default App;
