import About from "./Pages/About/About";
import AuthPage from "./Pages/Auth/AuthPage";
import Index from "./Pages/Index/Index";

export const routes = [
   { path: "/", element: <Index /> },
   { path: "/auth", element: <AuthPage /> },
   { path: "/about", element: <About /> },
];

export default routes;
