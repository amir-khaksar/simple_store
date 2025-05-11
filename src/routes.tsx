import About from "./Pages/About/About";
import AuthPage from "./Pages/Auth/AuthPage";
import Index from "./Pages/Index/Index";
import ShoppingCard from "./Pages/ShoppingCard/ShoppingCard";

export const routes = [
   { path: "/", element: <Index /> },
   { path: "/auth", element: <AuthPage /> },
   { path: "/about", element: <About /> },
   { path: "/shoppingCard", element: <ShoppingCard /> },
];

export default routes;
