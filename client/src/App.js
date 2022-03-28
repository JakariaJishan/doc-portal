import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/404Page/Error";
import AppointmentMain from "./components/AppointmentPage/AppointmentMain/AppointmentMain";
import DashHome from "./components/Dashboard/DashHome/DashHome";
import Home from "./components/HomePage/Home/Home";
import Login from "./components/LogIn/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
function App() {
  const [collectUser, setCollectUser] = useState([]);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/appointment" element={<AppointmentMain />} />
            <Route path="/dashboard/*" element={<DashHome />} />
          </Route>
          <Route
            path="/login"
            element={<Login setCollectUser={setCollectUser} />}
          />

          {/* <Route path="/dashboard/*" element={<DashHome />} /> */}
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
