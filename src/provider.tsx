import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { MainErrorFallback } from "./components/error/main";
import { createAppRouter } from "./router";

const queryClient = new QueryClient();

const AppProvider = () => {
    return (
        <React.Suspense >
            <ErrorBoundary FallbackComponent={MainErrorFallback}>
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={createAppRouter} />
                </QueryClientProvider>
            </ErrorBoundary>
        </React.Suspense>
    );
};

export default AppProvider;
