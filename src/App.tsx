import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
   const router = useRoutes(routes);

   return <>{router}</>;
};

export default App;
