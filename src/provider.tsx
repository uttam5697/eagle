import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { MainErrorFallback } from "./components/error/main";
import { createAppRouter } from "./router";
import { UserProvider } from "./components/context/UserContext";

const queryClient = new QueryClient();

const AppProvider = () => {
    return (
        <React.Suspense >
            <ErrorBoundary FallbackComponent={MainErrorFallback}>
                <QueryClientProvider client={queryClient}>
                    <UserProvider>
                    <RouterProvider router={createAppRouter} />
                    </UserProvider>
                </QueryClientProvider>
            </ErrorBoundary>
        </React.Suspense>
    );
};

export default AppProvider;
