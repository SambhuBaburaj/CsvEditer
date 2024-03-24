import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import LoggedInUser from "./ProtectedRoutes/LoggedInUser";
import LoggedOutUser from "./ProtectedRoutes/LoggedOutUser";
import { Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import UploadPage from "./Pages/UploadPage";
import DashBoard from "./Pages/DashBoard";


function App() {
  return (
    <Routes>
      <Route element={<LoggedOutUser />}>
        <Route element={<Home />} path="">
          <Route path="/" element={<Navigate replace to="/uploadpage" />} />

          <Route element={<DashBoard />} path="/dashboard" />
          <Route element={<UploadPage />} path="/uploadpage" />

        
        </Route>
      </Route>

      <Route element={<LoggedInUser />}>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Route>
    </Routes>
  );
}

export default App;
