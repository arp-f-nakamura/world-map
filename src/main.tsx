import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/fonts.css";
import { LanguageDataProvider } from "./contexts/LanguageContextProvider.tsx";
import { TestDataProvider } from "./contexts/TestContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <LanguageDataProvider>
            <TestDataProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </TestDataProvider>
        </LanguageDataProvider>
    </React.StrictMode>,
);
