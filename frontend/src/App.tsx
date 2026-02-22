import { BrowserRouter, Routes, Route } from "react-router";
import "./App.scss";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import DashboardLayout from "./layout/DashboardLayout";
import { AuthProvider } from "./context/AuthProvider";
import { ProtectedRoute } from "./layout/ProtectedRoute";
import { PublicRoute } from "./layout/PublicRoute";
import MedicationPage from "./test/MedicationPage";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={PublicRoute}>
              <Route path="/login" Component={Login} />
            </Route>
            <Route Component={ProtectedRoute}>
              <Route path="/" Component={DashboardLayout}>
                <Route index Component={Home} />
                <Route path="/test" Component={MedicationPage} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
