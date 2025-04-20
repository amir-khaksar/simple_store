import AuthPage from "./Pages/Auth/types/AuthPage";
import Index from "./Pages/Index/Index";


export const routes = [
    {path: "/", element: <Index />},
    {path: "/auth", element: <AuthPage />},
];

export default routes;
