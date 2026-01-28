import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";
import { RecentActivityProvider } from "./context/RecentActivityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TaskProvider>
          <RecentActivityProvider>
            <App />
          </RecentActivityProvider>
        </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
