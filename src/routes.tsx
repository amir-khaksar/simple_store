import AuthPage from "./Pages/Auth/AuthPage";
import Index from "./Pages/Index/Index";


export const routes = [
    {path: "/", element: <Index />},
    {path: "/auth", element: <AuthPage />},
];

export default routes;
