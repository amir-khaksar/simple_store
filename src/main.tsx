import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
   <QueryClientProvider client={queryClient}>
      <BrowserRouter>
         <StrictMode>
            <App />
         </StrictMode>
      </BrowserRouter>
   </QueryClientProvider>
);
